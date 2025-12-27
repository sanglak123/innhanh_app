import axiosJWT from "@/config/axios_jwt";
import { handleErrorCallApi } from "@/config/handleErrorCallApi";
import root_axios from "@/config/root_axios";
import { IUser } from "@/swr/admins/useListAdmin";
import toast from "react-hot-toast";

let isLoggingOut = false;

const api_auth = {
    SignIn: async (user: IUser) => {
        try {
            const res = await root_axios.post("/auth/sign-in", {
                email: user.email,
                password: user.password,
            });
            toast.success(res.data.mess);
            localStorage.setItem("access_token", res.data.access_token);
        } catch (err) {
            handleErrorCallApi(err, "Login failed");
        }
    },
    SignOut: async (expired: boolean = false) => {
        if (isLoggingOut) return;
        isLoggingOut = true;

        try {
            if (expired) {
                toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
            } else {
                // ✅ Người dùng tự đăng xuất
                const res = await axiosJWT.put("/auth/logout");
                toast.success(res.data.mess || "Đăng xuất thành công!");
            }
        } catch (err) {
            handleErrorCallApi(err, "Logout failed");
        } finally {
            localStorage.removeItem("access_token");
            // Reset flag sau 1 giây
            setTimeout(() => {
                isLoggingOut = false;
            }, 1000);
        }
    },
};

export default api_auth;