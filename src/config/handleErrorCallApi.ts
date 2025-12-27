import toast from "react-hot-toast";

export const handleErrorCallApi = (err: any, fallbackMessage = "Something went wrong") => {
    const message = err?.response?.data?.error || err?.message || fallbackMessage;
    toast.error(message);
};
