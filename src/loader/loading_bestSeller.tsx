import { ImSpinner2 } from "react-icons/im";

export default function LoadingBestseller() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto px-4 animate-pulse">
                {/* Title */}
                <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                    Ấn Phẩm Nổi Bật
                </h1>

                {/* Grid skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-lg shadow bg-white"
                        >
                            {/* Image placeholder */}
                            <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] bg-gray-200 dark:bg-gray-700 flex justify-center items-center">
                                <ImSpinner2 className="animate-spin text-indigo-500 text-3xl" />
                            </div>

                            {/* Bottom info placeholder */}
                            <div className="absolute bottom-0 left-0 w-full h-[100px] bg-black/20 p-6 flex flex-col justify-center">
                                <div className="w-2/3 h-5 bg-gray-300 dark:bg-gray-600 mb-3 rounded"></div>
                                <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
