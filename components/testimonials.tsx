import { SectionHeader } from './shared';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Sara Fatima",
      text: "Got a keratin treatment done by miss Nasreen & Monica today. I’m satisfied with the results! My hair is smooth, shiny, and frizz-free. The expert did an amazing job. Highly recommended!",
      rating: 5,
      date: "4 months ago"
    },
    {
      name: "Bushra Ghalib",
      text: "Best salon experience in Karachi! My bridal makeup lasted all night and looked flawless. Super professional staff and beautiful environment.",
      rating: 5,
      date: "3 months ago"
    },
    {
      name: "Ayesha K.",
      text: "I couldn't be happier with my party makeup. The artists are incredibly skilled and listened to exactly what I wanted. Definitely coming back!",
      rating: 5,
      date: "1 month ago"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-blush-50 relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blush-100/50 -z-0 transform skew-x-12 opacity-50 block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title="Words of Love" subtitle="Read what our beautiful clients have to say about their experience with us." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 border border-blush-100 relative">
              {/* Quote Mark */}
              <div className="text-6xl text-gold-300 opacity-20 font-heading absolute top-6 left-6 leading-none">“</div>
              
              <div className="flex items-center space-x-1 mb-6 relative z-10 pl-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              
              <p className="text-nude-800 italic mb-8 relative z-10 h-32 overflow-hidden text-sm md:text-base leading-relaxed">&quot;{review.text}&quot;</p>
              
              <div className="border-t border-nude-100 pt-6 mt-auto">
                <p className="font-heading text-lg text-nude-900">{review.name}</p>
                <p className="text-xs text-nude-800/60 uppercase tracking-widest">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
