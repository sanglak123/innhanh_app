import { ImSpinner2 } from "react-icons/im";

export default function LoadingFooter() {
    return (
        <footer className="bg-blue-950 dark:bg-black text-white py-8">
            <div className="container mx-auto px-4 animate-pulse">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & intro */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full flex justify-center items-center mb-6">
                            <ImSpinner2 className="animate-spin text-indigo-400 text-2xl" />
                        </div>
                        <ul className="text-[15px] italic text-gray-300 space-y-2">
                            <li className="h-4 bg-gray-400/30 rounded w-64 mx-auto"></li>
                            <li className="h-4 bg-gray-400/30 rounded w-56 mx-auto"></li>
                            <li className="h-4 bg-gray-400/30 rounded w-60 mx-auto"></li>
                        </ul>
                    </div>

                    {/* Branch placeholders */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i}>
                            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-4"></div>
                            <div className="space-y-3">
                                {[...Array(5)].map((_, j) => (
                                    <div
                                        key={j}
                                        className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-64"
                                    ></div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Quick Links */}
                    <div>
                        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-4"></div>
                        <div className="space-y-3">
                            {[...Array(3)].map((_, j) => (
                                <div
                                    key={j}
                                    className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-52"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="hidden md:block mt-6">
                    <div className="w-full h-[300px] bg-gray-200 dark:bg-gray-800 rounded-xl shadow flex justify-center items-center">
                        <ImSpinner2 className="animate-spin text-indigo-400 text-3xl" />
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <div className="w-72 h-4 bg-gray-400/30 rounded mx-auto"></div>
                </div>
            </div>
        </footer>
    );
}
