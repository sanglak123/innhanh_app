import axios from "axios";

const root_axios = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_URL_BE + `/api/v3`
});

export default root_axios;