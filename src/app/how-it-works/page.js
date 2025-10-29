import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Image from "next/image";

export default function HowItWorksPage() {
  const steps = [
    {
      num: 1,
      title: "Identify the Problem",
      desc: "Start by identifying the questions you want answered and prepare your dataset accordingly.",
      img: "/Identify_the_Problem.svg",
    },
    {
      num: 2,
      title: "Process the Data",
      desc: "Upload your dataset and select a data science model to run predictions.",
      img: "/Process_the_Data.svg",
    },
    {
      num: 3,
      title: "Evaluate the Results",
      desc: "Review the results from your model and make refinements as needed.",
      img: "/Evaluate_the_Results.svg",
    },
    {
      num: 4,
      title: "Visualize Predictions",
      desc: "Explore final insights through visual dashboards and take action.",
      img: "/Visualize_Predictions.svg",
    },
  ];

 return (
  <div className="font-[Segoe_UI]">
    {/* Hero Section */}
    <Hero>
      <div className="px-5 py-20 min-h-96 text-center mx-auto rounded-2xl bg-gradient-to-r from-[#eafafa] to-[#f5faff] ">
        <h3 className="text-4xl md:text-6xl font-bold text-gray-800">
          How It Works
        </h3>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Our self-serve data analytics platform uses AI and ML to transform
          your data into insights in just a few steps.
        </p>
      </div>
    </Hero>

    {/* Steps Section */}
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#e0fdfa_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#f3e8ff_0%,transparent_60%)]" />

     <section className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-14">
  {steps.map((step, index) => (
    <div
      key={step.num}
      className={`flex items-center rounded-2xl max-w-6xl shadow-md p-10 gap-8 flex-wrap transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl
        ${index % 2 === 0 ? "flex-row bg-white" : "flex-row-reverse bg-[#fdfcff]"}
        max-md:flex-col max-md:text-center mx-auto`}
    >
      {/* Step Number */}
      <div
        className={`text-[90px] md:text-[110px] font-extrabold text-[#00c3ff]/20 w-full
          ${index % 2 !== 0 ? "text-left" : "text-right"}
          max-md:text-center max-md:text-[70px]`}
      >
        {step.num}
      </div>

      {/* Icon */}
      <Image
        src={step.img}
        alt={step.title}
        width={450}
        height={300}
        className="w-[300px] md:w-[380px] lg:w-[420px] mx-auto"
      />

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-4xl md:text-3xl mb-3 text-gray-800 font-bold">
          {step.title}
        </h3>
        <p className="text-base md:text-2xl text-gray-600 leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  ))}
</section>

    </div>
  </div>
);

}
