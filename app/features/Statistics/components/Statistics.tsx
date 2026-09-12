'use client'
import React from 'react';
import Link from 'next/link';

const Statistics = () => {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}</style>

  

      {/* 2. Core Metrics — asymmetric row instead of a uniform boxed grid */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-6">
            <div className="flex-1 min-w-[140px]">
              <p className="text-6xl md:text-7xl font-extrabold text-purple-950 tracking-tighter">1,500+</p>
              <p className="text-sm font-semibold text-gray-700 mt-3">Students trained since founding</p>
            </div>
            <div className="flex-1 min-w-[140px] md:pl-6 md:border-l border-purple-200">
              <p className="text-6xl md:text-7xl font-extrabold text-purple-950 tracking-tighter">96%</p>
              <p className="text-sm font-semibold text-gray-700 mt-3">Graduates employed within 6 months</p>
            </div>
            <div className="flex-1 min-w-[140px] md:pl-6 md:border-l border-purple-200">
              <p className="text-6xl md:text-7xl font-extrabold text-purple-950 tracking-tighter">15</p>
              <p className="text-sm font-semibold text-gray-700 mt-3">Qualified industry tutors on staff</p>
            </div>
            <div className="flex-1 min-w-[140px] md:pl-6 md:border-l border-purple-200">
              <p className="text-6xl md:text-7xl font-extrabold text-purple-950 tracking-tighter">6</p>
              <p className="text-sm font-semibold text-gray-700 mt-3">Certificate & diploma courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Achievements Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div>
            <p className="text-purple-700 uppercase tracking-widest text-xs font-semibold mb-4">Milestones</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-10">
              Key achievements we're proud of.
            </h2>

            <ul className="space-y-5">
              {[
                'Fully NITA accredited institution',
                'Over 1,500 successful graduates since inception',
                '96% of our graduates find employment within 6 months',
                'Hosted 10+ community outreach events in Embakasi',
                'Introduced advanced Diploma in Cosmetology in 2024',
                'Free computer training included for every student',
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-baseline border-b border-gray-100 pb-5">
                  <span className="shrink-0 text-purple-800 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-purple-950 p-10 md:p-14 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                Real skills. Real results.
              </h3>
              <p className="text-white/75 leading-relaxed mb-8">
                Our statistics aren't just numbers — they represent real students who walked into Bimz Beauty College with a dream and left with a career.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-8">
                <div>
                  <p className="text-3xl font-extrabold text-purple-300">2</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60 mt-1">Intakes per year</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-purple-300">100%</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60 mt-1">Practical learning</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Staff & Capacity Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-purple-700 uppercase tracking-widest text-xs font-semibold mb-4">Team & Capacity</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Staff & campus facilities</h2>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">

              <div className="p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-purple-700 pb-3 inline-block">Our Staff</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex justify-between"><span>Senior Tutors</span><span className="font-bold text-gray-900">5</span></li>
                  <li className="flex justify-between"><span>Assistant Tutors</span><span className="font-bold text-gray-900">4</span></li>
                  <li className="flex justify-between"><span>Administration</span><span className="font-bold text-gray-900">3</span></li>
                  <li className="flex justify-between"><span>Support Staff</span><span className="font-bold text-gray-900">3</span></li>
                </ul>
              </div>

              <div className="p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-purple-900 pb-3 inline-block">Our Facilities</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex justify-between"><span>Salon Stations</span><span className="font-bold text-gray-900">20</span></li>
                  <li className="flex justify-between"><span>Nail Stations</span><span className="font-bold text-gray-900">10</span></li>
                  <li className="flex justify-between"><span>Barbering Chairs</span><span className="font-bold text-gray-900">8</span></li>
                  <li className="flex justify-between"><span>Classroom Capacity</span><span className="font-bold text-gray-900">45</span></li>
                </ul>
              </div>

              <div className="p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-purple-700 pb-3 inline-block">Student Capacity</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex justify-between"><span>Per Class</span><span className="font-bold text-gray-900">20</span></li>
                  <li className="flex justify-between"><span>Morning Shift</span><span className="font-bold text-gray-900">40</span></li>
                  <li className="flex justify-between"><span>Afternoon Shift</span><span className="font-bold text-gray-900">30</span></li>
                  <li className="flex justify-between"><span>Total Active</span><span className="font-bold text-gray-900">150+</span></li>
                </ul>
              </div>

            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Figures are updated quarterly and reflect current campus operations.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Statistics;