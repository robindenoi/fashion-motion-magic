
import React from 'react';
import MotionCard from './ui/motion-card';

const Gallery = () => {
  // In a real app, you would use real image and video URLs here
  const examples = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      video: "https://static.videezy.com/system/resources/previews/000/045/482/original/alila-4.mp4",
      alt: "Woman in casual outfit",
      delay: 1
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      video: "https://static.videezy.com/system/resources/previews/000/050/708/original/50708.mp4",
      alt: "Man in business attire",
      delay: 2
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      video: "https://static.videezy.com/system/resources/previews/000/038/656/original/fashion_model_catwalk.mp4",
      alt: "Woman in evening dress",
      delay: 3
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      video: "https://static.videezy.com/system/resources/previews/000/039/501/original/Male_Fashion_01.mp4",
      alt: "Man in casual style",
      delay: 4
    }
  ];

  return (
    <section id="examples" className="py-24 px-6 md:px-10 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-primary/10 text-xs uppercase tracking-wider rounded-full mb-3">
            Examples
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">See Fashion in Motion</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hover over each image to see how our AI transforms static photos into dynamic fashion videos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example) => (
            <div 
              key={example.id}
              className="opacity-0 animate-fade-in"
              style={{ '--reveal-delay': example.delay } as React.CSSProperties}
            >
              <MotionCard
                imageSrc={example.image}
                videoSrc={example.video}
                alt={example.alt}
                className="aspect-[3/4] w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
