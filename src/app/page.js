
export const metadata = {
  title: "شركة أزهار الربيع | مطابخ خشبية وألمنيوم فاخرة في الأردن",
  description:
    "نحن شركة أزهار الربيع، المتخصصة في تصميم وتنفيذ المطابخ العصرية والديكورات الداخلية في الأردن. أكثر من 40 سنة من الخبرة و1000 مشروع منجز بجودة عالية.",
  keywords: [
    "مطابخ خشبية",
    "مطابخ ألمنيوم",
    "ديكور داخلي",
    "تصميم مطابخ",
    "أزهار الربيع الأردن",
  ],
  openGraph: {
    title: "شركة أزهار الربيع | تصميم مطابخ وديكورات في الأردن",
    description:
      "تصميم وتنفيذ مطابخ خشبية وألمنيوم فاخرة مع شركة أزهار الربيع – خبرة 40 سنة وجودة 100%.",
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
  alternates: {
    canonical: "https://springflowersco.com",
    languages: {
      "ar-JO": "/",
      "en-US": "/en",
    },
  },
};

'use client';

import React, { useState, useEffect } from "react";
import VideoPlaylist from "./components/VideoPlaylist";

const content = {
  ar: {
    welcome: {
      hero: "أزهار الربيع",
      tagline: "حيث تلتقي الجودة بالإبداع",
      subtitle: "نحول أحلامك إلى واقع ملموس",
      cta: "استكشف أعمالنا",
      stats: [
        { number: "40+", label: "سنة خبرة" },
        { number: "1000+", label: "مشروع منجز" },
        { number: "100%", label: "رضا العملاء" }
      ]
    },
    about: {
      title: "من نحن",
      subtitle: "قصة النجاح والتميز",
      description: "شركة أزهار الربيع هي وجهتك الأولى لتصميم وتنفيذ المطابخ العصرية والديكورات الداخلية الفاخرة. نجمع بين الحرفية العالية والتصاميم العصرية لنقدم لك مساحات تعكس ذوقك وتلبي احتياجاتك.",
      videoPlaceholder: "فيديو تعريفي عن الشركة",
      features: [
        { title: "جودة عالية", desc: "نستخدم أفضل المواد والخامات" },
        { title: "تصاميم عصرية", desc: "نواكب أحدث صيحات الديكور" },
        { title: "فريق محترف", desc: "خبراء في التصميم والتنفيذ" },
        { title: "أسعار منافسة", desc: "جودة عالية بأسعار مناسبة" }
      ]
    },
    home: {
      title: "شركة أزهار الربيع",
      subtitle: "متخصصون في المطابخ والديكورات الداخلية",
      description: "نحن شركة رائدة في تصميم وتنفيذ المطابخ العصرية من الرخام والخشب والألمنيوم، بالإضافة إلى النوافذ والديكورات الداخلية الفاخرة.",
      services: {
        title: "خدماتنا",
        wood: "مطابخ خشبية وأعمال المنجور",
        aluminum: "مطابخ ألمنيوم",
      },
      cta: "تواصل معنا عبر واتساب",
      location: "موقعنا في الأردن",
    },
    gallery: {
      title: "معرض أعمالنا",
      subtitle: "استعرض مجموعة من أفضل مشاريعنا",
      categories: {
        all: "جميع الأعمال",
        wood: "مطابخ خشبية",
        aluminum: "مطابخ ألمنيوم",
      },
      placeholder: "سيتم إضافة الصور والفيديوهات قريباً",
    },
    contact: { whatsapp: "تواصل عبر واتساب" },
    toggle: "EN",
    footer: `© ${new Date().getFullYear()} شركة أزهار الربيع - جميع الحقوق محفوظة`,
    dir: "rtl",
  },
  en: {
    welcome: {
      hero: "Spring Flowers",
      tagline: "Where Quality Meets Creativity",
      subtitle: "Turning Your Dreams Into Reality",
      cta: "Explore Our Work",
      stats: [
        { number: "40+", label: "Years Experience" },
        { number: "1000+", label: "Projects Done" },
        { number: "100%", label: "Client Satisfaction" }
      ]
    },
    about: {
      title: "About Us",
      subtitle: "A Story of Excellence and Success",
      description: "Spring Flowers Company is your premier destination for designing and implementing modern kitchens and luxury interior decorations. We combine superior craftsmanship with contemporary designs to create spaces that reflect your taste and meet your needs.",
      videoPlaceholder: "Company Introduction Video",
      features: [
        { title: "High Quality", desc: "We use the finest materials" },
        { title: "Modern Designs", desc: "Following latest trends" },
        { title: "Professional Team", desc: "Experts in design & execution" },
        { title: "Competitive Prices", desc: "Quality at affordable rates" }
      ]
    },
    home: {
      title: "Spring Flowers Company",
      subtitle: "Specialists in Kitchens and Interior Decoration",
      description: "We are a leading company in designing and implementing modern kitchens made of , wood, and aluminum, in addition to luxury windows and interior decorations.",
      services: {
        title: "Our Services",
        wood: "Wood Kitchens",
        aluminum: "Aluminum Kitchens",
      },
      cta: "Contact us via WhatsApp",
      location: "Our Location in Jordan",
    },
    gallery: {
      title: "Our Work Gallery",
      subtitle: "Browse a collection of our best projects",
      categories: {
        all: "All Work",
        wood: "Wood Kitchens",
        aluminum: "Aluminum Kitchens",
      },
      placeholder: "Images and videos will be added soon",
    },
    contact: { whatsapp: "Contact via WhatsApp" },
    toggle: "العربية",
    footer: `© ${new Date().getFullYear()} Spring Flowers Company - All rights reserved`,
    dir: "ltr",
  },
};

const sampleItems = [
  { id: 1, category: "wood", title: "مطابخ خشبية " , img: "/New folder/IMG-20251002-WA0003.jpg"},
  { id: 2, category: "wood", title: "مطابخ خشبية "  , img: "/New folder/IMG-20251002-WA0007.jpg"}, 
  { id: 3, category: "wood", title: "مطابخ خشبية ", img: "/New folder/IMG-20251002-WA0015.jpg"},
  { id: 4, category: "wood", title: "مطابخ خشبية ", img: "/WhatsApp Image 2025-10-12 at 15.43.51_33356bdc.jpg"},
  { id: 5, category: "wood", title: "مطابخ خشبية ", img: "/WhatsApp Image 2025-10-12 at 15.43.52_d0dd12a1.jpg"},
  { id: 6, category: "wood", title: "مطابخ خشبية ", img: "/WhatsApp Image 2025-10-12 at 15.43.52_ff26f969.jpg"},
  { id: 7, category: "wood", title: "مطابخ خشبية ", img: "/WhatsApp Image 2025-10-12 at 15.43.53_92bfdfd5.jpg"},
  { id: 8, category: "aluminum", title: "مطابخ ألمنيوم "  , img: "/New folder/IMG-20251002-WA0011.jpg"},
  { id: 9, category: "aluminum", title: "مطابخ ألمنيوم " , img: "/New folder/IMG-20251002-WA0010.jpg"},
  { id: 10, category: "aluminum", title: "مطابخ ألمنيوم " , img: "/New folder/IMG-20251002-WA0008.jpg"},
];



export default function KitchensShowcase({ initialLang = "ar" }) {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [currentSection, setCurrentSection] = useState("welcome");


  const seoData = {
    ar: {
      title: "شركة أزهار الربيع | مطابخ عصرية وديكورات داخلية فاخرة في الأردن",
      description: "شركة رائدة في تصميم وتنفيذ المطابخ  والخشبية والألمنيوم والديكورات الداخلية. خبرة 15+ سنة في الأردن. جودة عالية وأسعار منافسة.",
      keywords: "مطابخ الأردن, مطابخ , مطابخ خشبية, مطابخ ألمنيوم, ديكورات داخلية, نوافذ, أزهار الربيع, تصميم مطابخ عمان",
      ogTitle: "أزهار الربيع - متخصصون في المطابخ والديكورات الداخلية",
      ogDescription: "نحول أحلامك إلى واقع ملموس. مطابخ عصرية وديكورات فاخرة بأعلى جودة.",
    },
    en: {
      title: "Spring Flowers Company | Modern Kitchens & Interior Design in Jordan",
      description: "Leading company in designing modern , wood, and aluminum kitchens and interior decorations. 15+ years experience in Jordan. High quality and competitive prices.",
      keywords: "kitchens Jordan,  kitchens, wooden kitchens, aluminum kitchens, interior decoration, windows, Spring Flowers, kitchen design Amman",
      ogTitle: "Spring Flowers - Specialists in Kitchens and Interior Decoration",
      ogDescription: "Turning your dreams into reality. Modern kitchens and luxury decorations with highest quality.",
    }
  };

  const currentSeo = seoData[lang];

  const categories = [
    { key: "all", label: t.gallery.categories.all },
    { key: "wood", label: t.gallery.categories.wood },
    { key: "aluminum", label: t.gallery.categories.aluminum },
  ];

  const items = sampleItems.filter((it) => filter === "all" || it.category === filter);

  const scrollToSection = (section) => {
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update document title and meta tags dynamically
  useEffect(() => {
    document.title = currentSeo.title;
    
    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('description', currentSeo.description);
    updateMetaTag('keywords', currentSeo.keywords);
    updateMetaTag('language', lang === "ar" ? "Arabic" : "English");
    
    // Open Graph
    updateMetaTag('og:title', currentSeo.ogTitle, true);
    updateMetaTag('og:description', currentSeo.ogDescription, true);
    updateMetaTag('og:locale', lang === "ar" ? "ar_JO" : "en_US", true);
    
    // Twitter
    updateMetaTag('twitter:title', currentSeo.ogTitle, true);
    updateMetaTag('twitter:description', currentSeo.ogDescription, true);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
  }, [lang, currentSeo]);

  return (
  <div className="min-h-screen bg-[#F8F8F8] text-[#222222]" dir={t.dir}>
      {/* Header */}
      <header className="bg-[rgba(34,34,34,0.85)] backdrop-blur-sm shadow-sm">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
    {/* Logo/Title */}
    <div className="flex items-center gap-4">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8B5E3C] to-[#C2A572] bg-clip-text text-transparent whitespace-nowrap">
        {t.home.title}
      </div>
    </div>
    
    {/* Navigation - Desktop */}
    <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
      <button 
        onClick={() => scrollToSection('welcome')} 
        className="text-sm lg:text-base text-white hover:text-[#C2A572] transition whitespace-nowrap"
      >
        {lang === "ar" ? "الرئيسية" : "Home"}
      </button>
      <button 
        onClick={() => scrollToSection('about')} 
        className="text-sm lg:text-base text-white hover:text-[#C2A572] transition whitespace-nowrap"
      >
        {t.about.title}
      </button>
      <button 
        onClick={() => scrollToSection('gallery')} 
        className="text-sm lg:text-base text-white hover:text-[#C2A572] transition whitespace-nowrap"
      >
        {t.gallery.title}
      </button>
    </nav>
    
    {/* Actions */}
    <div className="flex items-center gap-2 flex-shrink-0">
      <button
        aria-label="toggle-lang"
        onClick={() => setLang(lang === "ar" ? "en" : "ar")}
        className="px-2 sm:px-3 py-1 sm:py-2 border border-[#E0E0E0] bg-white text-[#8B5E3C] rounded-lg text-xs sm:text-sm hover:bg-[#F5F5F5] transition whitespace-nowrap"
      >
        {t.toggle}
      </button>
      <a
        href="https://wa.me/962795924472"
        target="_blank"
        rel="noreferrer"
        className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-[#C2A572] to-[#7A583C] text-white rounded-lg text-xs sm:text-sm hover:shadow-lg transition whitespace-nowrap"
      >
        {t.home.cta}
      </a>
    </div>
    
    {/* Mobile Navigation */}
    <nav className="md:hidden flex items-center justify-center gap-4 w-full border-t border-[#6F6F6F]/30 pt-3 mt-2">
      <button 
        onClick={() => scrollToSection('welcome')} 
        className="text-sm text-white hover:text-[#C2A572] transition whitespace-nowrap"
      >
        {lang === "ar" ? "الرئيسية" : "Home"}
      </button>
      <button 
        onClick={() => scrollToSection('about')} 
        className="text-sm text-white hover:text-[#C2A572] transition whitespace-nowrap"
      >
        {t.about.title}
      </button>
      <button 
        onClick={() => scrollToSection('gallery')} 
        className="text-sm text-white hover:text-[#C2A572] transition whitespace-nowrap"
      >
        {t.gallery.title}
      </button>
    </nav>
  </div>
</header>

      {/* Welcome Section */}
      <section id="welcome" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] via-[#F8F8F8] to-[#E0E0E0]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#8B5E3C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C2A572] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl mb-12 z-30   md:text-8xl font-extrabold  text-[#7A583C] bg-clip-text ">
              {t.welcome.hero}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-[#6F6F6F] mb-2">
              {t.welcome.tagline}
            </p>
            <p className="text-lg text-[#6F6F6F]">
              {t.welcome.subtitle}
            </p>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-gradient-to-r from-[#8B5E3C] to-[#734D32] text-white rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {t.welcome.cta}
          </button>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16  mb-16 max-w-3xl mx-auto">
  {t.welcome.stats.map((stat, i) => (
    <div
      key={i}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center"
    >
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8B5E3C] to-[#C2A572] bg-clip-text text-transparent">
        {stat.number}
      </div>
      <div className="text-sm text-[#6F6F6F] mt-2">{stat.label}</div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* About Section with Video */}

  <section id="about" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    {/* 🟤 العنوان */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8B5E3C] to-[#C2A572] bg-clip-text text-transparent">
        {t.about.title}
      </h2>
      <p className="text-xl text-[#6F6F6F]">{t.about.subtitle}</p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <p className="text-lg text-[#222222] leading-relaxed mb-6">
          {t.about.description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {t.about.features.map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-bold text-[#8B5E3C] mb-1">{feature.title}</h4>
              <p className="text-sm text-[#6F6F6F]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

<div className="order-1 md:order-2 flex justify-center">
  <div className="relative w-full max-w-lg h-[600px]">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#8B5E3C]/20 to-[#C2A572]/20 rounded-full blur-2xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-[#6F6F6F]/15 to-[#E0E0E0]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

    <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#8B5E3C] rounded-lg rotate-12 opacity-40"></div>
    <div className="absolute bottom-16 left-8 w-40 h-40 border-4 border-[#C2A572] rounded-full opacity-30"></div>

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full   h-80 sm:w-80 sm:h-80 rounded-2xl shadow-2xl overflow-hidden">
      <img
        src="/ChatGPT Image Oct 13, 2025, 03_48_22 PM.png"
        alt="Spring Flowers"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="absolute top-8 left-1/3 w-4 h-4 bg-[#8B5E3C] rounded-full"></div>
    <div className="absolute bottom-12 right-1/3 w-3 h-3 bg-[#C2A572] rounded-full"></div>
    <div className="absolute top-1/3 right-12 w-5 h-5 bg-[#6F6F6F] rounded-full opacity-50"></div>

    <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 400 400">
      <path d="M 50 200 Q 150 100, 250 200 T 450 200" stroke="#8B5E3C" strokeWidth="3" fill="none" />
      <path d="M 0 250 Q 100 150, 200 250 T 400 250" stroke="#6F6F6F" strokeWidth="2" fill="none" />
    </svg>
  </div>
</div>


    </div>
  </div>
</section>
    <VideoPlaylist t={t} lang={lang} />

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#8B5E3C] to-[#C2A572] bg-clip-text text-transparent">
                {t.gallery.title}
              </h2>
              <p className="text-[#6F6F6F]">{t.gallery.subtitle}</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setFilter(c.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      filter === c.key 
                        ? "bg-gradient-to-r from-[#8B5E3C] to-[#734D32] text-white shadow-lg" 
                        : "bg-white text-[#222222] hover:shadow-md"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div className="text-sm text-[#6F6F6F]">
                {items.length} {lang === "ar" ? "نتيجة" : "results"}
              </div>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="p-12 bg-white rounded-2xl shadow-sm text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-[#6F6F6F]">{t.gallery.placeholder}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelected(item)}
                >
                <div className="relative aspect-[4/3]">
  <img
    src={item.img}
    alt={lang === "ar" ? item.title : item.category}
    className="w-full h-full object-cover rounded-lg"
    style={{
      background: "linear-gradient(to bottom right, #C2A572, #7A583C, #8B5E3C)"
    }}
  />
  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-semibold">
    {lang === "ar" ? item.title : item.category}
  </div>
</div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg">{lang === "ar" ? item.title : item.category}</h3>
                    <p className="text-sm text-[#6F6F6F] mt-1">
                      {t.home.services[item.category] || item.category}
                    
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
{/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setSelected(null)}>
          <div className="bg-white max-w-4xl w-full max-h-[95vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-[#E0E0E0] bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] flex-shrink-0">
              <h4 className="font-bold text-base sm:text-lg md:text-xl line-clamp-1">{selected.title}</h4>
              <button 
                onClick={() => setSelected(null)} 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#F5F5F5] transition flex items-center justify-center flex-shrink-0 ml-2"
              >
                ✕
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto p-3 sm:p-4 md:p-6">
              {/* Large Image Display */}
              <div className="mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] object-contain bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0]"
                />
              </div>
              
              {/* Description */}
              <div className="flex flex-col">
                <p className="text-[#222222] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{t.home.description}</p>
                <div className="bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                  <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t.home.services[selected.category]}</h5>
                  <p className="text-xs sm:text-sm text-[#6F6F6F]">
                    {lang === "ar" 
                      ? "نقدم أفضل الحلول بأعلى جودة وأحدث التصاميم" 
                      : "We provide the best solutions with highest quality and latest designs"}
                  </p>
                </div>
                <a
                  href={`https://wa.me/962795924472?text=${encodeURIComponent(
                    (lang === "ar" ? "مرحباً، أريد تفاصيل عن: " : "Hi, I want details about: ") + selected.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#C2A572] to-[#7A583C] text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg transition text-center"
                >
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
   <footer className="bg-gradient-to-br from-[#121212] via-[#1a1410] to-[#2a1f1a] text-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    {/* العنوان */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-2">{t.home.title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#8B5E3C] to-[#C2A572] rounded-full mx-auto mb-4"></div>
      <p className="text-gray-300">{t.home.subtitle}</p>
    </div>

    {/* الروابط */}
    <div className="flex justify-center gap-6 mb-8">
      {/* واتساب */}
      <a
        href="https://wa.me/962795924472"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#C2A572] transition flex items-center gap-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
        WhatsApp
      </a>

      {/* فيسبوك */}
      <a
        href="https://www.facebook.com/share/1FkkrAjNJu/?mibextid=wwXIfr"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#C2A572] transition flex items-center gap-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Facebook"s
          className="w-6 h-6"
        />
        Facebook
      </a>
    </div>

<div className="mb-12 flex justify-center">
  <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl border border-[rgba(255,255,255,0.1)]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3385.2374334748088!2d35.82845178483863!3d31.954454781228222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU3JzE2LjAiTiAzNcKwNDknMzQuNiJF!5e0!3m2!1sar!2sjo!4v1759230085524!5m2!1sar!2sjo"
      className="w-full h-[400px] md:h-[500px] lg:h-[550px]"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  </div>
</div>


    <div className="text-center text-gray-400 text-sm">{t.footer}</div>
  </div>
</footer>

    </div>
  );
}