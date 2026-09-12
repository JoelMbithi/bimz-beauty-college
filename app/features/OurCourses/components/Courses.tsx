import React from 'react';
import Link from 'next/link';
import { courses } from '@/app/features/OurCourses/data/Course';

const Courses = () => {
  return (
    <main className="bg-white">
      {/* Intro - Editorial Hero */}
      <section className="relative py-28 md:py-40 px-4 md:px-8 lg:px-16 overflow-hidden bg-purple-900">
        <div className="absolute inset-0 opacity-100" aria-hidden="true">
          <img src="/Hero/Admissions.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink-600 uppercase tracking-[0.3em] text-xs font-semibold mb-6">Professional programmes</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 ">
            Master the art of <br />
            <span className=" text-pink-600">beauty &amp; style</span>
          </h1>
          <p className="text-[#FDFBF7] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Immerse yourself in industry-driven curricula designed to elevate your craft. Our programmes blend
            foundational theory with intensive, real-client practical experience.
          </p>
        </div>
      </section>

      {/* Courses - Editorial Mosaic Layout */}
      <section id="courses" className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-3">Our disciplines</h2>
              <p className="text-gray-500 font-light max-w-xl">
                Explore our specialized tracks. Each course is structured to build professional competence and
                artistry.
              </p>
            </div>
            <Link
              href="/ApplyNow"
              className="hidden md:inline-block text-sm font-semibold text-purple-900 border-b-2 border-pink-300 hover:border-pink-500 transition-colors pb-1 mt-4 md:mt-0"
            >
              Begin your application
            </Link>
          </div>

          {/* Alternating Editorial Rows */}
          <div className="space-y-28 md:space-y-40">
            {courses.map((course, index) => {
              const reversed = index % 2 === 1;
              const [mainImage, ...otherImages] = course.images;
              const entryLevel = course.levels[0];

              return (
                <div key={course.id} className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                  {/* Mosaic Image Grid */}
                  <div className={`md:col-span-7 relative ${reversed ? 'md:order-2' : ''}`}>
                    {/* Main Feature Image */}
                    <div className="overflow-hidden shadow-xl">
                      <img
                        src={mainImage}
                        alt={course.title}
                        className="w-full h-[450px] md:h-[600px] object-cover"
                      />
                    </div>

                    {/* Grid of secondary images creating a cascading mosaic */}
                    {otherImages.length > 0 && (
                      <div className="absolute -bottom-16 left-0 right-0 grid grid-cols-3 gap-4 md:gap-6">
                        {otherImages.slice(0, 3).map((img, i) => (
                          <div
                            key={img}
                            className={`overflow-hidden shadow-md border-4 border-white bg-white
                              ${i === 0 ? 'translate-y-[-20px]' : ''}
                              ${i === 1 ? 'translate-y-[-40px]' : ''}
                              ${i === 2 ? 'translate-y-[-60px]' : ''}
                            `}
                          >
                            <img src={img} alt="" className="w-full h-32 md:h-48 object-cover" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Overlapping Badge */}
                    <div
                      className={`absolute top-6 ${reversed ? 'right-6' : 'left-6'} bg-white px-6 py-4 shadow-md z-10`}
                    >
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                      <p className="text-lg font-semibold text-purple-900">{entryLevel.duration}</p>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`md:col-span-5 pt-24 md:pt-0 ${reversed ? 'md:order-1' : ''}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-800 mb-3">
                      {entryLevel.name} programme
                    </p>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 font-light leading-relaxed mb-8">{course.description}</p>

                    {/* Structured Fee Info */}
                    <div className="bg-white border-l-2 border-purple-800 p-6 mb-8 shadow-sm">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Tuition</p>
                      <p className="text-2xl font-light text-gray-900">
                        {entryLevel.fee} <span className="text-sm text-gray-500">/ month</span>
                      </p>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex items-center gap-3 text-sm font-semibold text-purple-900 hover:text-purple-700 transition-colors group"
                    >
                      View full curriculum &amp; units
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 px-4 md:px-8 lg:px-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Course brochures</h2>
          <p className="text-gray-500 mb-8">
            Fee structure, admission requirements, and a full unit breakdown for each programme.
          </p>

          <ul className="divide-y divide-gray-100">
            {downloads.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  download
                  className="group flex items-center gap-4 py-4"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-purple-800 shrink-0 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="flex-1 text-gray-800 group-hover:text-purple-900 transition-colors">
                    {item.label}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-purple-800 group-hover:text-purple-900 transition-colors shrink-0">
                    Download
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

     
    </main>
  );
};

const downloads = [
  { label: 'Fees structure & admission requirements', href: '/downloads/fees-structure.pdf' },
  { label: 'Beauty therapy course outline', href: '/downloads/beauty-therapy-course-outline.pdf' },
  { label: 'Hair dressing course outline', href: '/downloads/hair-dressing-course-outline.pdf' },
  { label: 'Cosmetology course outline', href: '/downloads/cosmetology-course-outline.pdf' },
  { label: 'Nail technology course outline', href: '/downloads/nail-technology-course-outline.pdf' },
  { label: 'Barbering course outline', href: '/downloads/barbering-course-outline.pdf' },
];

export default Courses;