import React from "react";
import { ImSpinner2 } from "react-icons/im";

export default function LoadingProductDetail() {
    return (
        <div className="container mx-auto px-4 py-4 lg:py-8 animate-pulse">
            <div className="gap-8 relative flex flex-col lg:flex-row items-start">
                {/* === LEFT: Gallery === */}
                <div className="space-y-4 w-full lg:w-1/2 lg:sticky top-40 h-fit">
                    <div className="relative w-full h-[400px] md:h-[600px] bg-gray-200 dark:bg-gray-700 rounded-lg flex justify-center items-center">
                        <ImSpinner2 className="animate-spin text-indigo-500 text-3xl" />
                    </div>
                    <div className="flex flex-nowrap justify-center overflow-x-auto space-x-2 px-2">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-md"
                            ></div>
                        ))}
                    </div>
                </div>

                {/* === RIGHT: Info === */}
                <div className="lg:w-1/2 space-y-4">
                    <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 bg-yellow-200/50 rounded-sm"
                            ></div>
                        ))}
                    </div>
                    <div className="w-1/3 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-16 h-5 bg-gray-200 dark:bg-gray-700 rounded"
                            ></div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-md"></div>

                    {/* Inputs */}
                    <div className="space-y-2">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-md"
                            ></div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="w-full h-12 bg-indigo-300 dark:bg-indigo-600 rounded-md"></div>

                    {/* Price Result */}
                    <div className="w-full h-28 bg-gray-100 dark:bg-gray-800 rounded-md"></div>

                    {/* Contact Info */}
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-md shadow-sm my-4 p-4">
                        <div className="w-1/3 h-5 bg-gray-300 dark:bg-gray-700 mb-3 rounded"></div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="space-y-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
                                >
                                    <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                    <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                    <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                    <div className="flex space-x-2 mt-2">
                                        {[...Array(4)].map((_, j) => (
                                            <div
                                                key={j}
                                                className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* === BELOW: Ratings Section === */}
            <div className="lg:flex justify-between items-start gap-8 mt-8">
                <div className="w-full lg:w-1/2 h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-center items-center">
                    <ImSpinner2 className="animate-spin text-indigo-500 text-2xl" />
                </div>
                <div className="w-full lg:w-1/2 h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-center items-center">
                    <ImSpinner2 className="animate-spin text-indigo-500 text-2xl" />
                </div>
            </div>
        </div>
    );
}
