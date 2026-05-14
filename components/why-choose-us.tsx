import { Award, HeartPulse, CheckCircle, ShieldCheck, UserCheck, Star } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    { title: 'Certified Beauty Experts', icon: Award, desc: 'Trained professionals with years of experience.' },
    { title: 'Hygienic Environment', icon: ShieldCheck, desc: 'Strict sterilization techniques for your safety.' },
    { title: 'Premium Products', icon: Star, desc: 'Top-tier international beauty brands used exclusively.' },
    { title: 'Customized Beauty Care', icon: HeartPulse, desc: 'Tailored treatments depending on your skin & hair type.' },
    { title: 'Bridal Specialists', icon: CheckCircle, desc: 'Specialized techniques for long-lasting flawless bridal looks.' },
    { title: 'Comfortable Luxury', icon: UserCheck, desc: 'A serene and luxurious ambiance to relax your mind.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">The Aims Promise</span>
            <h2 className="font-heading text-4xl md:text-5xl text-nude-900 leading-tight mb-6">
              Why Aims is the <br/>
              <span className="italic">Perfect Choice</span>
            </h2>
            <p className="text-nude-800 leading-relaxed mb-10 text-lg">
              We don’t just provide a service; we deliver an experience. Step into an environment where elegance meets expertise, and let our skilled professionals bring out your inner radiance.
            </p>
            
            <a href="#gallery" className="border-b-2 border-gold-400 text-nude-900 pb-1 uppercase tracking-widest text-sm font-semibold hover:text-gold-600 transition-colors">
              Explore Our Work &rarr;
            </a>
          </div>
          
          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="p-6 bg-nude-50 border border-nude-100 hover:border-gold-300 transition-colors group">
                  <Icon className="w-8 h-8 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-xl text-nude-900 mb-2">{reason.title}</h3>
                  <p className="text-nude-800/70 text-sm">{reason.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
