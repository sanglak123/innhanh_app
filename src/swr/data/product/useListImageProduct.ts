import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";
import { IImage } from "../useImages";

const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "GET",
        url: url
    });

    if (res.status === 200) {
        const list: IImage[] = res.data.ResultData;
        return list;
    }

    throw new Error("Internal server error!");
}

export default function useListImageProduct(link: string) {
    const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
        link ? `/data/clients/products/${link}/images` : null,
        fetcher
    );

    return { data, error, isLoading, isValidating, mutate };
}