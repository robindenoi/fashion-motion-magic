
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Upload, ArrowRight } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

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
    <section id="upload" className="pt-24 pb-10 px-6 md:px-10 bg-[#1e2e1e] text-white">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side: Text and Upload */}
          <div className="lg:w-1/2 space-y-8 opacity-0 animate-fade-in" style={{ '--reveal-delay': '0' } as React.CSSProperties}>
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Introducing <span className="text-[#45f789] font-medium">AI fashion videos</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Turn any image into AI video, or any text into AI video. Ideal for presenting a fashion
                design idea with a dynamic visual. For example for your brand on the product page of
                your e-commerce site. Simply upload your fashion photo and create a 5 or 10 second
                AI video.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handleUploadClick}
                  className="bg-white text-[#1e2e1e] hover:bg-gray-100 rounded-full px-6 py-3 font-medium"
                >
                  Image to video
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-6 py-3"
                >
                  More examples
                </Button>
              </div>
            </div>
            
            {!selectedImage && (
              <div 
                className={cn(
                  "upload-zone flex flex-col items-center justify-center p-8 h-56 mt-6 border-2 border-dashed border-white/30 rounded-2xl transition-all duration-300",
                  dragActive && "border-white/60 bg-white/5"
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
                
                <Upload className="w-10 h-10 mb-4 text-white/70" />
                <p className="text-center mb-2">Drag and drop your outfit photo here</p>
                <p className="text-sm text-white/70 mb-4">or</p>
                <button 
                  className="px-4 py-2 bg-white text-[#1e2e1e] rounded-full hover:bg-gray-100 transition-all"
                  onClick={handleUploadClick}
                >
                  Select Image
                </button>
              </div>
            )}
            
            {selectedImage && (
              <div className="mt-6">
                <h3 className="text-xl mb-4">Ready to animate</h3>
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedImage}
                    alt="Selected outfit"
                    className="w-32 h-32 object-cover rounded-lg border border-white/20"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-white/70 mb-4">
                      Your outfit photo will be transformed into a professional fashion video.
                    </p>
                    <button 
                      className="px-6 py-3 bg-white text-[#1e2e1e] rounded-full hover:bg-gray-100 transition-all flex items-center"
                      onClick={handleGenerateVideo}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <span className="w-4 h-4 border-2 border-gray-800/30 border-t-gray-800 rounded-full animate-spin mr-2" />
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
              </div>
            )}
          </div>
          
          {/* Right Side: Before/After Images */}
          <div className="lg:w-1/2 flex justify-center items-center gap-4 mt-8 lg:mt-0 opacity-0 animate-fade-in" style={{ '--reveal-delay': '1' } as React.CSSProperties}>
            <div className="relative">
              <img 
                src="/lovable-uploads/09c3c945-d07a-461b-8eba-84690dffdb5b.png" 
                alt="Before and after AI fashion transformation" 
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
