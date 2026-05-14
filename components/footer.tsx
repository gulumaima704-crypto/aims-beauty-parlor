import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-nude-900 text-nude-100 pt-20 pb-10 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white mb-6">
              Aims <span className="text-gold-400 font-normal italic">Beauty</span>
            </h2>
            <p className="text-nude-200/80 text-sm leading-relaxed mb-6">
              Premium salon services designed to make you feel confident, elegant, and radiant. Experience beauty in a luxurious and relaxing atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-nude-700 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-nude-700 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-nude-700 flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Bridal Packages', 'Testimonials', 'Gallery', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-nude-200/80 hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xl text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Bridal Makeup', 'Hair Styling & Color', 'Keratin Treatments', 'Hydra Facial', 'Manicure & Pedicure', 'Nail Art Studio'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-nude-200/80 hover:text-gold-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xl text-white mb-6">Newsletter</h4>
            <p className="text-sm text-nude-200/80 leading-relaxed mb-4">
              Subscribe to get updates on exclusive offers, beauty tips, and new packages.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-nude-800 border border-nude-700 text-nude-100 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-gold-500 text-white uppercase tracking-widest text-xs py-3 font-semibold hover:bg-gold-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-nude-800 text-center flex flex-col md:flex-row justify-between items-center text-sm text-nude-200/60">
          <p>&copy; {new Date().getFullYear()} Aims Beauty Salon. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
