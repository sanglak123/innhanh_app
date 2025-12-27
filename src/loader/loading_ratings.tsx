import { ImSpinner2 } from "react-icons/im";

export default function LoadingRatings() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 animate-pulse">
                {/* Title */}
                <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 text-center">
                    Đánh Giá Từ Khách Hàng
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
                    Sự chia sẻ đánh giá của khách hàng là động lực quý báu, phản ánh chất lượng và uy tín dịch vụ của chúng tôi.
                </p>

                {/* Swiper Skeleton */}
                <div className="w-full mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                            >
                                {/* Avatar + user info */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
                                    <div>
                                        <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                        <div className="w-24 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, j) => (
                                        <div
                                            key={j}
                                            className="w-4 h-4 bg-yellow-200/70 rounded-sm"
                                        ></div>
                                    ))}
                                </div>

                                {/* Message */}
                                <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                <div className="w-4/6 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Spinner center */}
                    <div className="flex justify-center items-center mt-8">
                        <ImSpinner2 className="animate-spin text-indigo-500 text-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
