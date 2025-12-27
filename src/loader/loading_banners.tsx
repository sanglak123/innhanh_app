import { ImSpinner2 } from "react-icons/im";

export default function LoadingBanner() {
    return (
        <section className="mt-3 lg:mt-0">
            <div className="container mx-auto w-[95vw] lg:w-[90vw]">
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[650px] overflow-hidden rounded-xl md:rounded-3xl">
                    {/* Background skeleton */}
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl md:rounded-3xl" />

                    {/* Spinner center */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <ImSpinner2 className="animate-spin text-indigo-500 text-4xl sm:text-5xl" />
                    </div>

                    {/* Prev / Next button placeholders */}
                    <div className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2">
                        <div className="w-8 h-20 sm:w-10 sm:h-28 bg-black/10 rounded-md" />
                    </div>
                    <div className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2">
                        <div className="w-8 h-20 sm:w-10 sm:h-28 bg-black/10 rounded-md" />
                    </div>

                    {/* Dot indicators (optional skeleton) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
