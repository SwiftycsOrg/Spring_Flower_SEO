'use client';
import React, { useState } from "react";

const content = {
  ar: {
    home: {
      title: "شركة أزهار الربيع",
      subtitle: "متخصصون في المطابخ والديكورات الداخلية",
      description:
        "نحن شركة رائدة في تصميم وتنفيذ المطابخ العصرية من الرخام والخشب والألمنيوم، بالإضافة إلى النوافذ والديكورات الداخلية الفاخرة.",
      services: {
        title: "خدماتنا",
        // marble: "مطابخ رخامية",
        wood: "مطابخ خشبية وأعمال المنجور",
        aluminum: "مطابخ ألمنيوم ",
        windows: "النوافذ",
        decoration: "الديكورات",
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
        wood: "مطابخ خشبية وأعمال المنجور",
        aluminum: "مطابخ ألمنيوم",
        windows: "النوافذ",
        decoration: "الديكورات",
      },
      placeholder: "سيتم إضافة الصور والفيديوهات قريباً",
    },
    contact: {
      whatsapp: "تواصل عبر واتساب",
    },
  },
  en: {
    home: {
      title: "Spring Flowers Company",
      subtitle: "Specialists in Kitchens and Interior Decoration",
      description:
        "We are a leading company in designing and implementing modern kitchens made of marble, wood, and aluminum, in addition to luxury windows and interior decorations.",
      services: {
        title: "Our Services",
        marble: "Marble Kitchens",
        wood: "Wood Kitchens",
        aluminum: "Aluminum Kitchens",
        windows: "Windows",
        decoration: "Decorations",
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
    contact: {
      whatsapp: "Contact via WhatsApp",
    },
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

  const categories = [
    { key: "all", label: t.gallery.categories.all },
    { key: "marble", label: t.gallery.categories.marble },
    { key: "wood", label: t.gallery.categories.wood },
    { key: "aluminum", label: t.gallery.categories.aluminum },
    { key: "windows", label: t.gallery.categories.windows },
    { key: "decoration", label: t.gallery.categories.decoration },
  ];

  const items = sampleItems.filter((it) => filter === "all" || it.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">{t.home.title}</div>
            <div className="hidden md:block text-sm text-gray-600">{t.home.subtitle}</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="toggle-lang"
              onClick={() => setLang((s) => (s === "ar" ? "en" : "ar"))}
              className="px-3 py-1 border rounded-md text-sm"
            >
              {lang === "ar" ? "EN" : "ع"}
            </button>

            <a
              href="https://wa.me/962795924472"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-green-600 text-white rounded-md text-sm"
            >
              {t.home.cta}
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-extrabold mb-2">{t.gallery.title}</h1>
            <p className="text-gray-600">{t.gallery.subtitle}</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`px-3 py-1 rounded-full text-sm border ${filter === c.key ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="text-sm text-gray-500">{items.length} {lang === 'ar' ? 'نتيجة' : 'results'}</div>
          </div>
        </section>

        <section>
          {items.length === 0 ? (
            <div className="p-8 bg-white rounded-md shadow-sm text-center">{t.gallery.placeholder}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelected(item)}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-end p-4">
                    <div className="bg-white/70 backdrop-blur-sm rounded-md px-3 py-1 text-xs font-semibold">
                      {item.title}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{t.home.services[item.category] || item.category}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {selected && (
          <div className="fixed inset-0 bg-black/40 z-30 flex items-center justify-center p-4">
            <div className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h4 className="font-bold">{selected.title}</h4>
                <button onClick={() => setSelected(null)} className="px-3 py-1">✕</button>
              </div>

              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-gray-100 rounded-md flex items-center justify-center text-gray-400">صورة افتراضية</div>
                <div>
                  <p className="text-gray-700 mb-2">{t.home.description}</p>
                  <a
                    href={`https://wa.me/962795924472?text=${encodeURIComponent(
                      (lang === "ar" ? "مرحباً، أريد تفاصيل عن: " : "Hi, I want details about: ") + selected.title
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
                  >
                    {t.contact.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
  
      </main>

    <footer className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10">
      <div className="  px-6 flex flex-col items-center gap-4">
        
        {/* Logo / Title */}
        <h2 className="text-xl font-semibold tracking-wide text-white">
          {t.home.title}
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {t.home.title}. All rights reserved.
        </p>
      </div>
    </footer>

    </div>
  );
}
