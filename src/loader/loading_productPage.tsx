import { ImSpinner2 } from "react-icons/im";

export default function LoadingProductPage() {
    return (
        <div className="container mx-auto w-[90vw] py-6 animate-pulse">
            {/* Title */}
            <h1 className="text-xl text-indigo-500 font-bold uppercase mb-4">
                In Nhanh KTS
            </h1>

            {/* Filter bar */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                    <div className="w-48 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-16 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="w-32 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>

            {/* Grid of products */}
            <div className="grid grid-cols-12 gap-4 mb-8">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="col-span-12 lg:col-span-3 md:col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-3"
                    >
                        <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded mb-3 flex justify-center items-center">
                            <ImSpinner2 className="animate-spin text-indigo-500 text-2xl" />
                        </div>
                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-1/2 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-2/3 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                ))}
            </div>

            {/* Pagination placeholder */}
            <div className="flex justify-center items-center mt-4">
                <div className="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex justify-center items-center">
                    <ImSpinner2 className="animate-spin text-indigo-500 text-2xl" />
                </div>
            </div>
        </div>
    );
}
