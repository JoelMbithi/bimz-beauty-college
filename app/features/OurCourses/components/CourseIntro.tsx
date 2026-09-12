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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    title: 'Moisturizing treatment',
    description:
      'The practical training aspect of this course is hands-on practicing of a wide range of services on the public at the Institute.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    ),
  },
  {
    title: 'Coloring',
    description:
      'Transform your creativity into stunning color combinations with our comprehensive coloring techniques and modern application methods.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
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