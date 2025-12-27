import { ImSpinner2 } from "react-icons/im";

export default function LoadingInBanVePage() {
    return (
        <div className="min-h-screen bg-gray-50 animate-pulse">
            {/* Banner Section */}
            <div className="container mx-auto px-4 py-4 sm:py-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-200 dark:bg-gray-800 flex justify-center items-center">
                        <ImSpinner2 className="animate-spin text-indigo-500 text-4xl" />
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-6 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                </div>
                                <div className="w-2/3 h-5 bg-gray-200 dark:bg-gray-700 mx-auto mb-3 rounded"></div>
                                <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-700 mx-auto mb-2 rounded"></div>
                                <div className="w-4/6 h-4 bg-gray-200 dark:bg-gray-700 mx-auto rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-6 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <div className="w-72 h-6 bg-gray-300 dark:bg-gray-700 mx-auto mb-3 rounded"></div>
                        <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-700 mx-auto rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex justify-center items-center"
                            >
                                <ImSpinner2 className="animate-spin text-indigo-500 text-2xl" />
                            </div>
                        ))}
                    </div>
                    <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-700 mx-auto mb-2 rounded"></div>
                    <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-700 mx-auto rounded"></div>
                </div>
            </div>

            {/* Product List Skeleton */}
            <div className="py-6 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="w-full h-[280px] bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col justify-center items-center"
                            >
                                <ImSpinner2 className="animate-spin text-indigo-500 text-2xl mb-2" />
                                <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                                <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination skeleton */}
                    <div className="flex justify-center items-center">
                        <div className="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex justify-center items-center">
                            <ImSpinner2 className="animate-spin text-indigo-500 text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
