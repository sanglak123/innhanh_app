import { IUser } from "../admins/useListAdmin";
import root_axios from "@/config/root_axios";
import useSWRImmutable from "swr/immutable";
type Data = {
    rows: IUser[],
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

export default function useListCVTV() {
    const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
        `/data/clients/cvtv`,
        fetcher,
    );

    return { data, error, isLoading, isValidating, mutate };
}