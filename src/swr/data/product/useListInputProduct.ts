import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";
export type IInput = {
    id: number;
    idProduct: number
    index: number
    type: string
    placeholder: string
    label: string
    col: number
    rows: number
    min: number
    max: number
    step: number
    options: any
    error_data: string
    value: any
    txt_true: string
    txt_false: string
    sign: string
}

const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "GET",
        url: url
    });

    if (res.status === 200) {
        const list: IInput[] = res.data.ResultData;
        return list;
    }

    throw new Error("Internal server error!");
}

export default function useListInputProduct(link: string) {
    const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
        link ? `/data/clients/products/${link}/inputs` : null,
        fetcher
    );

    return { data, error, isLoading, isValidating, mutate };
}