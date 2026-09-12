'use client'
import React from 'react';
import Link from 'next/link';

const NewsEvents = () => {
  
  // Upcoming Events
  const events = [
    {
      date: '10',
      month: 'May',
      title: 'May Intake Open Day',
      time: '9:00 AM - 4:00 PM',
      location: 'Fedha Embakasi, Telaviv Connection Stage',
      description: 'Visit our campus for a free tour, practical demonstrations by our students, and instant enrollment for the May intake.',
    },
    {
      date: '25',
      month: 'Aug',
      title: 'Advanced Makeup Masterclass',
      time: '10:00 AM - 2:00 PM',
      location: 'Main Hall, Bimz Beauty College',
      description: 'A one-day intensive masterclass hosted by our top industry tutors. Limited seats available for Diploma students.',
    },
    {
      date: '01',
      month: 'Sep',
      title: 'September Intake Begins',
      time: '8:00 AM',
      location: 'All Departments',
      description: 'Classes for the September intake begin today. We are still accepting applications for Cosmetology, Beauty Therapy, and Nail Technology.',
    },
    {
      date: '30',
      month: 'Nov',
      title: 'Graduation & Awards Ceremony',
      time: '2:00 PM - 6:00 PM',
      location: 'Fedha, Embakasi',
      description: 'Celebrating our latest cohort of Certified and Diploma graduates. Family and friends are welcome to attend.',
    },
  ];

  // News Articles (Using a staggered layout with a featured article)
  const news = [
    {
      id: 1,
      category: 'Accreditation',
      title: 'Bimz Beauty College Renews NITA Accreditation',
      excerpt: 'We are proud to announce that our institution has passed the rigorous NITA audit, reaffirming our commitment to high-quality, nationally recognized beauty education.',
      image: '/NewsEvents/NITA.jpeg', 
      isFeatured: true,
    },
    {
      id: 2,
      category: 'Student Success',
      title: 'Grace W. lands top job at Nairobi Salon',
      excerpt: 'From zero experience to a thriving career! Read how Grace used her Diploma in Beauty Therapy to secure a position at a leading salon.',
      image: '/NewsEvents/SuccessStory.jpeg', 
      isFeatured: false,
    },
    {
      id: 3,
      category: 'Facilities',
      title: 'New Equipment Installed at Our Salon Floor',
      excerpt: 'We have just upgraded our on-campus salon with professional-grade manicure stations and advanced hair dryers to give our students real-world experience.',
      image: '/NewsEvents/Equipment.jpeg', 
      isFeatured: false,
    },
    {
      id: 4,
      category: 'Admissions',
      title: 'No Grade Required to Join September Intake',
      excerpt: 'Remember, we believe talent has no barriers. No grade is required to train with us! Secure your spot for September now.',
      image: '/NewsEvents/Admissions.jpeg', 
      isFeatured: false,
    },
  ];

  // Separate the featured article from the rest
  const featuredNews = news.find((n) => n.isFeatured);
  const secondaryNews = news.filter((n) => !n.isFeatured);

  return (
    <main className="bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="relative py-32 md:py-44 px-4 md:px-8 lg:px-16 overflow-hidden bg-purple-950">
        <div className="absolute inset-0 opacity-100" aria-hidden="true">
          <img src="/NewsEvents/EventHero.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink-300 uppercase tracking-[0.35em] text-xs font-bold mb-6">Stay Updated</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            News, Events & Announcements
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Follow the latest happenings, success stories, and upcoming activities at our Embakasi campus.
          </p>
        </div>
      </section>

      {/* Upcoming Events - Editorial Timeline */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8">
            <div>
              <p className="text-pink-600 uppercase tracking-[0.35em] text-xs font-bold mb-4">Mark your calendar</p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Upcoming Events</h2>
            </div>
            <p className="text-gray-500 font-normal md:text-right mt-4 md:mt-0">
              Join us at Fedha, Embakasi — Telaviv Connection Stage.
            </p>
          </div>

          {/* Timeline Rows */}
          <div className="space-y-0">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 items-start ${index > 0 ? 'border-t border-gray-200' : ''}`}
              >
                {/* Date Block */}
                <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-0 items-center md:items-start">
                  <p className="text-5xl md:text-7xl font-extrabold text-purple-950 leading-none tracking-tighter">
                    {event.date}
                  </p>
                  <p className="text-lg font-bold text-pink-600 uppercase tracking-widest mt-1">
                    {event.month}
                  </p>
                </div>

                {/* Event Content */}
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>

                  <p className="text-gray-600 font-normal leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News - Asymmetric Grid */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-pink-600 uppercase tracking-[0.35em] text-xs font-bold mb-4">From the campus</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Latest News</h2>
          </div>

          {/* Featured Article */}
          {featuredNews && (
            <Link href="#" className="block group mb-16">
              <div className="grid lg:grid-cols-2 gap-8 bg-[#FDFBF7] border border-gray-200 hover:border-purple-900 transition-colors">
                <div className="overflow-hidden">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-4">
                    {featuredNews.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-purple-900 transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 font-normal leading-relaxed mb-8">
                    {featuredNews.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-purple-900 border-b-2 border-pink-300 pb-1 w-fit">
                    Read full story
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Secondary Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryNews.map((article) => (
              <Link 
                key={article.id} 
                href="#" 
                className="group bg-white border border-gray-200 hover:border-purple-900 transition-colors"
              >
                <div className="overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-3">
                    {article.category}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-purple-900 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-normal leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto bg-purple-950 text-white p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Stay in the loop</h2>
            <p className="text-white/70 font-normal mb-10 max-w-xl mx-auto">
              Get alerts about upcoming intakes, open days, and exclusive short courses straight to your inbox.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 bg-white text-gray-900 placeholder-gray-400 outline-none border-2 border-transparent focus:border-pink-400 font-normal"
              />
              <button 
                type="submit" 
                className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-4 px-10 transition-colors uppercase tracking-widest text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white text-center border-t border-gray-200">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Want to be part of our next story?
        </h2>
        <p className="text-gray-600 font-normal text-lg mb-10">
          Secure your spot for the upcoming intake.
        </p>
        <Link
          href="/ApplyNow"
          className="inline-block bg-purple-950 text-white font-bold py-5 px-14 hover:bg-purple-900 transition-colors uppercase tracking-widest text-xs"
        >
          Apply Now
        </Link>
      </section>
    </main>
  );
};

export default NewsEvents;