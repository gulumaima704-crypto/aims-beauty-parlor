'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000"
          alt="Luxury Salon Background"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Elegant overlay to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-nude-900/80 via-nude-900/60 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl text-left"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block px-4 py-1 border border-gold-400 text-gold-300 text-sm tracking-[0.3em] uppercase mb-6"
          >
            Aims Beauty Salon
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight mb-6">
            Reveal Your <br />
            <span className="text-gold-400 italic">Best Beauty</span>
          </h1>
          
          <p className="text-lg md:text-xl text-nude-100 mb-10 leading-relaxed font-light max-w-lg">
            Premium salon services designed to make you feel confident, elegant, and radiant. Experience beauty, redefined.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 uppercase tracking-widest text-sm text-center transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-sm text-center transition-all duration-300 transform hover:-translate-y-1"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full border border-gold-500/30 -z-0 opacity-50 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-40 right-1/4 w-16 h-16 rounded-full bg-blush-400/20 blur-xl -z-0 hidden md:block"
      />
    </section>
  );
}
