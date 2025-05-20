"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define slide data structure
interface SlideData {
  title: string;
  subtitle: string;
  ctaLink: string;
  imageUrl: string;
}

const slides: SlideData[] = [
  {
    title: "Chăm sóc sức khỏe của bạn",
    subtitle: "Tại Viet Tin Medic, chúng tôi cung cấp sản phẩm chuyên chẩn đoán mọi loại bệnh.",
    ctaLink: "/make-an-appointment",
    imageUrl: "https://ext.same-assets.com/2245889959/3037898069.jpeg", // Background image URL
  },
  {
    title: "Thiết bị y tế hiện đại",
    subtitle: "Trang bị máy móc tối tân giúp bạn phát hiện sớm các vấn đề sức khỏe..",
    ctaLink: "/make-an-appointment",
    imageUrl: "https://ext.same-assets.com/2245889959/1533657753.jpeg", // Background image URL
  },
  {
    title: "Đo huyết áp, đường huyết tại nhà",
    subtitle: "Sản phẩm dễ sử dụng, phù hợp cho mọi lứa tuổi, đặc biệt là người lớn tuổi.",
    ctaLink: "/make-an-appointment",
    imageUrl: "https://ext.same-assets.com/2245889959/3710276196.jpeg", // Background image URL
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 500);
  };

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 h-full flex items-center justify-start container-custom">
        <div
          className={`max-w-xl text-white transition-all duration-700 transform ${isTransitioning ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-asap">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {slides[currentSlide].subtitle}
          </p>
          <Button
            asChild
            className="bg-white text-[hsl(var(--primary))] hover:bg-white/90 hover:text-[hsl(var(--primary))] px-8 py-6 text-base uppercase font-bold"
          >
            <Link href={slides[currentSlide].ctaLink}>
              Xem ngay
            </Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
