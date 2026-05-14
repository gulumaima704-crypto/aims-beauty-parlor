'use client';

import { motion } from 'motion/react';
import { SectionHeader } from './shared';

export function SocialProof() {
  const stats = [
    { value: "5,000+", label: "Happy Clients" },
    { value: "1,200+", label: "Bridal Looks" },
    { value: "7+", label: "Years Experience" },
    { value: "10+", label: "Expert Stylists" },
  ];

  return (
    <section className="bg-nude-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000')] bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4"
            >
              <div className="font-heading text-4xl md:text-5xl text-gold-400 mb-2">{stat.value}</div>
              <div className="text-sm tracking-widest uppercase text-nude-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
