import { Noto_Kufi_Arabic, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const arabicFont = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const englishFont = Poppins({
  variable: "--font-english",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "شركة أزهار الربيع | مطابخ خشبية وألمنيوم فاخرة في الأردن",
  description:
    "شركة أزهار الربيع متخصصة في تصميم وتنفيذ المطابخ العصرية والديكورات الداخلية الفاخرة. أكثر من 40 سنة من الخبرة و1000 مشروع منجز بجودة عالية في الأردن.",
  keywords: [
    "مطابخ خشبية",
    "مطابخ ألمنيوم",
    "ديكور داخلي",
    "تصميم مطابخ",
    "أزهار الربيع الأردن",
  ],
  icons: {
    icon: "/logo.jpg", 
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "شركة أزهار الربيع | Spring Flowers",
    description:
      "تصميم وتنفيذ مطابخ خشبية وألمنيوم وديكورات داخلية فاخرة في الأردن.",
    url: "https://springflowersco.com",
    siteName: "أزهار الربيع",
    locale: "ar_JO",
    type: "website",
    images: [
      {
        url: "/New folder/IMG-20251002-WA0003.jpg",
        width: 1200,
        height: 630,
        alt: "مطابخ خشبية من شركة أزهار الربيع في الأردن",
      },
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${arabicFont.variable} ${englishFont.variable} bg-[#FAF9F6] text-[#333] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
