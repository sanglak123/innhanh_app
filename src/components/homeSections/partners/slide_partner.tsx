"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation as SwiperNavigation,
    Autoplay as SwiperAutoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IImage } from "@/swr/data/useImages";
import get_url_img from "@/config/get_url_img";

type Props = {
    list: IImage[];
};

const HomePartnersSlider = ({ list }: Props) => {
    return (
        <Swiper
            modules={[SwiperNavigation, SwiperAutoplay]}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 7 },
            }}
            autoplay={{ delay: 3000 }}
            className="partners-carousel"
        >
            {list.map((partner, index) => (
                <SwiperSlide key={index}>
                    <div className="p-4 flex flex-col items-center">
                        <Image
                            src={get_url_img(partner.folder, partner.filename)}
                            alt={partner.filename}
                            width={150}
                            height={150}
                            className="w-44 h-44 bg-white  object-contain dark:border dark:border-white/20 mb-4 rounded-lg shadow-md p-3"
                        />

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomePartnersSlider;
