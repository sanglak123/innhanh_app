import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaRegStar, FaSearch, FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDesignServices, MdOutlineMail, MdOutlineShoppingBag, MdOutlineShoppingCart } from "react-icons/md";
import { LuLightbulb, LuLightbulbOff, LuPrinterCheck, LuUser } from "react-icons/lu";
import { useTheme } from "next-themes";
import { FiPhone } from "react-icons/fi";
import { SiZalo } from "react-icons/si";
import { TbBrandMessenger } from "react-icons/tb";
import { useRouter } from "next/router";
import { useCart } from "@/context/contextCart";
import { RiPrinterCloudLine } from "react-icons/ri";
import { TfiPrinter } from "react-icons/tfi";
import { IoHomeOutline } from "react-icons/io5";
import useAuthen from "@/swr/admins/useAuthen";
import useCategorys, { ICategory } from "@/swr/data/useCategorys";
import useIn79 from "@/swr/data/useIn79";
import { useDebounceValue } from "@/hook/useDebounced";
import LoadingHeader from "@/loader/loading_header";
import useProductDetail, { IProduct } from "@/swr/data/product/useProductDetail";
import useListProducts from "@/swr/data/product/useListProduct";
import MenuUser from "./menu_user";
import ContactUs from "./contactUs";
import useListImageProduct from "@/swr/data/product/useListImageProduct";
import useListRatingsProduct from "@/swr/data/product/useListRatingsProduct";
import get_url_img from "@/config/get_url_img";

