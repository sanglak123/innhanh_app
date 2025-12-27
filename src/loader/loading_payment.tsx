import { ImSpinner2 } from "react-icons/im";

export default function LoadingPaymentsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-pulse">
            {/* Page Title */}
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="w-72 h-8 bg-gray-300 dark:bg-gray-700 mx-auto mb-4 rounded"></div>
                    <div className="w-96 h-4 bg-gray-300 dark:bg-gray-700 mx-auto rounded"></div>
                </div>

                {/* Thanh toán tiền mặt */}
                <div className="bg-white p-6 rounded-xl shadow-md w-full mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex justify-center items-center">
                            <ImSpinner2 className="animate-spin text-indigo-500 text-xl" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="w-56 h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="w-80 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="w-64 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Grid ngân hàng */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {[...Array(2)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                        >
                            <div className="lg:flex items-center space-x-4">
                                {/* QR Placeholder */}
                                <div className="w-40 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 flex justify-center items-center">
                                    <ImSpinner2 className="animate-spin text-indigo-500 text-2xl" />
                                </div>

                                {/* Bank info placeholders */}
                                <div className="flex-1 space-y-3 mt-4 lg:mt-0">
                                    {[...Array(4)].map((_, j) => (
                                        <div
                                            key={j}
                                            className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-md"
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Spinner */}
                <div className="flex justify-center items-center mt-10">
                    <ImSpinner2 className="animate-spin text-indigo-500 text-3xl" />
                </div>
            </div>
        </div>
    );
}
