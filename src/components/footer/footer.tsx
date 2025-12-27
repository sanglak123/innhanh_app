"use client"
import {
    FaEnvelope,
    FaFacebook,
    FaMapMarkerAlt,
    FaPhone,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { LiaUserTagSolid } from "react-icons/lia";
import { TbCreditCardPay } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingFooter from "@/loader/loading_footer";
import useIn79 from "@/swr/data/useIn79";
import get_url_img from "@/config/get_url_img";

function WrapFooter() {
    const In79 = useIn79();
    const [mount, setMount] = useState(false);
    useEffect(() => { setMount(true) }, []);

    if (In79.error) return null;
    if (In79.isLoading || !In79.data) return <LoadingFooter />;

    return (
        <footer className={`bg-blue-950 dark:bg-gray-900 text-white py-8`}        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="logo mx-auto">
                        {
                            In79.data &&
                            <Image
                                width={100}
                                height={100}
                                src={get_url_img("logo", In79.data.logo)}
                                alt="Logo"
                                className="h-16 w-1/2 mx-auto cursor-pointer object-contain mb-6"
                                quality={100}
                            />
                        }


                        <ul className="list-disc mx-auto text-[16px] italic">
                            <li>In ấn chuyên nghiệp, đáp ứng mọi yêu cầu</li>
                            <li>Sắc nét, chuẩn màu, giao hàng nhanh</li>
                            <li>Đồng hành cùng bạn trên mọi ấn phẩm</li>
                        </ul>

                    </div>
                    {In79.data?.Brands?.map((brand, index) => (
                        <div key={index}>
                            <h5
                                className="relative text-white text-xl font-bold mb-4 after:content-[''] after:absolute after:left-0 after:-bottom-1 inline-block after:w-full after:h-0.5 after:bg-white">
                                {brand.name}
                            </h5>

                            <div className="space-y-2">
                                <p className="flex items-center hover:text-blue-300 transition-all duration-150">
                                    <FaMapMarkerAlt className="mr-8" />
                                    {brand.address}
                                </p>
                                {
                                    brand.hotline &&
                                    <Link
                                        href={`tel:${brand.hotline}`}
                                        className="flex items-center hover:text-blue-300 transition-all duration-150"
                                    >
                                        <FaPhone className="mr-8" />
                                        {brand.hotline}
                                    </Link>
                                }
                                {
                                    brand.email &&
                                    <Link
                                        href={`mailto:${brand.email ?? "innhanh7979@gmail.com"}`}
                                        className="flex items-center hover:text-blue-300 transition-all duration-150"
                                    >
                                        <FaEnvelope className="mr-8" />
                                        {brand.email ?? "innhanh7979@gmail.com"}
                                    </Link>
                                }
                                {
                                    brand.zalo &&
                                    <Link
                                        target="_blank"
                                        href={
                                            `https://zalo.me/${brand?.zalo?.split("||")[1]}` || "#"
                                        }
                                        className="flex items-center hover:text-blue-300 transition-all duration-150"
                                    >
                                        <SiZalo fontSize={30} className="mr-5" />
                                        {brand?.zalo?.split("||")[0]}
                                    </Link>
                                }
                                {
                                    brand.facebook &&
                                    <Link
                                        target="_blank"
                                        href={brand?.facebook?.split("||")[1] || "#"}
                                        className="flex items-center hover:text-blue-300 transition-all duration-150"
                                    >
                                        <FaFacebook className="mr-8" />
                                        {brand?.facebook?.split("||")[0]}
                                    </Link>
                                }
                            </div>
                        </div>
                    ))}

                    <div>
                        <h6
                            className="relative text-white  text-xl font-bold mb-4 after:content-[''] after:absolute after:left-0 after:-bottom-1 inline-block after:w-full after:h-0.5 after:bg-white">
                            Quick Link
                        </h6>
                        <div className="space-y-2">
                            <Link
                                href="/about"
                                className="flex items-center hover:text-blue-300 transition-all duration-150"
                            >
                                <LiaUserTagSolid className="mr-4" />
                                Về Chúng Tôi
                            </Link>

                            <Link
                                href="/phuong-thuc-thanh-toan"
                                className="flex items-center hover:text-blue-300 transition-all duration-150"
                            >
                                <TbCreditCardPay className="mr-4" />
                                Phương Thức Thanh Toán
                            </Link>

                            <Link
                                href="/thoa-thuan-chinh-sach"
                                className="flex items-center hover:text-blue-300 transition-all duration-150"
                            >
                                <MdOutlinePolicy className="mr-4" />
                                Thỏa Thuận & Chính Sách
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    mount &&
                    <div className="hidden md:block mt-6">
                        <iframe
                            title="Bản đồ địa chỉ In Nhanh 79"
                            name="map"
                            aria-label="Bản đồ địa chỉ In Nhanh 79"
                            className="w-full rounded-xl shadow p-2"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.891467456159!2d106.67629628733745!3d10.802857331937814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cef69d5c5f%3A0xc1629708439d12a5!2sInNhanh%2079!5e0!3m2!1svi!2s!4v1753924697435!5m2!1svi!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                }
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-300">
                        © {new Date().getFullYear()}{" "}
                        InNhanh79 . All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default WrapFooter;
