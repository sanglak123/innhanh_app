import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { RefreshToken } from "./refresh_token";
import api_auth from "@/call_api/auth";


let isRefreshing = false;
let refreshQueue: Array<() => void> = [];

// Notify all waiting requests once refresh done
const notifyQueue = () => {
    refreshQueue.forEach((cb) => cb());
    refreshQueue = [];
};
const CreateAxiosInstance = () => {
    const instance = axios.create({
        baseURL: "/api/v3",
        withCredentials: true,
    });

    // REQUEST interceptor
    instance.interceptors.request.use(
        async (config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem("access_token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // RESPONSE interceptor
    instance.interceptors.response.use(
        (res) => res,
        async (error: AxiosError) => {
            const original = error.config as InternalAxiosRequestConfig & {
                _retry?: boolean;
            };
            const status = error.response?.status;

            // Nếu token hết hạn → refresh
            if (status === 401 && !original._retry) {
                original._retry = true;

                if (!isRefreshing) {
                    isRefreshing = true;
                    try {
                        const newToken = await RefreshToken();
                        if (!newToken) {
                            // Refresh thất bại → logout
                            await api_auth.SignOut(true);
                            localStorage.removeItem("access_token");
                            throw new Error("Refresh token expired");
                        }
                    } finally {
                        isRefreshing = false;
                        notifyQueue();
                    }
                } else {
                    // Nếu đang refresh thì chờ
                    await new Promise<void>((resolve) => refreshQueue.push(resolve));
                }

                const newToken = localStorage.getItem("access_token");
                if (newToken && original.headers) {
                    original.headers["Authorization"] = `Bearer ${newToken}`;
                    return instance(original); // retry
                }
            }

            return Promise.reject(error);
        }
    );

    return instance;
};

const axiosJWT = CreateAxiosInstance();
export default axiosJWT;