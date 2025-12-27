import dynamic from "next/dynamic";
import LoadingPartners from "@/loader/loading_partners";
import useImages from "@/swr/data/useImages";

const HomePartnersSlider = dynamic(() => import("@/components/homeSections/partners/slide_partner"), {
    ssr: false,
    loading: () => <div className="text-center text-gray-400">Đang tải slider...</div>,
});

function HomePartners() {
    const Partners = useImages("partners");

    if (Partners.error) return null;
    if (Partners.isLoading || !Partners.data) return <LoadingPartners />;
    return (
        <section className="bg-white dark:bg-gray-950 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4 text-center">
                    Đối Tác InNhanh79
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-8 mx-auto">
                    Khách hàng của InNhanh79 là các công ty, tập đoàn từ Nhật Bản, Hàn
                    Quốc, Thái Lan, Singapore, Việt Nam… Các cá nhân, các nhóm kinh doanh
                    từ online, shop nhỏ cho đến người tiêu dùng cuối.
                </p>

                <HomePartnersSlider list={Partners.data.rows} />
            </div>
        </section>
    );
}

export default HomePartners;
