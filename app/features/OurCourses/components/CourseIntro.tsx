import React from 'react';

interface CourseCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const courses: CourseCard[] = [
  {
    title: 'Hairdressing',
    description:
      'Bimz Beaty College is driven by a passion to relay the secrets of hairdressing to new entrants to the industry.',
    icon: (
      <>
        <circle cx="6" cy="6" r="2.5" strokeWidth={1.5} />
        <circle cx="6" cy="18" r="2.5" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 4L7.5 16.5M8.6 8.6L20 20" />
      </>
    ),
  },
  {
    title: 'Moisturizing treatment',
    description:
      'The practical training aspect of this course is hands-on practicing of a wide range of services on the public at the Institute.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21a7 7 0 007-7c0-3.866-3.582-8-7-12.5C8.582 6 5 10.134 5 14a7 7 0 007 7z"
      />
    ),
  },
  {
    title: 'Coloring',
    description:
      'Transform your creativity into stunning color combinations with our comprehensive coloring techniques and modern application methods.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      />
    ),
  },
];

const CourseIntro = () => {
  return (
    <section
      aria-labelledby="courses-heading"
      className="relative bg-pink-600 text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/Hero/Learning.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-800/90 to-purple-800/90" />
      </div>

      <h2 id="courses-heading" className="sr-only">
        Courses we offer
      </h2>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div key={course.title} className="flex flex-col items-center text-center">
            <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {course.icon}
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-sm">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseIntro;