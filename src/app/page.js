import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import UaeAnnouncement from "./components/UaeAnnouncement";
export const metadata = {
  title: "Swiftycs | No-Code Data Science & AI Solutions",
  description:
    "Build complex machine learning models, uncover data insights, and make smarter business decisions — all without writing a single line of code. Swiftycs empowers you with AI-driven analytics for faster growth.",
  keywords: [
    "no code data science",
    "AI solutions",
    "machine learning",
    "business intelligence",
    "data analytics",
    "predictive modeling",
    "Swiftycs",
  ],
  openGraph: {
    title: "Swiftycs | No-Code Data Science & AI Solutions",
    description:
      "Transform your business with AI-powered, no-code machine learning tools. Upload your data, run models, and get instant insights.",
    url: "https://www.swiftycs.com",
    siteName: "Swiftycs",
    images: [
      {
        url: "https://www.swiftycs.com/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Swiftycs platform preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiftycs | No-Code Data Science & AI Solutions",
    description:
      "AI-driven analytics for your business — no coding required. Start building machine learning models today.",
    images: ["https://www.swiftycs.com/images/home-og.jpg"],
  },
};

export default function Home() {
  return (
    <div>
      <UaeAnnouncement />
      <Hero>
        <section className="flex flex-col md:flex-row justify-around items-center bg-[#eafafa] h-[450px] sm:min-h-[600px] px-6 md:px-12">
          <div className="flex flex-col mt-[20px] sm:mt-[120px] md:mt-0 md:mr-[50px] max-w-xl">
            <h1 className=" text-[40px] sm:text-[45px] font-bold leading-tight text-[#222]">
              No Code,<br />Data Science Solutions
            </h1>
            <p className="text-[20px] mt-8 max-w-[700px] text-[#555]">
              Use Swiftycs platform to build complex machine learning algorithms
              and uncover data insights without writing code.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="/get-started"
                className="px-6 py-3 border-2 border-black text-black rounded-md hover:bg-[#22e4db] hover:text-white hover:border-transparent transition duration-300 shadow-sm"
              >
                Get Started
              </Link>
              <Link
                href="/how-it-works"
                className="px-6 py-3 border-2 border-black text-black rounded-md hover:bg-[#22e4db] hover:text-white hover:border-transparent transition duration-300 shadow-sm"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="relative hidden sm:block md:w-[600px] w-full h-[500px] mr-8 md:mr-0 rounded-lg overflow-hidden mb-12">
            <Image
              src="/home_banner.gif"
              alt="Hero Banner"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </Hero>

      <StepsAndPartners />
    </div>
  );
}

const StepsAndPartners = () => {
  return (
    <>
      {/* Steps Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-12 text-3xl font-bold text-[#1b1429]">
            Onboard and analyze data in just three simple steps!
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                img: "/upload-data-image.png",
                title: "CONNECT DATA SOURCES",
                desc: "Integrate Swiftycs app to your data source or upload your dataset with full privacy.",
              },
              {
                img: "/run-data-science-model-image2.png",
                title: "RUN MODEL",
                desc: "Select your data science model and run based on your business needs.",
              },
              {
                img: "/archive-results-image3.png",
                title: "ACHIEVE RESULT",
                desc: "Get predicted results and visualize them from your data sources.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="lg:w-[390px] w-[280px] bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover lg:object-contain"
                  />
                </div>
                <h4 className="mt-5 text-lg font-semibold text-gray-800">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-12 text-3xl font-bold text-[#1b1429]">Our Partners</h2>

          <div className="flex flex-wrap justify-center gap-8 items-start">
            {[
              {
                img: "/tools_and_solutions.png",
                title: "Tools & Solutions",
                desc: "Key partner in KSA, facilitating Swiftycs’ collaborations in Saudi Arabia.",
              },
              {
                img: "/Asset-1.svg",
                title: "Smart Way",
                desc: "Strategic partner of Swiftycs in the GCC with key government and private sector clients.",
              },
            ].map((partner, i) => (
              <div
                key={i}
                className=" lg:w-[600px] lg:h-[360px] w-[450px] bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src={partner.img} alt={partner.title} fill />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1b1429]">
                  {partner.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Highlighted Title */}
          <h1 className="relative inline-block text-2xl font-bold my-12 px-8 bg-[#eafafa] rounded-lg">
            Our Team expertise with multinational companies
          </h1>

          {/* Partner Logos */}
          <div className="max-w-[1300px]  bg-white  mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              "/folder/download.png",
              "/folder/dunnhumby-logo.jpg",
              "/folder/gfk-growth-from-knowledge2972.jpg",
              "/folder/n49uz7xowkbi2t3gfzvt.avif",
              "/folder/Untitled-1 [Recovered]-١٤.jpg",
              "/folder/Website_Logos-768x480.jpg.webp",
            ].map((src, index) => (
              <div key={index} className="relative w-full h-[60px] sm:h-[170px]">
              <Image
  src={src}
  alt={`Partner ${index + 1}`}
  fill
  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
  className="object-contain rounded-lg"
/>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

