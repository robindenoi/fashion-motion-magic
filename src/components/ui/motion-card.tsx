
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface MotionCardProps {
  imageSrc: string;
  videoSrc: string;
  alt: string;
  className?: string;
}

const MotionCard: React.FC<MotionCardProps> = ({ 
  imageSrc, 
  videoSrc, 
  alt,
  className
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-lg cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img 
        src={imageSrc} 
        alt={alt} 
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          (isHovering && isVideoLoaded) ? "opacity-0" : "opacity-100"
        )} 
      />
      
      <video 
        src={videoSrc}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
        style={{ opacity: isHovering && isVideoLoaded ? 1 : 0 }}
        onLoadedData={() => setIsVideoLoaded(true)}
        ref={ref => {
          if (ref) {
            if (isHovering) {
              ref.play();
            } else {
              ref.pause();
            }
          }
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100">
        <div className="bg-white/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full inline-block">
          Hover to see motion
        </div>
      </div>
    </div>
  );
};

export default MotionCard;
