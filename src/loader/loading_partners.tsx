import { ImSpinner2 } from "react-icons/im";

export default function LoadingPartners() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 animate-pulse">
                {/* Title */}
                <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 text-center">
                    Đối Tác InNhanh79
                </h1>
                <p className="text-lg text-gray-600 text-center max-w-2xl mb-8 mx-auto">
                    Khách hàng của InNhanh79 là các công ty, tập đoàn từ Nhật Bản, Hàn
                    Quốc, Thái Lan, Singapore, Việt Nam…
                </p>

                {/* Slider placeholder */}
                <div className="relative w-full min-h-32 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-xl shadow-inner flex justify-center items-center">
                    <div className="flex justify-center items-center h-[250px] sm:h-[200px] md:h-[250px]">
                        <ImSpinner2 className="animate-spin text-indigo-500 text-3xl sm:text-4xl" />
                    </div>

                    {/* Dummy logo slots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="w-16 h-10 sm:w-24 sm:h-14 bg-gray-300 dark:bg-gray-700 rounded-md"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
