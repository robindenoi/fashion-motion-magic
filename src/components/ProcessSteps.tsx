
import React from 'react';
import { Camera, Wand2, Video } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Upload Your Photo",
      description: "Simply upload a photo of yourself in your favorite outfit. High-quality, well-lit photos work best.",
      delay: 1
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "AI Processing",
      description: "Our advanced AI analyzes your outfit, style, and pose to create realistic motion that complements your look.",
      delay: 2
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Get Your Video",
      description: "Within seconds, receive a stunning fashion video that brings your outfit to life with professional movements.",
      delay: 3
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-10 fancy-blur-bg">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-secondary text-xs uppercase tracking-wider rounded-full mb-3">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Simple 3-Step Process</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From static photo to dynamic video in seconds, no technical skills required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 text-center opacity-0 animate-fade-in"
              style={{ '--reveal-delay': step.delay } as React.CSSProperties}
            >
              <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
