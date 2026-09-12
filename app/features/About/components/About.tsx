import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden bg-purple-950">
        <div className="absolute inset-0 opacity-90" aria-hidden="true">
          <img src="/Hero/AboutUS.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink-500 uppercase tracking-[0.3em] text-xs font-bold mb-6">Since our founding</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight">
            We are Professionals.
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            A NITA-accredited institution dedicated to nurturing the next generation of beauty experts in the heart of Embakasi.
          </p>
        </div>
      </section>

      {/* Intro & Slogan Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start border-b border-gray-200 pb-20">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-gray-900">
              Beauty is our business. 
              <br />
              Empowerment is our mission.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-gray-600 font-normal leading-relaxed">
            <p>
              Located at the bustling <strong className="font-semibold text-gray-900">Fedha Embakasi Telaviv connection stage</strong>, 
              Bimz Beauty College stands as a beacon for those passionate about the art of beauty. 
              We offer both <strong className="font-semibold text-gray-900">Diploma and Certificate levels</strong>, 
              with programs ranging from 12 months to an intensive 8 months, allowing you to choose a pace that fits your ambitions.
            </p>
            <p>
              Our philosophy is simple: To equip students with the skills, knowledge, creativity, and confidence 
              to succeed in the beauty industry. We don't just teach techniques; we mentor artists.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Section */}
      <section className="py-20 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-white p-10  border-t-4 border-pink-500">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-4">Our Mission</p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nurturing Talent</h3>
            <p className="text-gray-600 font-normal leading-relaxed">
              To equip students with the skills, knowledge, creativity, and confidence to succeed in the beauty industry.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-10  border-t-4 border-purple-800">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-800 mb-4">Our Vision</p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Leading the Standard</h3>
            <p className="text-gray-600 font-normal leading-relaxed">
              To become a leading beauty school known for excellence, innovation, and producing world-class beauty professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile / Core Values - Editorial Style */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-pink-600 uppercase tracking-[0.3em] text-xs font-bold mb-4">Company Profile</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-gray-500 font-normal leading-relaxed">
              These aren't just words on a wall. They are the daily principles that guide our curriculum, 
              our interactions, and the standards we hold our graduates to.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { title: 'Excellence', color: 'text-purple-900' },
              { title: 'Professionalism', color: 'text-pink-600' },
              { title: 'Creativity', color: 'text-purple-900' },
              { title: 'Empowerment', color: 'text-pink-600' },
              { title: 'Integrity', color: 'text-purple-900' },
              { title: 'Passion', color: 'text-pink-600' },
              { title: 'Innovation', color: 'text-purple-900' },
              { title: 'Respect', color: 'text-pink-600' },
              { title: 'Continuous Learning', color: 'text-purple-900' },
              { title: 'Customer Satisfaction', color: 'text-pink-600' },
            ].map((value, i) => (
              <div key={i} className="py-8 px-4 border border-gray-200 hover:border-pink-500 transition-colors bg-[#FDFBF7]">
                <p className={`text-sm font-bold uppercase tracking-wider ${value.color}`}>
                  {value.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Location CTA */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-purple-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto">
          <p className="text-pink-300 uppercase tracking-[0.3em] text-xs font-bold mb-6">Visit Our Campus</p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">Fedha Embakasi Telaviv Connection Stage</h2>
          <p className="text-white/80 font-normal mb-10">
            We are accredited by NITA and ready to help you start your journey today. 
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a href="tel:0713540556" className="text-xl font-semibold border-b-2 border-pink-300 hover:border-white transition-colors pb-1">
              0713 540 556
            </a>
            <span className="text-white/40 hidden md:block">|</span>
            <a href="tel:0798435222" className="text-xl font-semibold border-b-2 border-pink-300 hover:border-white transition-colors pb-1">
              0798 435 222
            </a>
          </div>

          <Link
            href="/ApplyNow"
            className="inline-block bg-white text-purple-900 font-bold py-4 px-12 hover:bg-pink-600  hover:text-white transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;