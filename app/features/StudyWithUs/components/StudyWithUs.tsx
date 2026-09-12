import React from 'react';
import Link from 'next/link';

const StudyWithUs = () => {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-44 px-4 md:px-8 lg:px-16 overflow-hidden bg-purple-950">
        <div className="absolute inset-0 opacity-90" aria-hidden="true">
          <img src="/Hero/Learners.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink-300 uppercase tracking-[0.35em] text-xs font-bold mb-8">Nita Accredited Institution</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Practical Skills. Real Clients. Real Careers.
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Join us at Fedha Embakasi, Telaviv Connection Stage. No grade is required to start your journey with us.
          </p>
        </div>
      </section>

      {/* The Bimz Advantage */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-pink-600 uppercase tracking-[0.35em] text-xs font-bold mb-6">The Bimz College Advantage</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">Why Choose Us?</h2>
            <p className="text-lg text-gray-500 font-normal leading-relaxed">
              We don't just teach beauty, we prepare you for a thriving career. Here is what makes our training stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 shadow-md border-t-4 border-pink-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hands-On, Real-Client Training</h3>
              <p className="text-gray-600 font-normal leading-relaxed">
                We don't just teach theory. Our students work on real clients in our on-campus salon, building confidence and practical salon skills before they even graduate.
              </p>
            </div>
            
            <div className="bg-white p-10 shadow-md border-t-4 border-purple-800">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry-Experienced Tutors</h3>
              <p className="text-gray-600 font-normal leading-relaxed">
                Our teachers aren't just academics, they are working professionals who mentor you on the latest styles, trends, and techniques in the beauty market.
              </p>
            </div>

            <div className="bg-white p-10 shadow-md border-t-4 border-purple-800">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NITA Accredited</h3>
              <p className="text-gray-600 font-normal leading-relaxed">
                Our programs are nationally recognized, giving your certificate true value and opening doors to both local and international career opportunities.
              </p>
            </div>

            <div className="bg-white p-10 shadow-md border-t-4 border-pink-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible & Open Admissions</h3>
              <p className="text-gray-600 font-normal leading-relaxed">
                We believe talent has no barriers. <strong className="font-semibold text-gray-900">No grade is required to train with us.</strong> We have flexible May and September intakes so you can start at a time that suits your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Journey */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-pink-600 uppercase tracking-[0.35em] text-xs font-bold mb-6">Admissions Journey</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">How to Apply</h2>
            <p className="text-lg text-gray-500 font-normal leading-relaxed">
              Getting started is simple and stress-free. Follow these three easy steps to secure your spot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 border border-gray-200 hover:border-purple-300 transition-colors bg-[#FDFBF7]">
              <div className="w-16 h-16 bg-purple-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Submit Application</h3>
              <p className="text-gray-600 font-normal leading-relaxed">Fill out our simple online application form. It takes less than 5 minutes.</p>
            </div>

            <div className="text-center p-10 border border-gray-200 hover:border-purple-300 transition-colors bg-[#FDFBF7]">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Receive a Call Back</h3>
              <p className="text-gray-600 font-normal leading-relaxed">Our admissions team will call you within 24 hours to discuss your chosen course and answer any questions.</p>
            </div>

            <div className="text-center p-10 border border-gray-200 hover:border-purple-300 transition-colors bg-[#FDFBF7]">
              <div className="w-16 h-16 bg-purple-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Campus & Enroll</h3>
              <p className="text-gray-600 font-normal leading-relaxed">Visit us at Fedha Embakasi, Telaviv Connection Stage, to confirm your slot, pay the admission fee, and get fitted for your uniform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Requirements */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-pink-600 uppercase tracking-[0.35em] text-xs font-bold mb-6">Transparent Pricing</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">Fees & Requirements</h2>
            <p className="text-lg text-gray-500 font-normal leading-relaxed">We have a simple, transparent fee structure. Everything you need is listed below.</p>
          </div>

          <div className="bg-white shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-purple-900 text-white px-8 py-4">
              <h3 className="text-xl font-bold">Admission Requirements</h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-700 font-medium">Admission fee</span>
                <span className="font-bold text-gray-900">Kshs 2,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-700 font-medium">Uniform</span>
                <span className="font-bold text-gray-900">Kshs 2,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-700 font-medium">Student ID</span>
                <span className="font-bold text-gray-900">Kshs 500</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-700 font-medium">Apron</span>
                <span className="font-bold text-gray-900">Kshs 500</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-700 font-medium">Internal Exams</span>
                <span className="font-bold text-gray-900">Kshs 7,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-700 font-medium">Bonus</span>
                <span className="font-bold text-gray-900">Free Computer Training</span>
              </div>
            </div>
            
            <div className="bg-[#FDFBF7] p-8 border-t border-gray-200">
              <p className="text-gray-600 font-normal leading-relaxed text-sm">
                <strong className="font-bold text-gray-900">Items included:</strong> One ream of photo paper, two spring files, two counter books, three quire notes, black closed shoes, and black/white sweaters. We also have qualified and well-trained tutors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-pink-600 uppercase tracking-[0.35em] text-xs font-bold mb-6">Success Stories</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">What Our Students Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FDFBF7] p-10 border border-gray-200">
              <p className="text-gray-600 font-normal leading-relaxed mb-6 text-lg">
                "I joined Bimz with zero experience. The teachers took their time with me, and by the time I was doing my final exams, I had a full client base at the campus salon. I now work at a top salon in Nairobi."
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900">Grace W.</p>
                <p className="text-sm text-gray-500 font-normal">Diploma in Beauty Therapy (Graduate)</p>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-10 border border-gray-200">
              <p className="text-gray-600 font-normal leading-relaxed mb-6 text-lg">
                "The location in Embakasi is perfect for me. I love that I didn't need high grades to join. The practical classes on braiding and cornrows are my favorite, we learn so fast!"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900">Faith K.</p>
                <p className="text-sm text-gray-500 font-normal">Certificate in Hair Dressing (Current Student)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-pink-600 uppercase tracking-[0.35em] text-xs font-bold mb-6">Have Questions?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 border-l-4 border-pink-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need a KCSE certificate to join?</h3>
              <p className="text-gray-600 font-normal leading-relaxed">No! We pride ourselves on being accessible. No grade is required to train with us.</p>
            </div>
            
            <div className="bg-white p-8 border-l-4 border-purple-800 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">When are the intakes?</h3>
              <p className="text-gray-600 font-normal leading-relaxed">We have two main intakes: May and September. However, we advise applying early to secure your spot.</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-purple-800 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is the institution accredited?</h3>
              <p className="text-gray-600 font-normal leading-relaxed">Yes, Bimz Beauty College is a certified NITA-accredited institution.</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-pink-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where exactly are you located?</h3>
              <p className="text-gray-600 font-normal leading-relaxed">We are located at Fedha Embakasi, Telaviv Connection Stage, Nairobi.</p>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
};

export default StudyWithUs;