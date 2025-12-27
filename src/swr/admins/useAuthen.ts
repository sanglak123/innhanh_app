import useSWR from "swr";
import { IUser } from "./useListAdmin";
import { RefreshToken } from "@/config/refresh_token";
import axiosJWT from "@/config/axios_jwt";

let globalMutate: any = null;

// Hàm fetch user login
const fetcher = async (url: string) => {
    const token = localStorage.getItem("access_token");
    if (!token) {
        if (globalMutate) globalMutate(undefined, false);
        throw new Error("No access token");
    }
    try {
        const res = await axiosJWT.get(url);
        if (!res.data?.userLogin) throw new Error("Unauthorized");
        return res.data.userLogin;
    } catch (err: any) {
        const status = err?.response?.status;

        // Khi access token hết hạn
        if (status === 401) {
            const newToken = await RefreshToken();
            if (!newToken) {
                localStorage.removeItem("access_token");
                if (globalMutate) globalMutate(undefined, false);
                throw new Error("Refresh failed");
            }

            // retry với token mới         
            const retryRes = await axiosJWT.get(url);
            return retryRes.data.userLogin;
        }

        // Nếu lỗi khác → logout
        localStorage.removeItem("access_token");
        if (globalMutate) globalMutate(undefined, false);
        throw err;
    }
};

// Hook SWR quản lý Auth
const useAuthen = () => {
    const swr = useSWR<IUser>("/auth/authen", fetcher, {
        refreshInterval: 60000, // check mỗi 1 phút
        revalidateOnFocus: true,
        shouldRetryOnError: false,
    });

    globalMutate = swr.mutate;

    return {
        UserLogin: swr.data,
        isAuthenticated: !!swr.data && !swr.error,
        loggedOut: !!swr.error,
        loading: !swr.data && !swr.error,
        mutate: swr.mutate,
    };
};

export default useAuthen;
