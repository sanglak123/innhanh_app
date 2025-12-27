import { ImSpinner2 } from "react-icons/im";

export default function LoadingServices() {
    return (
        <section className="bg-white container mx-auto px-4 py-4 sm:py-8">
            <div className="container mx-auto px-4 animate-pulse">
                {/* Title */}
                <div className="text-center mb-12">
                    <div className="w-64 h-6 bg-gray-200 dark:bg-gray-700 mx-auto mb-4 rounded"></div>
                    <div className="w-96 h-4 bg-gray-200 dark:bg-gray-700 mx-auto rounded"></div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800"
                        >
                            {/* Image placeholder */}
                            <div className="relative h-48 bg-gray-200 dark:bg-gray-700 flex justify-center items-center">
                                <ImSpinner2 className="animate-spin text-indigo-500 text-4xl" />
                            </div>

                            {/* Text placeholder */}
                            <div className="p-6 space-y-3">
                                <div className="w-3/4 h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                <div className="w-24 h-9 bg-gray-300 dark:bg-gray-600 rounded-full mt-4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
