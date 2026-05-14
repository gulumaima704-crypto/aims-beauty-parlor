'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-nude-900 text-nude-50 text-sm">
        <div className="flex items-center space-x-6">
          <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-gold-400" /> Karachi, Pakistan</span>
          <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-gold-400" /> +92 333 9368111</span>
        </div>
        <div>Opening Hours: Mon - Sun, 11:00 AM - 10:00 PM</div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-nude-900">
              Aims <span className="text-gold-500 font-normal italic">Beauty</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-nude-800 hover:text-gold-500 transition-colors uppercase tracking-widest text-xs font-semibold"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-nude-900 text-white px-6 py-3 rounded-none hover:bg-gold-500 transition-colors uppercase tracking-widest text-xs font-semibold"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-nude-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-nude-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-nude-800 block hover:text-gold-500 transition-colors uppercase tracking-widest text-sm font-semibold"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-nude-900 text-white px-6 py-3 text-center block mt-4 rounded-none hover:bg-gold-500 transition-colors uppercase tracking-widest text-sm font-semibold"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
