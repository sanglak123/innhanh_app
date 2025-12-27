import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";

export type IIn79 = {
    id: number;
    email: string
    hotline: string
    zalo: string
    facebook: string
    logo: string
    address: string
    Brands?: IBrand[]
}

export type IBrand = {
    id: number
    name: string
    email: string
    hotline: string
    address: string
    zalo: string
    facebook: string
    idCom: number
}

async function fetcher(url: string) {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const { row }: { row: IIn79 } = res.data;
        return row;
    }
};

export default function useIn79() {
    const { data, error, isLoading, mutate } = useSWRImmutable(`/data/clients/innhanh79`, fetcher);

    return { data, error, isLoading, mutate };
}