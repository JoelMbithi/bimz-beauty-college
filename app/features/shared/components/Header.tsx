'use client'
import React, { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/About' },
  { label: 'Courses', href: '/courses' },
  { label: 'Study with us', href: '/StudyWith' },
  { label: 'News & events', href: '/NewsEvents' },
  { label: 'Gallery', href: '/Gallery' },
  { label: 'Contact us', href: '/Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-pink-600 text-white text-sm">
        <div className="max-w-8xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Mon&ndash;Sat, 8am&ndash;8pm
            </span>
            <span className="w-px h-4 bg-pink-300" aria-hidden="true" />
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Fedha, Embakasi &mdash; Tel Aviv Connection Stage, Nairobi
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a href="tel:+254700000000" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +254 713 540 556  <span className="w-px h-4 bg-pink-300" aria-hidden="true" />+254 7984 35222
            </a>
            <span className="w-px h-4 bg-pink-300" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <a href="#" aria-label="EduHub on Facebook" className="hover:text-pink-200 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="EduHub on X" className="hover:text-purple-200 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.218-6.096 13.994 13.994 0 002.126-7.6c0-.13-.003-.26-.01-.39a9.86 9.86 0 002.346-2.435z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/images/Bimz Logo.jpg" alt="Bimz Beauty College Logo" className="h-10 w-auto" /> 
           
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-purple-700 transition-colors border-b-2 border-transparent hover:border-purple-700 pb-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/ApplyNow"
            className="hidden lg:inline-block bg-purple-700 hover:bg-purple-700 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-lg"
          >
            Apply now
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-700 hover:bg-gray-50 transition-colors px-2 py-2.5 rounded-md text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/ApplyNow"
                className="mt-2 bg-purple-700 hover:bg-purple-700 transition-colors text-white text-sm font-medium text-center px-5 py-2.5 rounded-lg"
              >
                Apply now
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-3 pt-3 border-t border-gray-100 px-2">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+254700000000">+254 713 540 556</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;