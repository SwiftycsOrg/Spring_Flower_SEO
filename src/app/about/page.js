import React from 'react'
import Head from 'next/head'
import AboutSections from '../components/AboutSections'
import Hero from '../components/Hero'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Swiftycs | No Code Data Science Solutions</title>
        <meta
          name="description"
          content="Learn more about Swiftycs and how we provide no-code data science solutions to empower your business."
        />
        <meta name="keywords" content="Swiftycs, no code, data science, AI solutions" />

        {/* Open Graph */}
        <meta property="og:title" content="About Swiftycs" />
        <meta
          property="og:description"
          content="Learn more about Swiftycs and our no-code data science solutions."
        />
        <meta property="og:image" content="https://www.swiftycs.com//og-about.jpg" />
        <meta property="og:url" content="https://www.swiftycs.com//about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Swiftycs" />
        <meta
          name="twitter:description"
          content="Learn more about Swiftycs and our no-code data science solutions."
        />
        <meta name="twitter:image" content="https://www.swiftycs.com//og-about.jpg" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Swiftycs",
              url: "https://www.swiftycs.com/",
              logo: "https://www.swiftycs.com//logo.png",
              sameAs: [
                "https://facebook.com/swiftycs",
                "https://twitter.com/swiftycs",
                "https://linkedin.com/company/swiftycs"
              ]
            })
          }}
        />
      </Head>

      <Hero>
        <section className="text-center px-4 sm:px-5 bg-[#eafafa]">
          <div className="min-h-[200px] sm:min-h-[250px] flex flex-col items-center justify-center mb-8 sm:mb-[50px]">
            <p className="text-black text-2xl sm:text-[60px] font-bold m-0">
              About Swiftycs
            </p>
            <h2 className="mt-3 sm:mt-4 text-sm sm:text-base">
              No Code, Data Science Solutions
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-20">
            <figure className="m-0 flex justify-center">
              <Image
                src="/1000049539 (1).png"
                alt="Image 6"
                loading="lazy"
                className="w-[120px] sm:w-[200px] h-auto"
                width={200}
                height={200}
              />
            </figure>

            <figure className="m-0 flex justify-center">
              <Image
                src="/1000049540.png"
                alt="Image 5"
                loading="lazy"
                className="w-[250px] sm:w-[500px] h-auto object-cover"
                width={500}
                height={400}
              />
            </figure>

            <figure className="m-0 flex justify-center">
              <Image
                src="/1000049541.png"
                alt="Image 4"
                loading="lazy"
                className="w-[100px] sm:w-[150px] h-auto"
                width={150}
                height={150}
              />
            </figure>
          </div>
        </section>
      </Hero>

      <div className="font-sans  text-gray-800 bg-gradient-to-br from-[#f8fafc] to-[#e8f6f6] min-h-screen py-12">
        <AboutSections />
      </div>
    </div>
  )
}
