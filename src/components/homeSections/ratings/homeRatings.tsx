import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation as SwiperNavigation,
    Autoplay as SwiperAutoplay,
} from "swiper/modules";
import useRatingsHome from "@/swr/clients/useRatingsHome";
import { IRating } from "@/server/database/models/ratings";
import LoadingRatings from "@/loader/loading_ratings";


function HomeRatings() {
    //state 
    const RatingsHome = useRatingsHome();

    if (RatingsHome.error) return null;
    if (RatingsHome.isLoading || !RatingsHome.data) return <LoadingRatings />;

    return (
        <section className="bg-gray-50 dark:bg-gray-950 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4 text-center">
                    Đánh Giá Từ Khách Hàng
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center">
                    Sự chia sẻ đánh giá của khách hàng là động lực quý báu, phản ánh chất
                    lượng và uy tín dịch vụ của chúng tôi.{" "}
                </p>
                <div className="w-full mt-6">
                    <Swiper
                        modules={[SwiperNavigation, SwiperAutoplay]}
                        slidesPerView={3}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        className="partners-carousel"
                    >
                        {RatingsHome && RatingsHome.data?.rows?.map((testimonial: IRating, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div>
                                            <h3 className="font-semibold dark:text-indigo-500 text-lg">
                                                {testimonial.user}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {testimonial.position}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex text-yellow-400 mb-2">
                                        {[...Array(testimonial.star)].map((_, index) => (
                                            <FaStar key={index} />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">{testimonial.mess}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default HomeRatings;