
import useSWRImmutable from "swr/immutable";
import { IProduct } from "./useProductDetail";
import root_axios from "@/config/root_axios";
type Data = {
    rows: IProduct[],
    count: number
}
const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "GET",
        url: url
    });

    if (res.status === 200) {
        const { rows }: Data = res.data;
        return { rows };
    }

    throw new Error("Internal server error!");
}

export default function useBestSeller() {
    const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
        `/data/clients/best-seller`,
        fetcher,      
    );

    return { data, error, isLoading, isValidating, mutate };
}