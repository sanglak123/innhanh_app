'use client'

import { FaPrint } from "react-icons/fa";
import { IoPrintOutline } from "react-icons/io5";
import { TfiPrinter } from "react-icons/tfi";
import { MdOutlineDesignServices } from "react-icons/md";
import { SlEvent } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";
import LoadingServices from "@/loader/loading_services";
import useCategorys, { ICategory } from "@/swr/data/useCategorys";
import get_url_img from "@/config/get_url_img";

function ServiceCard({ service, isLCP = false }: { service: ICategory; isLCP?: boolean }) {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={get_url_img("services", service.banner)}
                    alt={service.banner}
                    fill
                    priority={isLCP}
                    fetchPriority={isLCP ? "high" : "auto"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={100}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    {service.id === 1 ? (
                        <FaPrint className="text-white text-6xl" />
                    ) : service.id === 2 ? (
                        <IoPrintOutline className="text-white text-6xl" />
                    ) : service.id === 3 ? (
                        <TfiPrinter className="text-white text-6xl" />
                    ) : service.id === 4 ? (
                        <MdOutlineDesignServices className="text-white text-6xl" />
                    ) : (
                        <SlEvent className="text-white text-6xl" />
                    )}
                </div>
            </div>

            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 capitalize">{service.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-[13px] md:text-[16px] mb-4">{service.slogan}</p>
                <Link
                    className="bg-indigo-500 text-white hover:bg-indigo-700 px-6 py-3 rounded-full transition-colors duration-300"
                    href={service.link}
                >
                    Xem Thêm
                </Link>
            </div>
        </div>
    );
}


function ServicesSection() {
    //system
    //swr
    const Services = useCategorys();

    if (Services.error) return null;
    if (Services.isLoading || !Services.data) return <LoadingServices />;

    return (
        <section className="bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
                        Dịch Vụ Tại InNhanh79
                    </h1>
                    <p className="text-[13px] md:text-lg text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
                        Chất lượng hàng đầu, giá cả cạnh tranh - In ấn độc đáo, khẳng định
                        thương hiệu - Tư duy sáng tạo, giải pháp in ấn tối ưu
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Services?.data?.rows?.map((service, index) => (
                        <ServiceCard
                            key={service.id ?? index}
                            service={service}
                            isLCP={index === 0} // chỉ card đầu tiên là LCP
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ServicesSection;