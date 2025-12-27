import get_url_img from "@/config/get_url_img";
import LoadingBestseller from "@/loader/loading_bestSeller";
import useBestSeller from "@/swr/data/product/useListBestSeller";
import Image from "next/image";
import Link from "next/link";
import { FaExpand } from "react-icons/fa";


function HomeBestseller() {

    const Productions = useBestSeller();
    if (Productions.error) return null;
    if (Productions.isLoading || !Productions.data) return <LoadingBestseller />;

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
            <div className="container w-[96vw] mx-auto px-4">
                <h1 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4 text-center">Ấn Phẩm Nổi Bật</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Productions.data?.rows?.map((item, index) => (
                        <Link
                            href={`/products/${item.link}`}
                            key={index}
                            className="group relative overflow-hidden rounded-lg cursor-pointer shadow"
                        >
                            {
                                item.Images && item.Images[0] &&
                                <Image
                                    width={500}
                                    height={500}
                                    src={get_url_img("products", item.Images[0].filename)}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            }
                            <div className="absolute bottom-0 left-0 w-full h-25 bg-black/20 px-10 py-3 opacity-100 group-hover:opacity-0 transition-all duration-500">
                                <div className="w-full h-full flex justify-center items-center">
                                    <div>
                                        <h2 className="text-xl text-white font-bold mb-2">{item.name}</h2>
                                        <p className="text-sm text-white line-clamp-2">{item.intro}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                    <FaExpand className="mx-auto mt-4 text-2xl" />
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    );
}
export default HomeBestseller;
