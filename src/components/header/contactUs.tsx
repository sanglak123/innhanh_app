import get_url_img from "@/config/get_url_img";
import useIn79 from "@/swr/data/useIn79";
import useListCVTV from "@/swr/data/useListCVTV";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaFacebookF, FaRegClock } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { TbBrandMessenger } from "react-icons/tb";

type Props = {
    show: boolean
    setShow: any
}

function ContactUs(props: Props) {
    const { show, setShow } = props;
    //swr
    const In79 = useIn79();
    const CVTV = useListCVTV();

    // ESC to close
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setShow(false);
        };
        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);
    }, [setShow]);
    return (
        <div
            className={`z-100 h-screen fixed top-0 right-0 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-1000 ${show ? "translate-x-0" : "translate-x-full"
                }`}
        >

            {/*Brands */}
            {
                In79.data &&
                <div className="p-3">
                    {
                        In79.data?.Brands && In79.data?.Brands.map((item, index) => (
                            <div key={index} className="my-3 border-b dark:border-white/20 px-3">
                                <h3 className="font-bold uppercase mb-4 dark:text-indigo-500">{item.name}</h3>
                                <Link href={`tel:${In79.data?.hotline}`} className="my-1 flex justify-start items-center gap-2 transition-colors underline duration-300 text-gray-600 dark:text-gray-300 hover:text-indigo-500">
                                    <FiPhone className="w-4 h-4" />
                                    <span>{item.hotline}</span>
                                </Link>
                                <Link href={`mailto:${In79.data?.email}`} className="my-1 flex justify-start items-center gap-2 transition-colors underline duration-300 text-gray-600 dark:text-gray-300 hover:text-indigo-500">
                                    <MdOutlineEmail className="w-4 h-4" />
                                    <span>{item.email}</span>
                                </Link>
                                <p className="my-1 flex justify-start items-center gap-2 text-gray-600 dark:text-gray-300">
                                    <IoLocationOutline className="w-4 h-4" />
                                    <span>{item.address}</span>
                                </p>
                                {/* //Sosiadac */}
                                <div className="my-2 flex justify-center gap-1 flex-wrap px-4 py-1">
                                    {
                                        item.facebook &&
                                        <Link
                                            target="_blank"
                                            className="p-2 rounded-md shadow-inner text-indigo-500 bg-white dark:bg-white/5 dark:border dark:border-white/20 transition-colors duration-300 hover:bg-indigo-700 hover:text-white cursor-pointer"
                                            href={`${item.facebook.split("||")[1]}`}
                                        >
                                            <FaFacebookF className="w-4 h-4" />
                                        </Link>
                                    }
                                    {
                                        item.facebook &&
                                        <Link
                                            target="_blank"
                                            className="p-2 rounded-md shadow-inner text-indigo-500 bg-white dark:bg-white/5 dark:border dark:border-white/20 transition-colors duration-300 hover:bg-indigo-700 hover:text-white cursor-pointer"
                                            href={`https://m.me/${item.facebook.split("||")[0]}`}
                                        >
                                            <TbBrandMessenger className="w-4 h-4" />
                                        </Link>
                                    }
                                    {
                                        item.zalo &&
                                        <Link
                                            target="_blank"
                                            className="p-2 rounded-md shadow-inner text-indigo-500 bg-white dark:bg-white/5 dark:border dark:border-white/20 transition-colors duration-300 hover:bg-indigo-700 hover:text-white cursor-pointer"
                                            href={`https://zalo.me/${item.zalo.split("||")[1]}`}
                                        >
                                            <SiZalo className="w-4 h-4" />
                                        </Link>
                                    }

                                </div>

                            </div>
                        ))
                    }
                </div>
            }

            {/* User */}
            <div className="px-6 overflow-y-auto max-h-90">
                {
                    CVTV.data && CVTV.data.count > 0 &&
                    CVTV.data.rows.map((item, index) => (
                        <div className="flex justify-between items-center gap-3" key={index}>
                            <div className="p-1 w-32 h-32 overflow-hidden rounded-full bg-white dark:bg-gray-950 dark:border-indigo-700 border-2">
                                <Image
                                    width={250}
                                    height={250}
                                    className="object-contain w-full h-auto"
                                    src={get_url_img("avatars", item.avatar)}
                                    alt={item.fullname ?? "cvtv"}
                                />
                            </div>
                            <div>
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.displayname ?? item.fullname}</h5>
                                <ul>
                                    <li>
                                        <p className="text-gray-500 dark:text-gray-600 text-sm italic">Chuyên viên tư vấn</p>
                                    </li>
                                    <li>
                                        <Link href={`tel:${item.phone}`}
                                            className="text-gray-500 transition-colors duration-300 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 underline flex justify-start items-center gap-1">
                                            <FiPhone className="w-4 h-4" />
                                            {item.phone}
                                        </Link>

                                    </li>
                                    <li>
                                        <Link href={`mailto:${item.email}`}
                                            className="text-gray-500 transition-colors duration-300 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 underline flex justify-start items-center gap-1">
                                            <MdOutlineEmail className="w-4 h-4" />
                                            {item.email}
                                        </Link>

                                    </li>
                                </ul>

                            </div>
                        </div>
                    ))
                }
            </div>
            {/* Giờ làm việc */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-center py-3 border-t dark:border-white/20 dark:bg-gray-900 text-gray-500 dark:text-gray-300">
                <FaRegClock className="w-4 h-4 me-4" />

                <p className="text-sm">Thứ 2 - Thứ Bảy 8h00 - 18h30</p>
            </div>
        </div>
    );
}
export default ContactUs;