import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";

export type IImage = {
    id: number,
    folder: string,
    filename: string,
    idProduct: number
}

async function fetcher(url: string) {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const { rows, count }: { rows: IImage[], count: number } = res.data;
        return { rows, count };
    }
};

export default function useImages(folder: string) {
    const { data, error, isLoading, mutate } = useSWRImmutable(`/data/clients/images?folder=${folder}`, fetcher);

    return { data, error, isLoading, mutate };
}