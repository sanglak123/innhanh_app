import { ImSpinner2 } from "react-icons/im";

export default function LoadingDeposit() {
    return (
        <div className="container mx-auto w-[96vw] max-w-7xl py-12 animate-pulse">
            {/* Khung tiêu đề */}
            <div className="h-10 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-md mb-8 mx-auto" />

            {/* Khung hai checkbox */}
            <div className="flex justify-start items-center gap-6 mb-6">
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-md" />
                <div className="h-4 w-40 bg-gray-200 dark:bg-gray-800 rounded-md" />
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-md" />
                <div className="h-4 w-40 bg-gray-200 dark:bg-gray-800 rounded-md" />
            </div>

            {/* Khung các input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-full h-12 bg-gray-200 dark:bg-gray-800 rounded-md" />
                    ))}
                </div>
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-full h-12 bg-gray-200 dark:bg-gray-800 rounded-md" />
                    ))}
                </div>
            </div>

            {/* Bảng QR hoặc danh sách ngân hàng */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {[...Array(2)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-inner"
                    />
                ))}
            </div>

            {/* Spinner trung tâm */}
            <div className="absolute inset-0 flex justify-center items-center">
                <ImSpinner2 className="animate-spin text-indigo-500 text-5xl" />
            </div>
        </div>
    );
}
