import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";

export type ICategory = {
    id: number,
    name: string,
    link: string,
    slogan: string
    banner: string
}

async function fetcher(url: string) {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const { rows, count }: { rows: ICategory[], count: number } = res.data;
        return { rows, count };
    }
};

export default function useCategorys() {
    const { data, error, isLoading, mutate, isValidating } = useSWRImmutable(`/data/clients/categorys`, fetcher);
    return { data, error, isLoading, mutate, isValidating };
}