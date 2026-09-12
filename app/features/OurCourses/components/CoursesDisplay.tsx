import React from 'react';
import Link from 'next/link';
import { courses } from '@/app/features/OurCourses/data/Course';

const OurCourses = () => {
  return (
    <section aria-labelledby="courses-heading" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div id='course' className="flex flex-col items-center text-center mb-12">
          <h2 id="courses-heading" className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Our courses
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Six practical programmes at Bimz Beaty College, priced to be accessible without cutting
            corners on quality.
          </p>
        </div>

        {/* Courses grid */}
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {courses.map((course) => {
            const entryLevel = course.levels[0];
            return (
              <div key={course.id} className="flex flex-col">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img src={course.images[0]} alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  From {entryLevel.duration} &middot; {entryLevel.fee}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{course.description}</p>
                <Link
                  href={`/courses/${course.slug}`}
                  className="text-purple-800 font-semibold text-sm border-b-2 border-purple-800 self-start pb-0.5 hover:text-purple-900 hover:border-purple-900 transition-colors"
                >
                  View details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;