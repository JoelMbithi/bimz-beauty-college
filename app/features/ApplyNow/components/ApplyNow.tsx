'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const ApplyNow = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle actual form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="bg-[#FDFBF7] text-gray-900 font-sans flex flex-col min-h-screen justify-center items-center px-4 py-24 text-center">
        <div className="bg-white p-12 shadow-md border-t-4 border-pink-500 max-w-lg w-full">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Application Received</h1>
          <p className="text-gray-600 font-normal leading-relaxed mb-8">
            Thank you for applying to Bimz Beauty College. Our admissions team will contact you within 24 hours to confirm your slot and discuss the next steps.
          </p>
          <Link href="/" className="inline-block bg-purple-900 text-white font-bold py-3 px-8 hover:bg-purple-800 transition-colors">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#FDFBF7] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden bg-purple-950">
        <div className="absolute inset-0 opacity-80" aria-hidden="true">
          <img src="/Hero/college.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink-300 uppercase tracking-[0.3em] text-xs font-bold mb-6">Admissions Open</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight">
            Begin Your Journey
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Fill out the form below to secure your place at our NITA-accredited institution in Embakasi.
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12">
          
          {/* Form Content */}
          <div className="md:col-span-8 bg-white p-8 md:p-12 shadow-md border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-6">Application Form</h2>
            <p className="text-gray-500 font-normal mb-8 pt-4">Fields marked with * are required.</p>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Group 1: Personal Details */}
              <fieldset>
                <legend className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-4">1. Personal Details</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" />
                  </div>
                </div>
              </fieldset>

              {/* Group 2: Program Selection */}
              <fieldset>
                <legend className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-4">2. Course Selection</legend>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">Select Program *</label>
                    <select id="course" name="course" required defaultValue="" className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors bg-white">
                      <option value="" disabled>Choose a course</option>
                      <option value="diploma-beauty">Diploma in Beauty Therapy (6 Months)</option>
                      <option value="cert-beauty">Certificate in Beauty Therapy (6 Months)</option>
                      <option value="diploma-hair">Diploma in Hair Dressing (6 Months)</option>
                      <option value="diploma-nail">Diploma in Nail Technology (6 Months)</option>
                      <option value="cert-barber">Certificate in Barbering (4 Months)</option>
                      <option value="diploma-cosmetology">Diploma in Cosmetology (12 Months)</option>
                    </select>
                  </div>
                  
                  {/* New Intake Selection */}
                  <div>
                    <label htmlFor="intake" className="block text-sm font-semibold text-gray-700 mb-2">Intake Month *</label>
                    <select id="intake" name="intake" required defaultValue="" className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors bg-white">
                      <option value="" disabled>Select intake</option>
                      <option value="may">May Intake</option>
                      <option value="september">September Intake</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Start Date *</label>
                    <input type="date" id="startDate" name="startDate" required className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" />
                  </div>
                </div>
              </fieldset>

              {/* Group 3: Education Background */}
              <fieldset>
                <legend className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-4">3. Education Background</legend>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">Highest Level of Education *</label>
                    <select id="education" name="education" required defaultValue="" className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors bg-white">
                      <option value="" disabled>Select one</option>
                      <option value="kcse">KCSE / Secondary School</option>
                      <option value="certificate">Certificate</option>
                      <option value="diploma">Diploma</option>
                      <option value="degree">Degree</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Group 4: Emergency Contact */}
              <fieldset>
                <legend className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-4">4. Emergency Contact</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="emergencyName" className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Name *</label>
                    <input type="text" id="emergencyName" name="emergencyName" required className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="emergencyPhone" className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Phone *</label>
                    <input type="tel" id="emergencyPhone" name="emergencyPhone" required className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="emergencyRelation" className="block text-sm font-semibold text-gray-700 mb-2">Relationship *</label>
                    <input type="text" id="emergencyRelation" name="emergencyRelation" required placeholder="e.g., Mother, Father, Guardian" className="w-full px-4 py-3 border border-gray-300 focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none transition-colors" />
                  </div>
                </div>
              </fieldset>

              {/* Group 5: Declaration */}
              <fieldset>
                <legend className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-4">5. Declaration</legend>
                <div className="flex items-start gap-4">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-purple-900 border-gray-300 focus:ring-purple-900" />
                  <label htmlFor="consent" className="text-sm font-normal text-gray-600 leading-relaxed">
                    I certify that the information provided is accurate and complete to the best of my knowledge. I understand that providing false information may result in the cancellation of my application. *
                  </label>
                </div>
              </fieldset>

              <div className="pt-8 border-t border-gray-200">
                <button 
                  type="submit" 
                  className="w-full bg-pink-500 text-white font-bold py-4 px-8 hover:bg-pink-400 transition-colors uppercase tracking-widest text-sm"
                >
                  Submit Application
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  By submitting, you agree to our privacy policy. We handle your data securely and only for admissions purposes.
                </p>
              </div>
            </form>
          </div>

          {/* Side Panel - Support & Help */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-purple-900 p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Need Help Applying?</h3>
              <p className="text-white/80 font-normal mb-8 text-sm leading-relaxed">
                Our admissions team is available to guide you through the process and answer any questions you may have.
              </p>
              <a href="tel:0713540556" className="block text-lg font-semibold mb-2 hover:text-pink-300 transition-colors">0713 540 556</a>
              <a href="tel:0798435222" className="block text-lg font-semibold mb-8 hover:text-pink-300 transition-colors">0798 435 222</a>
              <Link href="/about" className="inline-block border-2 border-white/30 hover:border-white transition-colors py-2 px-6 text-sm font-semibold">
                Visit Our Campus
              </Link>
            </div>
            
            <div className="bg-white p-8 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-4 text-sm text-gray-600 font-normal">
                <li className="flex gap-3 items-start">
                  <span className="bg-purple-100 text-purple-900 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold">1</span>
                  Submit your application online
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-purple-100 text-purple-900 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold">2</span>
                  Receive a call within 24 hours
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-purple-100 text-purple-900 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold">3</span>
                  Visit campus for confirmation
                </li>
                <li className="flex gap-3 items-start pt-2 border-t border-gray-200">
                  <span className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold">!</span>
                  <span className="text-gray-700 font-medium">We have May and September intakes available.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplyNow;
