import React from 'react';
import Link from 'next/link';
import { highlights, type Course } from '../data/Course';

const CourseDetails = ({ course }: { course: Course }) => {
  const [mainImage, ...otherImages] = course.images;

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-8">
        <div className="flex flex-row justify-between">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-purple-800 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to courses
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-purple-800 transition-colors mb-6"
          >
            All courses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Gallery - asymmetric: one large feature image, thumbnails stacked beside it */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-4">
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[340px] md:h-[460px]">
          <div className="col-span-3 row-span-2 md:col-span-2 overflow-hidden rounded-lg">
            <img src={mainImage} alt={course.title} className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block col-span-1 row-span-1 overflow-hidden rounded-lg">
            {otherImages[0] && <img src={otherImages[0]} alt="" className="w-full h-full object-cover" />}
          </div>
          <div className="hidden md:block col-span-1 row-span-1 overflow-hidden rounded-lg">
            {otherImages[1] && <img src={otherImages[1]} alt="" className="w-full h-full object-cover" />}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{course.title}</h1>
            <p className="text-gray-700 leading-relaxed mb-10">{course.description}</p>

            {/* Levels as a timeline, not a stacked card list */}
            <h2 className="text-lg font-semibold text-gray-900 mb-6">How the course is structured</h2>
            <div className="relative pl-8 border-l-2 border-purple-100 mb-10">
              {course.levels.map((level) => (
                <div key={level.name} className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[37px] top-1 w-3.5 h-3.5 rounded-full bg-purple-800 ring-4 ring-white" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-gray-900">{level.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {level.duration} &middot; {level.fee}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{level.focus}</p>
                  {level.units.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-gray-700">
                      {level.units.map((unit) => (
                        <li key={unit} className="flex gap-2">
                          <span className="text-purple-800">&bull;</span>
                          {unit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {course.note && <p className="text-sm text-gray-500 italic mb-8">{course.note}</p>}

            <h2 className="text-lg font-semibold text-gray-900 mb-3">Why train with us</h2>
            <ul className="space-y-2 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                  <svg className="w-4 h-4 text-purple-800 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Enroll sidebar */}
          <div className="md:col-span-1">
            <div className="border border-gray-200 rounded-lg p-6 md:sticky md:top-8">
              <p className="text-sm text-gray-500 mb-3">Course fees</p>
              {course.levels.map((level) => (
                <div key={level.name} className="mb-4 last:mb-6">
                  <p className="text-gray-900 font-semibold">{level.name}</p>
                  <p className="text-gray-500 text-sm">{level.duration}</p>
                  <p className="text-purple-800 font-bold">{level.fee}</p>
                </div>
              ))}
              <a
                href="/ApplyNow"
                className="block w-full text-center bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Enroll now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetails;