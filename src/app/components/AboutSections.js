// app/components/AboutSections.jsx

import Image from "next/image";
export const metadata = {
  title: "About Swiftycs | AI-Driven, No-Code Data Solutions",
  description:
    "Learn about Swiftycs — our story, vision, and mission to simplify AI and machine learning for businesses worldwide, empowering growth without coding complexity.",
  keywords: [
    "About Swiftycs",
    "AI company",
    "machine learning",
    "no-code analytics",
    "business intelligence",
    "data science",
  ],
  openGraph: {
    title: "About Swiftycs",
    description:
      "Discover Swiftycs' story, vision, and team dedicated to transforming businesses into data-driven leaders.",
    url: "https://www.swiftycs.com/about",
    siteName: "Swiftycs",
    images: [
      {
        url: "https://www.swiftycs.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Swiftycs Team and Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function AboutSections() {
  return (
    <div className="sm:mx-36 mx-2">
  {/* 1. Our Story */}
  <section className="">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-wide text-[#0f172a]">
      Our Story
    </h2>
    <div className="flex flex-col lg:flex-row items-center gap-10 mt-8 animate-fadeIn">
      {/* Text */}
      <div className="flex-1 text-lg leading-8 text-gray-700">
        <p className="opacity-90">
          Specializing in various sectors such as airlines, health, insurance,
          retail, fintech, and more, we believe in democratizing the use of AI
          and ML across all organizations. Our motivation behind creating
          <span className="text-[#22b3b0] font-semibold"> Swiftycs AI </span>
          is to revolutionize the landscape and help companies grow without the
          need for dedicated data scientists.
        </p>
      </div>
      {/* Image */}
      <figure className="flex-1">
        <Image
          width={400}
          height={400}
          src="/1000049498-3.png"
          alt="Swiftycs Story"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </figure>
    </div>
  </section>

  {/* 2. Our Vision */}
  <section className=" mt-16 text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
      Our Vision
    </h2>
    <p className="text-gray-600 italic text-lg max-w-5xl mx-auto leading-8">
      “At Swiftycs, our vision is to transform every business into a
      data-driven organization, unlocking the full potential of insights to
      maximize growth.”
    </p>
  </section>

  {/* 3. Company */}
  <section className=" mt-16">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#0f172a]">
      Company
    </h2>
    <p className="text-gray-700 leading-8 text-lg">
      Swiftycs is a pioneering force in AI Codeless Data Science, offering
      innovative solutions that empower businesses to leverage data without
      coding complexities. Our platform,
      <strong className="text-[#22b3b0]"> ai.swiftycs </strong>, merges
      cutting-edge AI with intuitive interfaces, enabling organizations to
      extract insights and make informed decisions effortlessly.
    </p>
  </section>

  {/* 4. CEO & Team */}
  <section className=" mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {/* Card */}
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
        <Image
        width={400}
        height={500}
        
          src="/IMG-20250804-WA0007.jpg"
          alt="Sid Bouziane"
          className="rounded-xl w-full lg:h-[500] max-h-[500px]"
        />
        <h3 className="text-[#0f172a] text-xl font-bold mt-4">Sid Bouziane</h3>
        <p className="text-[#22b3b0] font-semibold mb-2">
          Chief Growth Officer
        </p>
        <p className="text-gray-600 text-sm leading-6">
          With 20+ years in healthcare, Sid has successfully built AI
          infrastructure across the US, Europe, and Asia.
        </p>
      </div>
      {/* Card */}
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6  text-center shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
        <Image
          src="/IMG_E1595.JPG"
          alt="Ahmad Abu Rabi"
          className="rounded-xl w-full max-h-[500px]"
          width={400}
          height={500}
        />
        <h3 className="text-[#0f172a] text-xl font-bold mt-4">Ahmad Abu Rabi</h3>
        <p className="text-[#22b3b0] font-semibold mb-2">
          Co-founder & AI/ML Expert
        </p>
        <p className="text-gray-600 text-sm leading-6">
          Ahmad brings 21 years of global experience in Data Science & AI,
          helping organizations unlock their data’s potential.
        </p>
      </div>
    </div>
  </section>

  {/* 5. Our Value */}
  <section className=" mt-20">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] text-center">
      Our Values
    </h2>
    <div className="flex flex-wrap justify-center gap-10  mt-10">
      {/* Value Box */}
      {[
        { title: "RapidML", img: "/1000049500.png" },
        { title: "Creativity", img: "/1000049499.png" },
        { title: "Results-Driven", img: "/1000049501.png" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md hover:scale-110 hover:shadow-2xl transition-transform duration-500 w-[300px] text-center p-6"
        >
          <h3 className="text-xl font-bold text-[#22b3b0] mb-4">
            {item.title}
          </h3>
          <Image
            src={item.img}
            alt={item.title}
            className="rounded-lg w-full h-auto"
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  </section>
</div>

  );
}
