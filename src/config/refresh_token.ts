import root_axios from "./root_axios";

export const RefreshToken = async (): Promise<string | null> => {
    try {
        const res = await root_axios.get("/auth/refresh-token");
        const newToken = res.data?.access_token;
        if (newToken) {
            localStorage.setItem("access_token", newToken);
            return newToken;
        }
        return null;
    } catch (err: any) {
        const status = err?.response?.status;

        // Nếu 401/403 => refresh token hết hạn => logout
        if (status === 401 || status === 403) {
            localStorage.removeItem("access_token");
        }
        return null;
    }
};