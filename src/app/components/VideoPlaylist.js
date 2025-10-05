"use client";
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function VideoPlaylist({ t, lang }) {
  const [showVideo, setShowVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const videos = [
    "/VID-20251002-WA0001.mp4",
    "/VID-20251002-WA0002.mp4",
    "/VID-20251002-WA0004.mp4",
    "/VID-20251002-WA0007.mp4",
    "/VID-20251002-WA0005.mp4",
    "/VID-20251002-WA0006.mp4",
  ];

  const handleVideoEnd = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="order-1 md:order-2">
      {/* خلفية الفيديو المصغّر */}
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <video
          src={videos[0]}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] via-[#00000040] to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white font-extrabold text-2xl md:text-3xl drop-shadow-lg">
            {t?.about?.videoPlaceholder || "Watch Our Videos"}
          </h2>
          <p className="text-white/90 text-sm md:text-base mt-3 max-w-md drop-shadow-md">
            {lang === "ar"
              ? "يمكنك مشاهدة مجموعة الفيديوهات أدناه"
              : "You can watch our playlist below"}
          </p>

          <button
            onClick={() => {
              setCurrentIndex(0);
              setShowVideo(true);
            }}
            className="mt-5 px-6 py-2 bg-[#C2A572] hover:bg-[#8B5E3C] text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            {lang === "ar" ? "عرض الفيديوهات" : "Watch Playlist"}
          </button>
        </div>
      </div>

      {/* نافذة عرض الفيديوهات */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110 transition-transform"
          >
            <X />
          </button>

          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black">
            <video
              key={currentIndex}
              ref={videoRef}
              src={videos[currentIndex]}
              autoPlay
              controls
              muted={isMuted}
              onEnded={handleVideoEnd}
              className="w-full h-full object-contain bg-black"
            />
          </div>

          {/* أدوات التحكم */}
          <div className="absolute bottom-10 flex gap-4 items-center text-white">
            <button onClick={prevVideo} className="p-2 hover:scale-110 transition">
              <ChevronLeft size={28} />
            </button>

            <button onClick={togglePlay} className="p-2 hover:scale-110 transition">
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>

            <button onClick={toggleMute} className="p-2 hover:scale-110 transition">
              {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
            </button>

            <button onClick={nextVideo} className="p-2 hover:scale-110 transition">
              <ChevronRight size={28} />
            </button>
          </div>

          {/* مؤشر الفيديوهات */}
          <div className="absolute bottom-4 flex space-x-2">
            {videos.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  idx === currentIndex ? "bg-[#C2A572]" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
