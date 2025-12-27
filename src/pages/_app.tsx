import WrapFooter from "@/components/footer/footer";
import WrapHeader from "@/components/header/header";
import { AuthProvider } from "@/context/contextAuthen";
import { CartProvider } from "@/context/contextCart";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const AccessHeaderFooter = [
    "/",
    "/in-nhanh",
    "/in-quang-cao",
    "/in-ban-ve",
    "/design",
    "/about",
    "/cart",
    "/thoa-thuan-chinh-sach",
    "/phuong-thuc-thanh-toan"
  ];

  const isActive =
    AccessHeaderFooter.findIndex((x) => x === router.asPath) !== -1 || router.asPath.startsWith("/products/");
  return (
    <CartProvider>
      <AuthProvider>
        {isActive && <WrapHeader />}
        <Component {...pageProps} />
        {isActive && <WrapFooter />}
        <Toaster position="top-right" />
      </AuthProvider>
    </CartProvider>


  )
}
