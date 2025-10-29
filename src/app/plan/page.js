"use client"
import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_80%_at_20%_0%,#d5fff8_0%,transparent_60%),radial-gradient(60%_80%_at_100%_0%,#e7e4ff_0%,transparent_60%),linear-gradient(180deg,#ffffff_0%,#f7fbfb_100%)]">
      <Head>
        {/* Meta Tags */}
        <title>Pricing Plans | Swiftycs</title>
        <meta
          name="description"
          content="Choose the best Swiftycs plan for your business. From Standard to Enterprise, find the right data science and AI tools for your needs."
        />
        <meta
          name="keywords"
          content="Swiftycs pricing, data science plans, AI tools, machine learning pricing"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Pricing Plans | Swiftycs" />
        <meta
          property="og:description"
          content="Choose the best Swiftycs plan for your business. From Standard to Enterprise, find the right data science and AI tools for your needs."
        />
        <meta property="og:image" content="https://www.swiftycs.com//og-pricing.jpg" />
        <meta property="og:url" content="https://www.swiftycs.com//pricing" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing Plans | Swiftycs" />
        <meta
          name="twitter:description"
          content="Choose the best Swiftycs plan for your business. From Standard to Enterprise, find the right data science and AI tools for your needs."
        />
        <meta name="twitter:image" content="https://www.swiftycs.com//og-pricing.jpg" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Swiftycs Pricing Plans",
              description:
                "Pricing options for Swiftycs data science and AI solutions, including Standard, Growth, and Enterprise packages.",
              brand: {
                "@type": "Organization",
                name: "Swiftycs",
                logo: "https://www.swiftycs.com//logo.png",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Standard",
                  price: "Contact us",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Growth",
                  price: "Contact us",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Enterprise",
                  price: "Contact us",
                  priceCurrency: "USD",
                },
              ],
            }),
          }}
        />
      </Head>

      <Hero>
        <div className="relative overflow-hidden px-5 py-[60px] text-center mx-auto rounded-[20px] bg-[#eafafa] shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_10px_30px_rgba(0,0,0,.05)]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#22e4e0]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#7c3aed]/10 blur-3xl" />
          <h2 className="text-[#0b1220] text-4xl md:text-5xl font-extrabold tracking-tight">
            Select your plan...
          </h2>
          <p className="text-[#2d3748] text-lg md:text-xl mx-auto mt-4 mb-8 leading-relaxed max-w-4xl">
            You only need a cup of data to make magic with machine learning...
            <br />
            Swiftycs users could run ML models in few minutes without coding or
            having a data scientist team
          </p>
        </div>
      </Hero>

      <div className="sm:mr-24 sm:ml-24 mr-2 ml-2">
        <PricingSection />
      </div>
    </div>
  );
}

const PricingSection = () => {
  const plans = [
    {
      title: "Standard",
      desc: "For SMB & Enterprise teams",
      features: [
        "Unlimited Predictions / Models",
        "Unlimited Datasets",
        "Campaigns Performance Measurement",
        "Media Performance Tracking",
        "Customer Segmentation",
        "Churn Prevention",
        "Chat Support",
      ],
      link: "/get-started",
    },
    {
      title: "Growth",
      desc: "Including all in Standard",
      features: [
        "Marketing Mix Models",
        "Scoring, Fraud Detection",
        "Customer Lifetime Value",
        "Data Anomalies Detection",
        "Data Preparation Service",
        "Dedicated Data Scientist",
        "Advanced Security",
        "Deployment",
      ],
      link: "/get-started",
    },
    {
      title: "Enterprise",
      desc: "Including Growth",
      features: [
        "Data Science Managed Service",
        "Integration of Swiftycs solutions in-house",
        "Build Data Science use-cases and train in-house team",
        "Deployment of ML models",
      ],
      link: "/get-started",
    },
  ];

  return (
    <section className="py-14 font-sans mt-6">
      <div className="mx-auto max-w-7xl px-2 md:px-4">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              {/* gradient border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#22e4e0_0deg,#7c3aed_90deg,#22e4e0_180deg,#7c3aed_270deg,#22e4e0_360deg)] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative h-full rounded-2xl bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5 p-6 flex flex-col justify-between transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] group-hover:-translate-y-1">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#22e4e0]/10 ring-1 ring-[#22e4e0]/30">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                        <path d="M4 7h16M4 12h10M4 17h7" stroke="#22e4e0" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-[#0b1220]">
                      {plan.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#536471] mb-4">{plan.desc}</p>

                  <ul className="space-y-3 border-t border-gray-200/70 pt-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-[#1f2937] border-b border-gray-200/70 last:border-none pb-3"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#22e4e0]/10 ring-1 ring-[#22e4e0]/30">
                          <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                            <path d="M20 6L9 17l-5-5" stroke="#22e4e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href={plan.link}
                    className="group/btn relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22e4e0] px-4 py-2 font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-lg active:scale-[.99]"
                  >
                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
