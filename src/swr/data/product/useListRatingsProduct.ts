export type IRating = {
    id: number
    idProduct: number
    star: number
    user: string
    position: string
    email: string
    phone: string
    mess: string
    status: boolean
}
import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";
type Data = {
    rows: IRating[],
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

export default function useListRatingsProduct(link: string) {
    const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
        link ? `/data/clients/products/${link}/ratings` : null,
        fetcher
    );

    return { data, error, isLoading, isValidating, mutate };
}