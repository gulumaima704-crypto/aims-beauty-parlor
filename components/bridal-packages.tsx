import { SectionHeader } from './shared';
import { Check } from 'lucide-react';

export function BridalPackages() {
  const packages = [
    {
      name: "Silver Bridal",
      price: "RS 45,000",
      featured: false,
      features: ["Bridal Makeup (Valima/Mehndi)", "Basic Hair Styling", "Nail Polish Application", "Dupatta Setting", "Jewelry Setting"]
    },
    {
      name: "Gold Bridal",
      price: "RS 75,000",
      featured: true,
      features: ["Signature Bridal Makeup", "Advanced Hair Styling & Extensions", "Pre-Bridal Facial", "Manicure & Pedicure", "Premium Lash & Nail Art", "Dupatta & Jewelry Setting"]
    },
    {
      name: "Royal Bridal",
      price: "RS 120,000",
      featured: false,
      features: ["HD/Airbrush Bridal Makeup", "Luxury Pre-Bridal Treatment", "HydraFacial 2 Days Prior", "Full Body Waxing", "Premium Hair Coloring", "Exclusive Suite Access"]
    }
  ];

  return (
    <section id="bridal" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Bridal Packages" subtitle="Step into your new life with unparalleled elegance. Choose from our crafted bridal packages." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, i) => (
            <div key={i} className={`p-8 border ${pkg.featured ? 'border-gold-500 bg-gold-50/30' : 'border-nude-200 bg-nude-50'} relative transition-all duration-300 hover:shadow-xl`}>
              {pkg.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white px-4 py-1 uppercase tracking-widest text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center pb-8 border-b border-nude-200/60 mb-8">
                <h3 className="font-heading text-2xl text-nude-900 mb-2">{pkg.name}</h3>
                <p className="text-3xl text-gold-600 mb-6">{pkg.price}</p>
                <a href="#contact" className={`inline-block px-8 py-3 w-full uppercase tracking-widest text-sm transition-colors ${pkg.featured ? 'bg-gold-500 text-white hover:bg-gold-600' : 'border border-nude-900 text-nude-900 hover:bg-nude-900 hover:text-white'}`}>
                  Reserve Your Date
                </a>
              </div>
              
              <ul className="space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                    <span className="text-nude-800 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
