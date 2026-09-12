'use client'
import React, { useState } from 'react';
import Link from 'next/link';


const StaffPhoto = ({
  src,
  alt,
  initials,
  className = '',
  textClassName = 'text-purple-800 font-bold',
}: {
  src?: string;
  alt: string;
  initials: string;
  className?: string;
  textClassName?: string;
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`bg-purple-100 flex items-center justify-center overflow-hidden ${className}`}>
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={textClassName}>{initials}</span>
      )}
    </div>
  );
};

const Staff = () => {
  const leadership = [
    {
      name: 'Mr. Bimz Suzario',
      role: 'Founder & Managing Director',
      bio: 'With over 15 years in the beauty industry, Bimz founded Bimz Beauty College to give accessible, world-class training to the next generation of professionals in Embakasi.',
      image: '/Staff/Managing Director.jpeg',
      initials: 'BS',
    },
    {
      name: 'Mrs. Beatrice Mwangi',
      role: 'Assistant Director',
      bio: 'A NITA-certified trainer and former salon owner, Beatrice oversees our curriculum and ensures every graduate meets the highest industry standards.',
      image: '/Staff/Asistant Director.jpeg',
      initials: 'BM',
    },
  ];

  const adminStaff = [
    { name: 'Ms. Ann Wairimu', role: 'Admissions Officer', image: '', initials: 'AW' },
    { name: 'Mr. Peter Kariuki', role: 'Finance & Records Officer', image: '', initials: 'PK' },
    { name: 'Ms. Lucy Muthoni', role: 'Student Welfare Officer', image: '', initials: 'LM' },
  ];

  return (
    <main className="bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      {/* 1. Hero — no photo; typography carries it */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 lg:px-16 bg-pink-600 overflow-hidden">
        <div className="relative items-center max-w-4xl">
          <p className="text-purple-300 uppercase tracking-widest text-xs font-semibold mb-5">The people behind Bimz</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-2xl">
            Our directors & staff
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            Meet the qualified, passionate professionals dedicated to shaping your career in the beauty industry.
          </p>
        </div>
      </section>

      {/* 2. Leadership — large portrait photos */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-purple-700 uppercase tracking-widest text-xs font-semibold mb-4">Leadership</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Guiding our vision, one student at a time.
            </h2>
          </div>

          <div className="space-y-24">
            {leadership.map((leader, index) => {
              const reversed = index % 2 === 1;
              return (
                <div key={leader.name} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className={`md:col-span-6 ${reversed ? 'md:order-2' : ''}`}>
                    <StaffPhoto
                      src={leader.image}
                      alt={leader.name}
                      initials={leader.initials}
                      className="aspect-[4/5] w-full"
                      textClassName="text-purple-800 text-7xl font-bold tracking-tight"
                    />
                  </div>

                  <div className={`md:col-span-6 ${reversed ? 'md:order-1' : ''}`}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-700 mb-3">
                      {leader.role}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Teaching Staff — one group image only */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-purple-700 uppercase tracking-widest text-xs font-semibold mb-4">Our Tutors</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Teaching staff
            </h2>
            <p className="text-gray-500">
              Industry-experienced professionals mentoring the next generation.
            </p>
          </div>

          {/* Single group photo — no names, no directory */}
          <StaffPhoto
            src="/Staff/staff-Nail Technology.jpeg"
            alt="Bimz Beauty College teaching staff group photo"
            initials="Teaching Staff"
            className="aspect-[16/9] md:aspect-[21/9] w-full rounded-lg"
            textClassName="text-purple-800 text-3xl md:text-5xl font-bold tracking-tight"
          />
          <p className="mt-4 text-sm text-gray-500 italic">
            Our teaching team at Bimz Beauty College.
          </p>
        </div>
      </section>

      {/* 4. Administrative Staff */}
    
      {/* 5. Why Our Team */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-[#FDFBF7] border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-purple-700 uppercase tracking-widest text-xs font-semibold mb-4">Why it matters</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Qualified. Passionate. Dedicated.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-t-2 border-purple-800 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">NITA certified</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                All our tutors hold recognized NITA certifications and undergo continuous professional development.
              </p>
            </div>
            <div className="border-t-2 border-purple-800 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Real industry experience</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our instructors are not just teachers — they are working beauty professionals with active salon experience.
              </p>
            </div>
            <div className="border-t-2 border-purple-800 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Student-first approach</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We keep class sizes small so every student gets personal attention, mentorship, and hands-on guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Staff;