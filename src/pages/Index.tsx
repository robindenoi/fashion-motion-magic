
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
      
      {/* Hero Section - Now comes after the upload section */}
      <section className="pt-32 pb-20 px-6 md:px-10 fancy-blur-bg">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <div className="opacity-0 animate-fade-in" style={{ '--reveal-delay': '0' } as React.CSSProperties}>
                <div className="inline-block px-3 py-1 bg-secondary text-xs uppercase tracking-wider rounded-full mb-3">
                  AI-Powered Fashion
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                  Transform Your <span className="font-medium">Style</span> Into <span className="font-medium">Motion</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Upload a photo of your outfit and let our AI create a stunning fashion video that brings your style to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#upload" 
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover-lift flex items-center justify-center"
                  >
                    Try Now <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a 
                    href="#examples" 
                    className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover-lift"
                  >
                    See Examples
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 opacity-0 animate-fade-in" style={{ '--reveal-delay': '1' } as React.CSSProperties}>
              <div className="relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
                  alt="Fashion motion transformation" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg opacity-0 animate-fade-in" style={{ '--reveal-delay': '2' } as React.CSSProperties}>
                  <img 
                    src="https://images.unsplash.com/photo-1618517048289-4646902edaf5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" 
                    alt="AI-generated video preview" 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-transparent border-t-8 border-b-transparent border-b-8 border-l-12 border-l-primary ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { number: "1M+", label: "Photos Processed", delay: 2 },
              { number: "30s", label: "Average Processing Time", delay: 3 },
              { number: "98%", label: "Customer Satisfaction", delay: 4 }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 text-center opacity-0 animate-fade-in"
                style={{ '--reveal-delay': stat.delay } as React.CSSProperties}
              >
                <div className="text-3xl font-light mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ProcessSteps />
      
      <Gallery />
      
      {/* Testimonials/CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-primary text-primary-foreground fancy-blur-bg">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Transform Your Style?</h2>
            <p className="text-primary-foreground/70 mb-10">
              Join thousands of fashion enthusiasts who are already bringing their outfits to life.
            </p>
            <a 
              href="#upload" 
              className="px-8 py-4 bg-white text-primary rounded-full inline-block hover-lift"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
