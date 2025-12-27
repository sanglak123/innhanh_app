import get_url_img from '@/config/get_url_img';
import LoadingBanner from '@/loader/loading_banners';
import useImages from '@/swr/data/useImages';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function HomeBanners() {
    const Banners = useImages("banners");
    const [imgShow, setImgShow] = useState(0);

    const next = () => {
        if (Banners.data?.rows) {
            if (imgShow < Banners.data.count - 1) {
                setImgShow(imgShow + 1);
            } else {
                setImgShow(0);
            }
        }
    };

    const prev = () => {
        if (Banners.data?.rows) {
            if (imgShow > 0) {
                setImgShow(imgShow - 1);
            } else {
                setImgShow(Banners.data.count - 1);
            }
        }
    };

    // Auto next mỗi 5s
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(timer);
    }, [imgShow]);

    if (Banners.error) return null;
    if (Banners.isLoading || !Banners.data) return <LoadingBanner />;

    return (
        <section className="pt-6 lg:mt-0 bg-white dark:bg-gray-950 py-6"  >
            <div className="container mx-auto w-[95vw] lg:w-[90vw]">
                <div className="relative w-full h-50 sm:h-75 md:h-100 lg:h-137.5 xl:h-162.5">
                    {Banners.data?.rows.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${imgShow === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <Image
                                fill
                                alt={item.filename}
                                src={get_url_img(item.folder, item.filename)}
                                quality={100}
                                className="object-cover rounded-xl md:rounded-3xl shadow-sm"
                                priority
                                fetchPriority='high'
                            />
                        </div>
                    ))}

                    {/* Prev */}
                    <button
                        onClick={prev}
                        className="bg-black/20 w-8 h-20 sm:w-10 sm:h-28 text-white absolute top-1/2 left-3 sm:left-5 z-20 -translate-y-1/2 transition-colors duration-300 hover:bg-black/50 rounded-md"
                    >
                        <FiChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
                    </button>

                    {/* Next */}
                    <button
                        onClick={next}
                        className="bg-black/20 w-8 h-20 sm:w-10 sm:h-28 text-white absolute top-1/2 right-3 sm:right-5 z-20 -translate-y-1/2 transition-colors duration-300 hover:bg-black/50 rounded-md"
                    >
                        <FiChevronRight className="w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomeBanners;
