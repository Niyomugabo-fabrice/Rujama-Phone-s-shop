import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔥 Slow motion video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  

 

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden text-white"
    >

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <video
          ref={videoRef}
          src="video/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="
          w-full
          h-full
          object-cover
          scale-110
          blur-[1px]
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

      </div>
      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">

        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 max-w-4xl">
          Best Phones & Accessories in Kigali
        </h1>

        <p className="text-lg md:text-2xl mb-8 max-w-2xl text-white/80">
          Affordable smartphones, accessories and repair services
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">

          <a
            href="#products"
            className="
            bg-[#b30000]
            hover:bg-[#8a0000]
            text-white
            px-8 py-3
            rounded-full
            transition-all duration-300
            shadow-lg
            hover:scale-105
            "
          >
            Shop Now
          </a>

          <a
            href="https://wa.me/250788773754"
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-white
            hover:bg-gray-100
            text-blue-600
            px-8 py-3
            rounded-full
            transition-all duration-300
            shadow-lg
            hover:scale-105
            "
          >
            Contact on WhatsApp
          </a>

        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">

      </div>
    </section>
  );
}