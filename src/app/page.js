'use client';
import React, { useState, useEffect } from "react";

const content = {
  ar: {
    welcome: {
      hero: "أزهار الربيع",
      tagline: "حيث تلتقي الجودة بالإبداع",
      subtitle: "نحول أحلامك إلى واقع ملموس",
      cta: "استكشف أعمالنا",
      stats: [
        { number: "15+", label: "سنة خبرة" },
        { number: "500+", label: "مشروع منجز" },
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
        windows: "النوافذ",
        decoration: "الديكورات",
        marble: "مطابخ رخامية"
      },
      cta: "تواصل معنا عبر واتساب",
      location: "موقعنا في الأردن",
    },
    gallery: {
      title: "معرض أعمالنا",
      subtitle: "استعرض مجموعة من أفضل مشاريعنا",
      categories: {
        all: "جميع الأعمال",
        marble: "مطابخ رخامية",
        wood: "مطابخ خشبية",
        aluminum: "مطابخ ألمنيوم",
        windows: "النوافذ",
        decoration: "الديكورات",
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
        { number: "15+", label: "Years Experience" },
        { number: "500+", label: "Projects Done" },
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
      description: "We are a leading company in designing and implementing modern kitchens made of marble, wood, and aluminum, in addition to luxury windows and interior decorations.",
      services: {
        title: "Our Services",
        wood: "Wood Kitchens",
        aluminum: "Aluminum Kitchens",
        windows: "Windows",
        decoration: "Decorations",
        marble: "Marble Kitchens"
      },
      cta: "Contact us via WhatsApp",
      location: "Our Location in Jordan",
    },
    gallery: {
      title: "Our Work Gallery",
      subtitle: "Browse a collection of our best projects",
      categories: {
        all: "All Work",
        marble: "Marble Kitchens",
        wood: "Wood Kitchens",
        aluminum: "Aluminum Kitchens",
        windows: "Windows",
        decoration: "Decorations",
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
  { id: 1, category: "marble", title: "مطابخ رخامية 1" },
  { id: 2, category: "wood", title: "مطابخ خشبية 1" },
  { id: 3, category: "aluminum", title: "مطابخ ألمنيوم 1" },
  { id: 4, category: "marble", title: "مطابخ رخامية 2" },
  { id: 5, category: "wood", title: "مطابخ خشبية 2" },
  { id: 6, category: "decoration", title: "ديكور داخلي 1" },
  { id: 7, category: "windows", title: "نافذة فاخرة 1" },
];

export default function KitchensShowcase({ initialLang = "ar" }) {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [currentSection, setCurrentSection] = useState("welcome");

  // SEO Metadata based on language
  const seoData = {
    ar: {
      title: "شركة أزهار الربيع | مطابخ عصرية وديكورات داخلية فاخرة في الأردن",
      description: "شركة رائدة في تصميم وتنفيذ المطابخ الرخامية والخشبية والألمنيوم والديكورات الداخلية. خبرة 15+ سنة في الأردن. جودة عالية وأسعار منافسة.",
      keywords: "مطابخ الأردن, مطابخ رخامية, مطابخ خشبية, مطابخ ألمنيوم, ديكورات داخلية, نوافذ, أزهار الربيع, تصميم مطابخ عمان",
      ogTitle: "أزهار الربيع - متخصصون في المطابخ والديكورات الداخلية",
      ogDescription: "نحول أحلامك إلى واقع ملموس. مطابخ عصرية وديكورات فاخرة بأعلى جودة.",
    },
    en: {
      title: "Spring Flowers Company | Modern Kitchens & Interior Design in Jordan",
      description: "Leading company in designing modern marble, wood, and aluminum kitchens and interior decorations. 15+ years experience in Jordan. High quality and competitive prices.",
      keywords: "kitchens Jordan, marble kitchens, wooden kitchens, aluminum kitchens, interior decoration, windows, Spring Flowers, kitchen design Amman",
      ogTitle: "Spring Flowers - Specialists in Kitchens and Interior Decoration",
      ogDescription: "Turning your dreams into reality. Modern kitchens and luxury decorations with highest quality.",
    }
  };

  const currentSeo = seoData[lang];

  const categories = [
    { key: "all", label: t.gallery.categories.all },
    { key: "marble", label: t.gallery.categories.marble },
    { key: "wood", label: t.gallery.categories.wood },
    { key: "aluminum", label: t.gallery.categories.aluminum },
    { key: "windows", label: t.gallery.categories.windows },
    { key: "decoration", label: t.gallery.categories.decoration },
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
    <div className="min-h-screen bg-gray-50 text-gray-900" dir={t.dir}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.home.title}
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('welcome')} className="text-sm hover:text-purple-600 transition">
              {lang === "ar" ? "الرئيسية" : "Home"}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-purple-600 transition">
              {t.about.title}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm hover:text-purple-600 transition">
              {t.gallery.title}
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="toggle-lang"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition"
            >
              {t.toggle}
            </button>
            <a
              href="https://wa.me/962795924472"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm hover:shadow-lg transition"
            >
              {t.home.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section id="welcome" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              {t.welcome.hero}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-2">
              {t.welcome.tagline}
            </p>
            <p className="text-lg text-gray-600">
              {t.welcome.subtitle}
            </p>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {t.welcome.cta}
          </button>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {t.welcome.stats.map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Video */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-xl text-gray-600">{t.about.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.about.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {t.about.features.map((feature, i) => (
                  <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                    <h4 className="font-bold text-purple-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-video bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg px-4">
                      {t.about.videoPlaceholder}
                    </p>
                    <p className="text-white/80 text-sm mt-2">
                      {lang === "ar" ? "يمكنك إضافة رابط الفيديو هنا" : "You can add video link here"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Preview */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">{t.home.services.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(t.home.services).filter(([key]) => key !== 'title').map(([key, value]) => (
                <div key={key} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer" onClick={() => scrollToSection('gallery')}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white">✨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">{value}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.gallery.title}
              </h2>
              <p className="text-gray-600">{t.gallery.subtitle}</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setFilter(c.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      filter === c.key 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                        : "bg-white text-gray-700 hover:shadow-md"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                {items.length} {lang === "ar" ? "نتيجة" : "results"}
              </div>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="p-12 bg-white rounded-2xl shadow-sm text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-gray-600">{t.gallery.placeholder}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelected(item)}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-end p-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-semibold">
                      {lang === "ar" ? item.title : item.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{lang === "ar" ? item.title : item.category}</h3>
                    <p className="text-sm text-gray-500 mt-1">
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
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-purple-50 to-pink-50">
              <h4 className="font-bold text-xl">{selected.title}</h4>
              <button 
                onClick={() => setSelected(null)} 
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 transition flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-5xl mb-2">🖼️</div>
                  <p>صورة افتراضية</p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{t.home.description}</p>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                    <h5 className="font-semibold mb-2">{t.home.services[selected.category]}</h5>
                    <p className="text-sm text-gray-600">
                      {lang === "ar" 
                        ? "نقدم أفضل الحلول بأعلى جودة وأحدث التصاميم" 
                        : "We provide the best solutions with highest quality and latest designs"}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/962795924472?text=${encodeURIComponent(
                    (lang === "ar" ? "مرحباً، أريد تفاصيل عن: " : "Hi, I want details about: ") + selected.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition text-center"
                >
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
   <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    {/* العنوان */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-2">{t.home.title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4"></div>
      <p className="text-gray-300">{t.home.subtitle}</p>
    </div>

    {/* الروابط */}
    <div className="flex justify-center gap-6 mb-8">
      {/* واتساب */}
      <a
        href="https://wa.me/962795924472"
        target="_blank"
        rel="noreferrer"
        className="hover:text-green-400 transition flex items-center gap-2"
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
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition flex items-center gap-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Facebook"
          className="w-6 h-6"
        />
        Facebook
      </a>
    </div>

<div className="mb-12 flex justify-center">
  <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl border border-gray-200">
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