const WrapHeader = () => {
    const router = useRouter();
    const { asPath } = router;
    const { link } = router.query;
    const linkValue = Array.isArray(link) ? link[0] : link || "";
    const { UserLogin, isAuthenticated } = useAuthen();
    //Ref
    const ref_search = useRef<HTMLInputElement>(null);
    // Theme & Cart
    const { theme, setTheme } = useTheme();
    const { cartItems } = useCart();

    // Data
    const Categorys = useCategorys();
    const In79 = useIn79();
    const ProductDetail = useProductDetail(linkValue);

    // State
    const [search, setSearch] = useState("");
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({
        left: 0,
        width: 0,
    });

    const debounced_value = useDebounceValue(search);
    const Products = useListProducts(1, 10, "", "createdAt", debounced_value);
    // Bắt phím ESC để xóa nội dung search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSearch("");
                if (ref_search.current) ref_search.current.blur(); // bỏ focus khỏi input nếu muốn
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Scroll to top
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Underline logic
    const menuRef = useRef<HTMLDivElement>(null);

    const updateUnderline = (idx: number) => {
        if (!menuRef.current) return;
        const item = menuRef.current.querySelectorAll<HTMLAnchorElement>("a")[idx];
        if (item) {
            setUnderlineStyle({ left: item.offsetLeft, width: item.offsetWidth });
        }
    };

    const getActiveIndex = () => {
        // Nếu đang ở product detail
        if (ProductDetail?.data?.idCate) {
            const idx = Categorys.data?.rows?.findIndex(
                (x) => x.id === ProductDetail.data?.idCate
            );
            return idx !== undefined && idx !== -1 ? idx + 1 : 0;
        }

        // Nếu đang ở category
        const idxCate =
            Categorys.data?.rows?.findIndex(
                (x) => x.link === asPath.replaceAll("/", "")
            ) ?? -1;

        return idxCate !== -1 ? idxCate + 1 : 0;
    };

    const mouseRemove = () => {
        const idx = getActiveIndex();
        updateUnderline(idx);
    };

    useEffect(() => {
        if (!menuRef.current || !Categorys.data?.rows?.length) return;
        const idx = getActiveIndex();
        const item = menuRef.current.querySelectorAll<HTMLAnchorElement>("a")[idx];
        if (item) {
            setUnderlineStyle({ left: item.offsetLeft, width: item.offsetWidth });
        }
    }, [Categorys.data, asPath, ProductDetail?.data?.idCate]);

    // Mount (theme)
    const [mount, setMount] = useState(false);
    useEffect(() => setMount(true), []);

    //show menu responsive
    const [showMenu, setShowMenu] = useState(false);
    const get_icon_link = (cate: ICategory) => {
        switch (cate.link) {
            case "in-nhanh":
                return <LuPrinterCheck className='w-4 h-4' />;
            case "in-quang-cao":
                return <RiPrinterCloudLine className='w-4 h-4' />;
            case "in-ban-ve":
                return <TfiPrinter className='w-4 h-4' />;
            default:
                return <MdOutlineDesignServices className='w-4 h-4' />;
        }
    }

    // Loader check
    const isLoading = !In79.data || !Categorys.data;

    if (isLoading) {
        return <LoadingHeader />
    }
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:text-white w-full">
            <div className="container mx-auto relative">
                {/* Top Header */}
                <div className="py-3 px-6 border-b dark:border-white/20 flex justify-between items-center gap-32 w-full">
                    {In79.data && (
                        <div className="w-12 lg:w-24 md:w-20 cursor-pointer">
                            <Image
                                onClick={() => setShowMenu(!showMenu)}
                                src={get_url_img("logo", In79.data.logo)}
                                alt="logo"
                                width={80}
                                height={80}
                                quality={100}
                                className="w-full h-auto"
                            />
                        </div>
                    )}

                    {/* Search Bar */}
                    <div className="hidden xl:block flex-1">
                        <div className="relative">
                            <input
                                tabIndex={-1}
                                ref={ref_search}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                className="border rounded-3xl w-full px-4 py-1.5 pe-10 bg-gray-100 dark:bg-transparent dark:border-white/20 focus:outline-none"
                            />
                            <FaSearch className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-300" />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="hidden md:block">
                        <div className="flex justify-center items-center gap-3">
                            <Link
                                className="underline flex justify-center gap-2 items-center transition-colors duration-500 text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 hover:text-indigo-700"
                                href={`mailto:${In79.data?.email}`}
                            >
                                <MdOutlineMail className="w-4 h-4" />
                                {In79.data?.email}
                            </Link>
                            <Link
                                className="underline flex justify-center gap-2 items-center transition-colors duration-500 text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 hover:text-indigo-700"
                                href={`tel:${In79.data?.hotline}`}
                            >
                                <FiPhone className="w-4 h-4" />
                                {In79.data?.hotline}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Contact Shortcuts */}
                    <div className="lg:hidden md:hidden flex justify-center items-center gap-1">
                        {mount && (
                            <button
                                className="p-1 shadow-md bg-white dark:bg-gray-900 dark:border-white/20 text-indigo-500 border rounded-md"
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                {theme === "light" ? (
                                    <LuLightbulbOff className="w-4 h-4" />
                                ) : (
                                    <LuLightbulb className="w-4 h-4" />
                                )}
                            </button>
                        )}
                        <Link
                            className="p-1 shadow-md bg-white dark:bg-gray-900 dark:border-white/20 text-indigo-500 border rounded-md"
                            href={`tel:${In79.data?.hotline}`}
                        >
                            <FiPhone className="w-4 h-4" />
                        </Link>
                        <Link
                            className="p-1 shadow-md bg-white dark:bg-gray-900 dark:border-white/20 text-indigo-500 border rounded-md"
                            href={`mailto:${In79.data?.email}`}
                        >
                            <MdOutlineMail className="w-4 h-4" />
                        </Link>
                        {
                            In79.data?.zalo &&
                            <Link
                                target="_blank"
                                className="p-1 shadow-md bg-white dark:bg-gray-900 dark:border-white/20 text-indigo-500 border rounded-md"
                                href={`https://zalo.me/${In79.data.zalo.split("||")[1]}`}
                            >
                                <SiZalo className="w-4 h-4" />
                            </Link>
                        }
                        {
                            In79.data &&
                            <Link
                                target="_blank"
                                className="p-1 shadow-md bg-white dark:bg-gray-900 dark:border-white/20 text-indigo-500 border rounded-md"
                                href={`https://m.me/${In79.data.facebook.split("||")[0]}`}
                            >
                                <TbBrandMessenger className="w-4 h-4" />
                            </Link>
                        }

                    </div>

                    {/* User + Theme + Cart */}
                    <div className="hidden lg:block">
                        <div className="flex justify-center items-center gap-2">
                            {
                                isAuthenticated && UserLogin ?
                                    <MenuUser />
                                    :
                                    <Link href={"/auth"}>
                                        <LuUser className="w-5 h-5" />
                                    </Link>
                            }

                            {mount && (
                                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                    {theme === "light" ? (
                                        <LuLightbulbOff className="w-5 h-5" />
                                    ) : (
                                        <LuLightbulb className="w-5 h-5" />
                                    )}
                                </button>
                            )}
                            <Link href={"/cart"} className="flex justify-end items-center gap-1">
                                <MdOutlineShoppingBag className="w-5 h-5" />
                                <span className="font-bold">Cart ({cartItems.length})</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className="hidden lg:block">
                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex justify-center">
                            <div ref={menuRef} className="flex justify-center items-center gap-6 relative w-fit">
                                <Link
                                    onMouseEnter={() => updateUnderline(0)}
                                    onMouseLeave={() => mouseRemove()}
                                    className={`
                                                px-4 h-16 flex font-semibold uppercase justify-center items-center 
                                                transition-colors duration-300 
                                                ${asPath === "/" ? "text-indigo-500" : "text-gray-700 dark:text-gray-300 dark:hover:text-indigo-500"}
                                                 hover:text-indigo-500
                                                 `}
                                    href={"/"}
                                >
                                    Trang chủ
                                </Link>

                                {Categorys.data?.rows.map((item, idx) => {
                                    const isActiveCategory =
                                        ProductDetail?.data?.idCate === item.id ||
                                        asPath.replaceAll("/", "") === item.link;

                                    return (
                                        <Link
                                            key={idx}
                                            href={`/${item.link}`}
                                            onMouseEnter={() => updateUnderline(idx + 1)}
                                            onMouseLeave={() => mouseRemove()}
                                            className={`
                                                px-4 h-16 flex font-semibold uppercase justify-center items-center 
                                                transition-colors duration-300 
                                                ${isActiveCategory ? "text-indigo-500" : "text-gray-700 dark:text-gray-300 dark:hover:text-indigo-500"}
                                                 hover:text-indigo-500
                                                 `}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}

                                {
                                    ["/", "/in-nhanh", "/in-quang-cao", "/in-ban-ve", "/design"].includes(asPath) &&
                                    <div
                                        style={{
                                            transform: `translateX(${underlineStyle.left}px)`,
                                            width: `${underlineStyle.width}px`,
                                        }}
                                        className="h-0.5 bg-indigo-500 absolute top-0 left-0 transition-all duration-500"
                                    />
                                }
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => setShowContact(true)}
                                className="relative min-w-32.5 group overflow-hidden border-0.5 border-black/80 dark:border-white text-black/80 dark:text-white rounded-full px-6 py-5 font-bold"
                            >
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 capitalize -translate-y-1/2 group-hover:translate-y-[calc(50%+10px)] transition-transform duration-500 whitespace-nowrap">
                                    Liên Hệ
                                </span>
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 capitalize translate-y-[calc(50%+10px)] group-hover:-translate-y-1/2 transition-transform duration-500 whitespace-nowrap">
                                    Liên Hệ
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Search Results */}
                    <div className="bg-white dark:bg-gray-800 z-50 absolute top-full left-0 w-full">
                        <div
                            className={`transition-all duration-1000 ${search !== "" ? "max-h-125 overflow-auto" : "max-h-0 overflow-hidden"
                                }`}
                        >
                            {Products.data &&
                                Products.data.rows.map((item, index) => (
                                    <LinkProductFind
                                        product={item}
                                        key={index}
                                        onHide={() => {
                                            setSearch("");
                                        }}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                {/* Menu Responsive */}
                <div className={`w-full lg:hidden transition-all duration-500 ${showMenu ? "max-h-87.5 overflow-y-auto" : "max-h-0 overflow-hidden"}`}>
                    <div className="py-4">
                        <ul className="w-full">
                            <li className="my-2 px-6">
                                <Link
                                    onClick={() => setShowMenu(false)}
                                    className={
                                        `capitalize flex justify-start items-center gap-4                                                  
                                                 py-2 px-6 
                                                 rounded-3xl shadow-lg
                                                 transition-colors duration-300
                                                hover:bg-indigo-500 hover:text-white
                                                   ${asPath === "/" ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-500 dark:bg-gray-950 dark:text-gray-300 dark:border dark:border-white/20"}
                                                 `
                                    }
                                    href={"/"}>
                                    <IoHomeOutline className="w-4 h-4" />
                                    Trang chủ
                                </Link>
                            </li>
                            {Categorys.data?.rows.map((item, idx) => {
                                const isActiveCategory =
                                    ProductDetail?.data?.idCate === item.id ||
                                    asPath.replaceAll("/", "") === item.link;

                                return (
                                    <li className="my-1 px-6" key={idx}>
                                        <Link
                                            onClick={() => setShowMenu(false)}
                                            className={
                                                `capitalize flex justify-start items-center gap-4                                                  
                                                 py-2 px-6 
                                                 rounded-3xl shadow-lg
                                                 transition-colors duration-300
                                                hover:bg-indigo-500 hover:text-white
                                                 ${isActiveCategory ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-500 dark:bg-gray-950 dark:text-gray-300 dark:border dark:border-white/20"}
                                                 `
                                            }
                                            key={idx} href={`/${item.link}`}>
                                            {
                                                get_icon_link(item)
                                            }
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                            {
                                cartItems.length >= 1 &&
                                <li className="my-2 px-6">
                                    <Link
                                        onClick={() => setShowMenu(false)}
                                        className={
                                            `capitalize flex justify-between items-center gap-4                                                  
                                                 py-2 px-6 
                                                 rounded-3xl shadow-lg
                                                 transition-colors duration-300
                                                hover:bg-indigo-500 hover:text-white
                                                   ${asPath === "/cart" ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-500 dark:bg-gray-950 dark:text-gray-300 dark:border dark:border-white/20"}
                                                 `
                                        }
                                        href={"/cart"}>
                                        <p className="flex justify-start items-center gap-4">
                                            <MdOutlineShoppingCart className="w-4 h-4" />
                                            Giỏ hàng
                                        </p>
                                        <span className="w-4 h-4 text-[8px] bg-red-700 text-white rounded-full flex justify-center items-center">{cartItems.length}</span>
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>


            <ContactUs show={showContact} setShow={setShowContact} />

            {/* Scroll to Top */}
            <div className="fixed hidden lg:block bottom-10 right-10 z-50 overflow-hidden space-y-2">
                <button
                    aria-label="Cuộn trang về đầu"
                    onClick={scrollToTop}
                    className={`w-12 h-12 flex justify-center items-center bg-indigo-500 text-white rounded-md transition-all duration-300 ${showScrollTop ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <FaArrowUp className="w-4 h-4" />
                </button>
            </div>


        </header>
    );
};

type PropsFind = {
    product: IProduct
    onHide: any
}
function LinkProductFind(props: PropsFind) {
    const { product, onHide } = props;
    const ProductImages = useListImageProduct(product.link);
    const ProductRatings = useListRatingsProduct(product.link);

    const [tbStar, setTbStar] = useState(0);

    useEffect(() => {
        if (ProductRatings.data?.rows && ProductRatings.data.count > 0) {
            // Tính tổng sao
            const totalStars = ProductRatings.data.rows.reduce((sum, item) => sum + item.star, 0);
            // Lấy trung bình
            const avg = totalStars / ProductRatings.data.count;
            setTbStar(avg);
        } else {
            setTbStar(0);
        }
    }, [ProductRatings.data]);

    return (
        <Link
            onClick={onHide}
            href={`/products/${product.link}`}
            className="w-full h-50 flex justify-start items-center gap-6 border-b dark:border-white/20 first:border-t duration-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
        >
            <div className="w-50 h-50 p-3">
                <div className="relative w-full h-full">
                    {ProductImages.data &&
                        ProductImages.data.map((img, idx) => (
                            <div key={idx} className="absolute top-0 left-0 p-3">
                                <Image
                                    width={150}
                                    height={150}
                                    alt="texst"
                                    src={get_url_img(img.folder, img.filename)}
                                    className="rounded-md shadow-sm"
                                />
                            </div>
                        ))}
                </div>
            </div>

            <div className="p-3">
                <h2 className="whitespace-nowrap font-bold text-lg text-indigo-500 uppercase">
                    {product.name}
                </h2>
                <div className="">
                    <div className="flex">
                        {[...Array(5)].map((_, index) => {
                            return (
                                <div key={index}>
                                    {index + 1 > tbStar ? (
                                        <FaRegStar className="w-6 h-6 cursor-pointer transition-colors duration-200 hover:text-yellow-400" />
                                    ) : (
                                        <FaStar className="w-6 h-6  text-yellow-500" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex justify-start gap-2 items-center'>
                        {
                            ProductRatings.data && ProductRatings.data?.count > 0 ?
                                <>
                                    <span className="italic text-sm">{`(${ProductRatings.data?.count > 9 ? ProductRatings.data?.count : `0${ProductRatings.data?.count}`}) lượt đánh giá`}</span>
                                    <span className='italic text-sm'>{`${tbStar} / 5`}</span>
                                </>
                                :
                                <span className="italic text-sm">{`(Chưa có đánh giá nào về sản phẩm này)`}</span>
                        }

                    </div>
                </div>
                <p> {product.intro}</p>
            </div>
        </Link>
    )
}

export default WrapHeader;
