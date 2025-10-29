import FeaturesSection from "@/app/components/FeaturesSection";
import Hero from "@/app/components/Hero";

export default async function Page({ params }) {
  const category = params?.features || "All";

  const extraTitle =
    category === "All"
      ? "Explore All Solutions"
      : `Explore ${category} Solutions`;

  return (
    <>
      <Hero>
        <div className="px-5 py-[60px] text-center mx-auto rounded-[12px] bg-[#eafafa]">
          <h1 className="text-[44px] font-bold text-black mb-6">
            Solutions & Services
            <span className="block text-[20px] font-normal text-[#666] mt-2">
              {extraTitle}
            </span>
          </h1>
          <h2 className="text-[28px] font-normal text-[#333] leading-[1.6] max-w-[800px] mx-auto">
            Empower your business with AI-driven, no-code analytics — make smarter, faster decisions today.
          </h2>
        </div>
      </Hero>
      <div className="">
        <FeaturesSection activeCategory={category} />
      </div>
    </>
  );
}
