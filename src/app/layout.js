import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Container from "./components/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Swiftycs",
  description:
    "Our self-serve data analytics platform uses AI and ML to transform your data into insights in just a few steps",
  icons: {
    icon: "/cropped-Deltycs-03-105x105-1.png",
  },
  openGraph: {
    title: "Swiftycs",
    description:
      "Our self-serve data analytics platform uses AI and ML to transform your data into insights in just a few steps",
    url: "https://swiftycs.com",
    siteName: "Swiftycs",
    images: [
      {
        url: "/cropped-Deltycs-03-105x105-1.png", 
        width: 1200,
        height: 630,
        alt: "Swiftycs Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/cropped-Deltycs-03-105x105-1.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased` }
      >
        <Navbar/>
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
