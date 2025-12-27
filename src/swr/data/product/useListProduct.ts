import { IProduct } from "./useProductDetail";
import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";
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
        const { rows, count }: Data = res.data;
        return { rows, count };
    }

    throw new Error("Internal server error!");
}

export default function useListProducts(page: number, limit: number, cate_id: number | string, sort_by?: string, search_query?: string) {
    const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
        `/data/clients/products?cate_id=${cate_id}&page=${page}&limit=${limit}&sort_by=${sort_by}&search_query=${search_query}`,
        fetcher,
    );

    return { data, error, isLoading, isValidating, mutate };
}