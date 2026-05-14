import { SectionHeader } from './shared';
import { Scissors, Palette, Sparkles, Smile, Droplets, Wind, Focus, Heart } from 'lucide-react';

export function Services() {
  const services = [
    { title: 'Hair Styling', price: 'RS 2000', icon: Scissors, desc: 'Professional cuts, blow-dry, and elegant up-dos.' },
    { title: 'Hair Coloring', price: 'RS 4500', icon: Palette, desc: 'Balayage, ombré, and vibrant color transformations.' },
    { title: 'Bridal Makeup', price: 'RS 25000', icon: Sparkles, desc: 'Flawless makeup ensuring you look your best on your big day.' },
    { title: 'Party Makeup', price: 'RS 8000', icon: Smile, desc: 'Glamorous and subtle looks tailored to your occasion.' },
    { title: 'Facials', price: 'RS 3500', icon: Droplets, desc: 'Rejuvenating therapies for healthy, glowing skin.' },
    { title: 'Mani & Pedi', price: 'RS 2500', icon: Wind, desc: 'Relaxing spa treatments for your hands and feet.' },
    { title: 'Keratin & Protein', price: 'RS 12000', icon: Focus, desc: 'Deep nourishment treatments for smooth and silky hair.' },
    { title: 'Nail Art & Spa', price: 'RS 1500', icon: Heart, desc: 'Custom designs and complete nail care.' },
  ];

  return (
    <section id="services" className="py-24 bg-blush-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Services" subtitle="Discover our range of premium beauty treatments, performed by expert professionals." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="bg-white p-8 group hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-blush-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-16 h-16 text-gold-500" />
                </div>
                
                <Icon className="w-8 h-8 text-gold-500 mb-6" />
                <h3 className="font-heading text-xl font-medium text-nude-900 mb-2">{svc.title}</h3>
                <p className="text-nude-800/70 text-sm mb-6 min-h-[40px] italic">{svc.desc}</p>
                
                <div className="pt-6 border-t border-nude-100 flex items-center justify-between">
                  <span className="text-gold-600 font-semibold text-sm">Starts from {svc.price}</span>
                </div>
                
                {/* Book Now Button Overlay */}
                <div className="mt-6">
                  <a href="#contact" className="inline-block border border-nude-900 text-nude-900 hover:bg-nude-900 hover:text-white px-4 py-2 uppercase tracking-wide text-xs transition-colors">
                    Book Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
