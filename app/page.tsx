import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Gallery } from '@/components/gallery';
import { Testimonials } from '@/components/testimonials';
import { BridalPackages } from '@/components/bridal-packages';
import { SocialProof } from '@/components/social-proof';
import { CTA } from '@/components/cta';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

export default function Home() {
  return (
    <main className="min-h-screen bg-nude-50 selection:bg-blush-200">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <BridalPackages />
      <SocialProof />
      <CTA />
      <Contact />
      <Footer />
      
      {/* Floating Elements */}
      <FloatingWhatsApp />
    </main>
  );
}
