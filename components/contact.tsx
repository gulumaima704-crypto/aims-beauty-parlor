import { SectionHeader } from './shared';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Image from 'next/image';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-nude-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Visit Us" subtitle="We are located in the heart of Karachi. Come in for a consultation or book your appointment online." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-nude-50 p-8 md:p-12">
            <h3 className="font-heading text-3xl text-nude-900 mb-8">Make an Appointment</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-nude-800 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white border border-nude-200 px-4 py-3 focus:outline-none focus:border-gold-400 transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-nude-800 mb-2">Phone Number</label>
                  <input type="text" className="w-full bg-white border border-nude-200 px-4 py-3 focus:outline-none focus:border-gold-400 transition-colors" placeholder="+92 300 0000000" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-nude-800 mb-2">Select Service</label>
                <select className="w-full bg-white border border-nude-200 px-4 py-3 focus:outline-none focus:border-gold-400 transition-colors text-nude-800">
                  <option>Hair Styling</option>
                  <option>Bridal Makeup</option>
                  <option>Keratin Treatment</option>
                  <option>Facials</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-nude-800 mb-2">Date</label>
                  <input type="date" className="w-full bg-white border border-nude-200 px-4 py-3 focus:outline-none focus:border-gold-400 transition-colors text-nude-800" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-nude-800 mb-2">Time</label>
                  <input type="time" className="w-full bg-white border border-nude-200 px-4 py-3 focus:outline-none focus:border-gold-400 transition-colors text-nude-800" />
                </div>
              </div>

              <button type="submit" className="w-full bg-nude-900 text-white uppercase tracking-widest text-sm py-4 hover:bg-gold-500 transition-colors mt-4">
                Submit Request
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-gold-500 mr-2" />
                  <h4 className="font-heading text-xl text-nude-900">Address</h4>
                </div>
                <p className="text-nude-800 text-sm leading-relaxed">
                  2, Block 13 D/2 Block 13 D 2<br/>
                  Gulshan-e-Iqbal, Karachi, 75400<br/>
                  Pakistan
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-gold-500 mr-2" />
                  <h4 className="font-heading text-xl text-nude-900">Hours</h4>
                </div>
                <p className="text-nude-800 text-sm leading-relaxed">
                  Mon - Sun: 11:00 AM - 10:00 PM<br/>
                  Strictly by Appointment.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <Phone className="w-5 h-5 text-gold-500 mr-2" />
                  <h4 className="font-heading text-xl text-nude-900">Contact</h4>
                </div>
                <p className="text-nude-800 text-sm leading-relaxed">
                  Call: +92 333 9368111<br/>
                  WhatsApp: +92 333 9368111
                </p>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <Mail className="w-5 h-5 text-gold-500 mr-2" />
                  <h4 className="font-heading text-xl text-nude-900">Email</h4>
                </div>
                <p className="text-nude-800 text-sm leading-relaxed">
                  bookings@aimsbeauty.pk<br/>
                  info@aimsbeauty.pk
                </p>
              </div>
            </div>

            {/* Google Map Placeholder - styled div to represent a map */}
            <div className="w-full h-48 bg-nude-100 flex items-center justify-center border border-nude-200 mt-8 relative overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800" 
                 alt="Map" 
                 fill
                 className="object-cover opacity-50 grayscale" 
                 referrerPolicy="no-referrer"
               />
               <div className="relative z-10 bg-white/80 backdrop-blur-sm px-4 py-2 border border-nude-200">
                  <span className="text-xs uppercase tracking-widest text-nude-900">Map Integration Area</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
