export function CTA() {
  return (
    <section className="py-24 bg-gold-50/50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-5xl md:text-6xl text-nude-900 mb-6">Ready For Your Glow-Up?</h2>
        <p className="text-xl text-nude-800/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Book your appointment today and experience beauty, confidence, and luxury like never before. 
          Let us pamper you in our serene environment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/923339368111" // WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-green-500/20"
          >
            Book on WhatsApp
          </a>
          <a
            href="tel:+923339368111"
            className="bg-nude-900 text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
