'use client'
import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: "/Hero/college.jpeg",
    title: "Shape your future with Bimz Beaty College",
    subtitle: "Where excellence meets opportunity",
  },
  {
    image: "/Hero/Graduate.jpeg",
    title: "Empowering minds, building leaders",
    subtitle: "Your journey to success starts here",
  },
  {
    image: "/Hero/skills.jpeg",
    title: "Unlock your potential today",
    subtitle: "World-class education at your fingertips",
  },
];

const AUTOPLAY_MS = 6000;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-hidden={!isActive}
            {...(!isActive ? { inert: '' as unknown as boolean } : {})}
            inert={!isActive}
          >
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <span className="inline-block bg-pink-600/90 text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-5 tracking-wide">
                  Welcome to Bimz Beaty College
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-2xl text-gray-200 mb-9 font-light">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/ApplyNow"
                    tabIndex={isActive ? 0 : -1}
                    className="bg-pink-600 hover:bg-pink-900 text-white font-semibold py-3.5 px-8 rounded-lg transition-colors text-lg"
                  >
                    Apply now
                  </a>
                  <a
                    href="/courses"
                    tabIndex={isActive ? 0 : -1}
                    className="border border-white/70 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-lg transition-colors text-lg"
                  >
                    Explore courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80 w-2.5'
            }`}
            aria-label={`Go to slide ${index + 1} of ${slides.length}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;