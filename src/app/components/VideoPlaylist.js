import { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoSeminar({ lang = "en" }) {
  const videos = [
    {
      src: "/VID-20251002-WA0001.mp4",
      titleEn: "Seminar Video 1",
      descEn: "A glimpse into our elegant floral arrangements and creative touches.",
      titleAr: "الفيديو 1",
      descAr: "لمحة عن تنسيقاتنا ال الأنيقة ولمساتنا الإبداعية."
    },
    {
      src: "/VID-20251002-WA0002.mp4",
      titleEn: "Seminar Video 2",
      descEn: "Showcasing event decoration with a blend of beauty and precision.",
      titleAr: "الفيديو 2",
      descAr: "عرض لتزيين الفعاليات بمزيج من الجمال والدقة."
    },
    {
      src: "/VID-20251002-WA0004.mp4",
      titleEn: "Seminar Video 3",
      descEn: "Highlighting our detailed craftsmanship in every floral piece.",
      titleAr: "الفيديو 3",
      descAr: "إبراز دقة الحرفية في كل قطعة  نصنعها."
    },
    {
      src: "/VID-20251002-WA0007.mp4",
      titleEn: "Seminar Video 4",
      descEn: "Behind the scenes of creating unique arrangements for our clients.",
      titleAr: "الفيديو 4",
      descAr: "كواليس إعداد تنسيقات فريدة لعملائنا المميزين."
    },
    {
      src: "/VID-20251002-WA0005.mp4",
      titleEn: "Seminar Video 5",
      descEn: "Where creativity meets natural beauty — our signature work style.",
      titleAr: "الفيديو 5",
      descAr: "حيث يلتقي الإبداع مع الجمال الطبيعي — أسلوب عملنا المميز."
    },
    {
      src: "/VID-20251002-WA0006.mp4",
      titleEn: "Seminar Video 6",
      descEn: "A final touch of elegance and passion for every floral project.",
      titleAr: "الفيديو 6",
      descAr: "لمسة أخيرة من الأناقة والشغف في كل مشروع زهري."
    },
  ];

  const backgroundMusic = "/ambient-background-339939.mp3";
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [audioElement, setAudioElement] = useState(null);

  const openVideo = (index) => {
    setSelectedVideo(index);
    if (!audioElement) {
      const audio = new Audio(backgroundMusic);
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().catch(err => console.log("Audio play failed:", err));
      setAudioElement(audio);
    } else {
      audioElement.play();
    }
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    if (audioElement) {
      audioElement.pause();
    }
  };

  const nextVideo = () => {
    setSelectedVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] p-8">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold text-[#8B5E3C] mb-4 drop-shadow-lg">
          {lang === "ar" ? "بعض من أعمالنا" : "Some of Our Work"}
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-[#8B5E3C] to-[#6F6F6F] mx-auto mb-4 rounded-full"></div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openVideo(index)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-4 border-[#E0E0E0] hover:border-[#8B5E3C]">
              <video src={video.src} className="w-full h-64 object-cover" muted />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6F6F6F]/80 via-[#6F6F6F]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#6F6F6F] flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'scale-110 shadow-2xl shadow-[#8B5E3C]/50' : 'scale-100'}`}>
                  <Play className="w-10 h-10 text-[#F5F5F5] ml-1" fill="#F5F5F5" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-gradient-to-r from-[#8B5E3C]/95 to-[#6F6F6F]/95 backdrop-blur-sm rounded-xl px-4 py-3 border border-[#F5F5F5]/20">
                  <p className="text-[#F5F5F5] font-semibold text-lg">
                    {lang === "ar" ? video.titleAr : video.titleEn}
                  </p>
                  <p className="text-[#E8E8E8] text-sm mt-1">
                    {lang === "ar" ? video.descAr : video.descEn}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#8B5E3C]/30 to-transparent rounded-bl-3xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-[#6F6F6F]/98 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#6F6F6F] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <X className="w-7 h-7 text-[#F5F5F5]" />
          </button>
          <button
            onClick={prevVideo}
            className="absolute left-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#6F6F6F] to-[#8B5E3C] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <ChevronLeft className="w-7 h-7 text-[#F5F5F5]" />
          </button>
          <button
            onClick={nextVideo}
            className="absolute right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#6F6F6F] to-[#8B5E3C] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <ChevronRight className="w-7 h-7 text-[#F5F5F5]" />
          </button>

          <div className="max-w-5xl w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#8B5E3C]/40 border-4 border-[#8B5E3C]">
              <video
                src={videos[selectedVideo].src}
                controls
                autoPlay
                muted
                className="w-full max-h-[80vh] object-contain bg-black"
              />
            </div>
            <div className="mt-6 text-center bg-gradient-to-r from-[#8B5E3C] to-[#6F6F6F] rounded-xl py-3 px-6 shadow-lg">
              <p className="text-[#F5F5F5] text-2xl font-bold">
                {lang === "ar"
                  ? `${videos[selectedVideo].titleAr} من ${videos.length}`
                  : `${videos[selectedVideo].titleEn} of ${videos.length}`}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>
    </div>
  );
}
