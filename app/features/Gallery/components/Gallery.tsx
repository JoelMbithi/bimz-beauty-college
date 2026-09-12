'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Gallery Categories
const categories = ['All', 'Campus Life', 'Student Work', 'Graduation'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Hero Background Slider - Using DIFFERENT images from various folders
  const heroImages = [
    '/Barbering/Barbering-2.jpeg',
    '/BeautyTherapy/BeautyTherapy-1.jpeg',
    '/BeautyTherapy/BeautyTherapy.jpeg',
    '/Hero/Learners.jpeg',
  ];
  const [currentHero, setCurrentHero] = useState(0);

  // Auto-change hero image every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Using your actual folder paths from your public directory
  const images = [
    // Campus Life (Hero, BeautyTherapy, Cosmetology, NailTechnology)
    { src: '/Hero/Learning.jpeg', alt: 'Hands-on Learning', category: 'Campus Life', size: 'large' },
    { src: '/BeautyTherapy/BeautyTherapy.jpeg', alt: 'Beauty Therapy Practical', category: 'Campus Life', size: 'small' },
    { src: '/Cosmetology/Cosmetology-1.jpeg', alt: 'Cosmetology Class', category: 'Campus Life', size: 'medium' },
    { src: '/NailTechnology/NailTechnology.jpeg', alt: 'Nail Technology Station', category: 'Campus Life', size: 'small' },
    { src: '/Hero/Learners.jpeg', alt: 'Students Learning', category: 'Campus Life', size: 'medium' },

    // Student Work (Barbering, BeautyTherapy, HairDressing, NailTechnology)
    { src: '/Barbering/Barbering-1.jpeg', alt: 'Barbering Skills', category: 'Student Work', size: 'large' },
    { src: '/HairDressing/HairDressing.jpeg', alt: 'Hair Dressing & Styling', category: 'Student Work', size: 'small' },
    { src: '/NailTechnology/NailTechnology-1.jpeg', alt: 'Nail Art & Extensions', category: 'Student Work', size: 'medium' },
    { src: '/BeautyTherapy/BeautyTherapy-1.jpeg', alt: 'Makeup Artistry', category: 'Student Work', size: 'small' },
    { src: '/HairDressing/HairDressing-2.jpeg', alt: 'Braiding', category: 'Student Work', size: 'medium' },

    // Graduation (Hero)
    { src: '/Hero/Graduate.jpeg', alt: 'Proud Graduates', category: 'Graduation', size: 'large' },
    { src: '/Hero/Graduation.jpeg', alt: 'Graduation Ceremony', category: 'Graduation', size: 'small' },
    { src: '/Hero/skills.jpeg', alt: 'Skills Showcase', category: 'Graduation', size: 'medium' },
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <main className="bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* Hero Section with Crossfading Background - Using DIFFERENT Images */}
      <section className="relative py-32 md:py-44 px-4 md:px-8 lg:px-16 overflow-hidden bg-purple-950 min-h-[600px] flex items-center justify-center">
        
        {/* Rotating Background Images */}
        {heroImages.map((img, index) => (
          <div 
            key={img} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHero ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <p className="text-pink-300 uppercase tracking-[0.35em] text-xs font-bold mb-6">See the Bimz experience</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Our Campus & Student Work
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            A glimpse into the real, hands-on training and talent at Fedha Embakasi, Telaviv Connection Stage.
          </p>
        </div>

        {/* Hero Slider Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentHero ? 'bg-pink-500 w-8' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Filter & Gallery Grid */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
                  activeCategory === cat
                    ? 'border-pink-500 text-purple-950 bg-pink-50'
                    : 'border-transparent text-gray-500 hover:text-purple-950 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Asymmetric Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((img, i) => {
              // Assign different sizes based on the image type to create a masonry effect
              const spanClass = img.size === 'large' 
                ? 'col-span-2 row-span-2' 
                : img.size === 'medium' 
                  ? 'col-span-2 row-span-1' 
                  : 'col-span-1 row-span-1';

              return (
                <div 
                  key={i} 
                  className={`relative overflow-hidden group bg-gray-200 ${spanClass}`}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-xs font-bold uppercase tracking-widest text-pink-300">{img.category}</p>
                    <p className="text-lg font-bold">{img.alt}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights / Testimonials Vibe */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink-600 uppercase tracking-[0.35em] text-xs font-bold mb-4">A commitment to excellence</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Where creativity meets professional standards.
            </h2>
            <p className="text-gray-600 font-normal leading-relaxed mb-8">
              From our modern salon floor to our expert-led classrooms, every corner of Bimz Beauty College is designed to give you the practical experience you need to succeed.
            </p>
            <Link 
              href="/ApplyNow" 
              className="inline-block md:hidden bg-purple-950 text-white font-bold py-4 px-10 hover:bg-purple-900 transition-colors uppercase tracking-widest text-xs"
            >
              Apply Today
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/Hero/Learning.jpeg" alt="Practical class" className="h-64 w-full object-cover shadow-md" />
            <img src="/BeautyTherapy/BeautyTherapy-1.jpeg" alt="Nail Art" className="h-64 w-full object-cover shadow-md mt-8" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16  text-center text-pink-600">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Visit our campus in person</h2>
        <p className="text-gray-600 text-lg font-normal mb-12 max-w-xl mx-auto">
          The best way to see if Bimz is right for you is to walk through our doors. Book a free tour today.
        </p>
       
      </section>
    </main>
  );
};

export default Gallery;