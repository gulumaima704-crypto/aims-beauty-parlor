import Image from 'next/image';

export function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800', alt: 'Bridal Makeup', tag: 'Bridal Looks' },
    { src: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?q=80&w=800', alt: 'Hair Transformations', tag: 'Hair Transformations' },
    { src: 'https://images.pexels.com/photos/7290119/pexels-photo-7290119.jpeg', alt: 'Makeup Transformations', tag: 'Party Makeup' },
    { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800', alt: 'Nail Art', tag: 'Nail Art' },
    { src: 'https://images.pexels.com/photos/37229316/pexels-photo-37229316.jpeg', alt: 'Facials', tag: 'Skin Care' },
    { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800', alt: 'Hair Styling', tag: 'Styling' },
  ];

  return (
    <section id="gallery" className="py-24 bg-nude-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Transformation Gallery</h2>
            <p className="text-nude-200/80 max-w-lg">Discover the artistry of our experts. Explore a selection of our finest transformations across hair, makeup, and nails.</p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border-b border-gold-400 pb-1 text-gold-400 uppercase tracking-widest text-sm hover:text-gold-300 transition-colors">
              Follow Our Instagram
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`relative group overflow-hidden ${i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-1' : ''} aspect-[4/5] bg-nude-800`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold-300 text-xs tracking-widest uppercase mb-2 block">{img.tag}</span>
                <h3 className="font-heading text-2xl text-white">{img.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
