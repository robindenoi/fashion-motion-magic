
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import ProcessSteps from '@/components/ProcessSteps';
import UploadSection from '@/components/UploadSection';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.opacity-0').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.opacity-0').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Upload Section - Moved to the beginning for immediate access */}
      <UploadSection />
      
      <ProcessSteps />
      
      <Gallery />
      
      {/* Testimonials/CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-primary text-primary-foreground fancy-blur-bg">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">Pronto para Transformar Seu Estilo?</h2>
            <p className="text-primary-foreground/70 mb-10">
              Junte-se a milhares de entusiastas da moda que já estão dando vida aos seus outfits.
            </p>
            <a 
              href="#upload" 
              className="px-8 py-4 bg-white text-primary rounded-full inline-block hover-lift"
            >
              Comece Agora
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
