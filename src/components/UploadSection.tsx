
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Upload, ArrowRight, Camera } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

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
      toast.error("Please select an image file");
      return;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File is too large (max 10MB)");
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
      toast.success("Your fashion video has been generated!");
      setLoading(false);
      // Reset for demo purposes
      setTimeout(() => {
        setSelectedImage(null);
      }, 3000);
    }, 2000);
  };
  
  return (
    <section id="upload" className="py-20 px-6 md:px-10">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-10 opacity-0 animate-fade-in" style={{ '--reveal-delay': '1' } as React.CSSProperties}>
          <div className="inline-block px-3 py-1 bg-secondary text-xs uppercase tracking-wider rounded-full mb-3">
            Try it yourself
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Transform Your Look Into Motion</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Upload your outfit photo and our AI will create a stunning fashion video that brings your style to life.
          </p>
        </div>
        
        <div className="glass-panel p-8 md:p-12 opacity-0 animate-fade-in" style={{ '--reveal-delay': '2' } as React.CSSProperties}>
          {!selectedImage ? (
            <div 
              className={cn(
                "upload-zone flex flex-col items-center justify-center p-10 h-64",
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
              
              <Upload className="w-10 h-10 mb-4 text-muted-foreground" />
              <p className="text-center mb-2">Drag and drop your outfit photo here</p>
              <p className="text-sm text-muted-foreground mb-4">or</p>
              <button 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover-lift"
                onClick={handleUploadClick}
              >
                Select Image
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
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
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl mb-2">Ready to animate</h3>
                <p className="text-muted-foreground mb-6">
                  Your outfit photo will be transformed into a professional-looking fashion video in seconds.
                </p>
                <button 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover-lift flex items-center justify-center mx-auto lg:mx-0"
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
