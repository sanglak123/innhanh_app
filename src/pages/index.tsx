import HomeBanners from "@/components/homeSections/banners";
import HomeBestseller from "@/components/homeSections/bestSeller/homeBestSeller";
import HomePartners from "@/components/homeSections/partners/homePartners";
import HomeRatings from "@/components/homeSections/ratings/homeRatings";
import HomeServices from "@/components/homeSections/service/homeServices";
import SEO from "@/components/seo";
import { structuredData_home } from "@/config/structuredData";
export default function HomePage() {
  return (
    <div className="">
      <SEO
        title="In Nhanh 79 - Dịch Vụ In Ấn Chuyên Nghiệp Tại TP.HCM"
        description="In Nhanh 79 chuyên in kỹ thuật số, in nhanh lấy liền, in quảng cáo, thiết kế và in tem nhãn tại TP.HCM."
        structuredData={structuredData_home}
      />
      <HomeBanners />
      <HomeServices />
      <HomeBestseller />
      <HomePartners />
      {/* <HomeRatings /> */}
    </div>
  )
}