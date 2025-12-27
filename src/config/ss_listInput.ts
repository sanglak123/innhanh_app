import { IInput } from "@/swr/data/product/useListInputProduct";

export default function ss_listInput(list01: string, list02: string) {
    const listA: IInput[] = JSON.parse(list01);
    const listB: IInput[] = JSON.parse(list02);

    if (listA.length !== listB.length) return false;

    for (let i = 0; i < listA.length; i++) {
        const inputA = listA[i];
        const inputB = listB[i];
        if (inputA.value !== inputB.value) {
            return false; // khác chỉ cần 1 input là khác
        }
    }

    return true; // ✅ chỉ return true nếu toàn bộ đều giống nhau
}
