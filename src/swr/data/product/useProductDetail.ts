import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";
import { IImage } from "../useImages";
import { ICategory } from "../useCategorys";

export type IProduct = {
    id: number
    name: string
    link: string
    intro: string
    decs: string
    best: boolean
    tags: string
    min_print: number
    idCate: number
    calculator: boolean
    Images?: IImage[]
    Category?: ICategory;
}

const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "GET",
        url: url
    });

    if (res.status === 200) {
        const product: IProduct = res.data.ResultData;
        return product;
    }

    throw new Error("Internal server error!");
}

export default function useProductDetail(link: string) {
    const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
        link ? `/data/clients/products/${link}/infomations` : null,
        fetcher
    );

    return { data, error, isLoading, isValidating, mutate };
}