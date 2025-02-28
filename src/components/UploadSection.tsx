
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Upload, ArrowRight, Camera } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Error",
        description: "Please select an image file",
        variant: "destructive"
      });
      return;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "Error",
        description: "File is too large (max 10MB)",
        variant: "destructive"
      });
      return;
    }
    
    // Create a preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setSelectedImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };
  
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleGenerateVideo = () => {
    if (!selectedImage) return;
    
    setLoading(true);
    // Simulate video generation
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Your fashion video has been generated!",
      });
      setLoading(false);
      // Reset for demo purposes
      setTimeout(() => {
        setSelectedImage(null);
      }, 3000);
    }, 2000);
  };
  
  return (
    <section id="upload" className="pt-32 pb-10 px-6 md:px-10 fancy-blur-bg">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10 opacity-0 animate-fade-in" style={{ '--reveal-delay': '0' } as React.CSSProperties}>
          <h2 className="text-3xl md:text-4xl mb-4">Transform Your Look Into Motion</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Upload your outfit photo and our AI will create a stunning fashion video that brings your style to life.
          </p>
        </div>
        
        <div className="glass-panel p-8 md:p-10 opacity-0 animate-fade-in" style={{ '--reveal-delay': '1' } as React.CSSProperties}>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Upload Section - Left Side */}
            <div className="lg:w-2/5">
              {!selectedImage ? (
                <div 
                  className={cn(
                    "upload-zone flex flex-col items-center justify-center p-6 h-56",
                    dragActive && "upload-zone-active"
                  )}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  
                  <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                  <p className="text-center mb-2 text-sm">Drag and drop your outfit photo here</p>
                  <p className="text-xs text-muted-foreground mb-3">or</p>
                  <button 
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover-lift text-sm"
                    onClick={handleUploadClick}
                  >
                    Select Image
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={selectedImage} 
                      alt="Uploaded outfit" 
                      className="w-full h-auto rounded-lg object-cover border shadow-sm"
                    />
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full text-xs hover:bg-black/70"
                    >
                      Change
                    </button>
                  </div>
                  <button 
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-full hover-lift flex items-center justify-center"
                    onClick={handleGenerateVideo}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Generate Video <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Comparison Images - Right Side */}
            <div className="lg:w-3/5">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Before Image */}
                <div className="flex-1 space-y-2">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/b38df69e-d2c0-4970-ab65-a1fc37a5bdb7.png" 
                      alt="Original outfit" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-black/60 text-white text-xs px-2 py-1">
                      BEFORE
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">Original Photo</p>
                </div>
                
                {/* After Image */}
                <div className="flex-1 space-y-2">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/b38df69e-d2c0-4970-ab65-a1fc37a5bdb7.png" 
                      alt="Video preview" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-primary/80 text-white text-xs px-2 py-1">
                      AFTER
                    </div>
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors">
                        <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-primary ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">Generated Video</p>
                </div>
              </div>
              
              {/* Features list */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Natural fabric motion",
                  "Realistic movement",
                  "Enhanced lighting",
                  "Professional effects"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-2 mt-0.5 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <p className="text-xs">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
