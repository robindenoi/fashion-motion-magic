
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import ProcessSteps from '@/components/ProcessSteps';
import UploadSection from '@/components/UploadSection';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { ArrowRight, Play, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [videoSrc, setVideoSrc] = useState("https://images.unsplash.com/video/upload/v1693293311/stock/video-10.mp4");
  const [videoUploaded, setVideoUploaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if the file is a video
    if (!file.type.startsWith('video/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a video file.",
        variant: "destructive"
      });
      return;
    }
    
    // Create a blob URL for the video
    const objectUrl = URL.createObjectURL(file);
    setVideoSrc(objectUrl);
    setVideoUploaded(true);
    
    toast({
      title: "Video uploaded",
      description: "Your video has been uploaded successfully."
    });
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Upload Section - Moved to the beginning for immediate access */}
      <UploadSection />
      
      {/* Video Showcase Section with Upload Option */}
      <section className="py-20 px-6 md:px-10 bg-slate-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-secondary text-xs uppercase tracking-wider rounded-full mb-3">
              See it in action
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">Watch AI Transform Still Images Into Movement</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Our AI technology brings your fashion photos to life with realistic, fluid motion that showcases your style.
            </p>
            
            {/* Video Upload Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="mb-8">
                  <Upload className="w-4 h-4 mr-2" /> Change Showcase Video
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Showcase Video</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-sm text-muted-foreground">
                    Upload a video to showcase on the homepage. This will replace the current video.
                  </p>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept="video/*" 
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" 
                    onChange={handleVideoUpload}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in" style={{ '--reveal-delay': '1' } as React.CSSProperties}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 group hover:bg-black/40 transition-colors cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                  </div>
                </div>
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover" 
                  poster={videoUploaded ? undefined : "/lovable-uploads/7a003c9c-924d-4b7e-b25e-781d46196a6b.png"}
                  muted
                  loop
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ '--reveal-delay': '2' } as React.CSSProperties}>
              <h3 className="text-2xl font-medium mb-4">Stunning Transformations</h3>
              <p className="text-muted-foreground mb-6">
                Our AI doesn't just animate your photo - it creates a realistic interpretation of how your outfit would move in real life, with natural fabric motion and professional fashion video aesthetics.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Natural fabric motion that responds to movement",
                  "Professional lighting enhancements",
                  "Subtle background animations",
                  "Model pose variations that showcase the outfit"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a 
                  href="#upload" 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover-lift inline-flex items-center"
                >
                  Create Your Video <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
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
