'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would connect your form to an email service or backend
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="relative py-32 md:py-44 px-4 md:px-8 lg:px-16 overflow-hidden bg-purple-950">
        <div className="absolute inset-0 opacity-100" aria-hidden="true">
          <img src="/Hero/college.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink-300 uppercase tracking-[0.35em] text-xs font-bold mb-6">Get in touch</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            We are here to answer your questions about courses, intakes, and admissions. 
            Reach out to us or visit our campus in Embakasi.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
    

      {/* Form & Map / Location Details */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Send us a Message
            </h2>
            <p className="text-gray-600 font-normal mb-10">
              Fill out the form below and our admissions team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-[#FDFBF7] border-l-4 border-pink-500 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-gray-600">
                  Thank you for contacting Bimz Beauty College. We will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject / Course of Interest *</label>
                  <select 
                    required 
                    defaultValue="" 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors bg-white"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="beauty">Beauty Therapy</option>
                    <option value="hair">Hair Dressing</option>
                    <option value="nails">Nail Technology</option>
                    <option value="barber">Barbering</option>
                    <option value="cosmetology">Cosmetology</option>
                    <option value="admissions">Admissions / Fees Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                  <textarea 
                    rows={5} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-purple-950 text-white font-bold py-4 px-10 hover:bg-purple-900 transition-colors uppercase tracking-widest text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Map / Location Details */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Find Us Here
            </h2>
            <p className="text-gray-600 font-normal mb-8">
              We are conveniently located at the Telaviv Connection Stage in Fedha, Embakasi.
            </p>

            {/* Interactive Google Map Embeds using Real Coordinates */}
            <div className="relative flex-1 min-h-[400px] border border-gray-200 overflow-hidden shadow-sm">
              <iframe
                title="Bimz Beauty College Location"
                src="https://www.google.com/maps?q=-1.31567,36.8985&z=15&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Address & Hours Box */}
            <div className="bg-[#FDFBF7] p-8 border-l-4 border-pink-500 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600 font-normal">
                <p>Monday &ndash; Saturday: 8:00 AM &ndash; 8:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
};

export default Contact;