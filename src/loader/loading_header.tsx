import { ImSpinner2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuLightbulbOff, LuUser } from "react-icons/lu";

export default function LoadingHeader() {
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-black dark:text-white w-full">
            <div className="container mx-auto relative animate-pulse">
                {/* Top Header */}
                <div className="py-3 px-6 border-b dark:border-white/20 flex justify-between items-center gap-32 w-full">

                    {/* Logo placeholder */}
                    <div className="w-12 lg:w-24 md:w-20 flex justify-center items-center">
                        <ImSpinner2 className="animate-spin text-indigo-500 text-2xl" />
                    </div>

                    {/* Search Bar placeholder */}
                    <div className="hidden xl:block flex-1">
                        <div className="relative">
                            <div className="border rounded-3xl w-full px-4 py-3 pe-10 bg-gray-100 dark:bg-transparent dark:border-white/20">
                                <FaSearch className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Contact info placeholder */}
                    <div className="hidden md:block">
                        <div className="flex justify-center items-center gap-3">
                            <div className="w-40 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                    </div>

                    {/* User + Theme + Cart placeholder */}
                    <div className="hidden lg:block">
                        <div className="flex justify-center items-center gap-4">
                            <LuUser className="w-5 h-5 text-gray-400" />
                            <LuLightbulbOff className="w-5 h-5 text-gray-400" />
                            <div className="flex justify-end items-center gap-1 text-gray-400">
                                <MdOutlineShoppingBag className="w-5 h-5" />
                                <span className="font-bold">Cart (0)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation placeholder */}
                <div className="hidden lg:block">
                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex justify-center">
                            <div className="flex justify-center items-center gap-6 relative w-fit">
                                {/* Skeleton menu items */}
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-24 h-5 bg-gray-200 dark:bg-gray-700 rounded"
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <button
                                disabled
                                className="relative min-w-[130px] border-[2px] border-gray-300 dark:border-gray-600 text-gray-400 rounded-full px-6 py-4 font-bold"
                            >
                                <ImSpinner2 className="animate-spin inline-block text-indigo-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed contact shortcuts placeholder */}
            <div className="fixed bottom-10 right-10 z-50">
                <button
                    disabled
                    className="w-12 h-12 flex justify-center items-center bg-indigo-400/60 text-white rounded-md"
                >
                    <ImSpinner2 className="animate-spin text-xl" />
                </button>
            </div>
        </header>
    );
}
