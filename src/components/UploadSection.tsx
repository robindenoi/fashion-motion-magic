
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
    <section id="upload" className="pt-24 md:pt-32 pb-10 px-4 md:px-10 fancy-blur-bg">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10 opacity-0 animate-fade-in" style={{ '--reveal-delay': '0' } as React.CSSProperties}>
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Transforme Seu Look Em Movimento</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Faça upload da foto do seu look e nossa IA criará um vídeo de moda impressionante que dará vida ao seu estilo.
          </p>
        </div>
        
        <div className="glass-panel p-5 md:p-10 opacity-0 animate-fade-in" style={{ '--reveal-delay': '1' } as React.CSSProperties}>
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Comparison Images - Now at the top */}
            <div className="w-full">
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
                      ANTES
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">Foto Original</p>
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
                      DEPOIS
                    </div>
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors">
                        <div className="w-0 h-0 border-y-[6px] md:border-y-[8px] border-y-transparent border-l-[10px] md:border-l-[12px] border-l-primary ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">Vídeo Gerado</p>
                </div>
              </div>
              
              {/* Features list */}
              <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {[
                  "Movimento natural dos tecidos",
                  "Movimentos realistas",
                  "Iluminação aprimorada",
                  "Efeitos profissionais"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-1 md:mr-2 mt-0.5 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <p className="text-xs">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Section - Now at the bottom */}
            <div className="w-full mt-4 md:mt-6">
              <div className="border border-dashed border-gray-300 rounded-lg p-4 md:p-6">
                {!selectedImage ? (
                  <div 
                    className={cn(
                      "upload-zone flex flex-col items-center justify-center p-4 md:p-6",
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
                    
                    <Upload className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 text-muted-foreground" />
                    <p className="text-center mb-1 md:mb-2 text-xs md:text-sm">Arraste e solte a foto do seu look aqui</p>
                    <p className="text-xs text-muted-foreground mb-2 md:mb-3">ou</p>
                    <button 
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-primary text-primary-foreground rounded-full hover-lift text-xs md:text-sm"
                      onClick={handleUploadClick}
                    >
                      Selecionar Imagem
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                    <div className="w-full md:w-1/3">
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
                          Mudar
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 mt-3 md:mt-0">
                      <h3 className="text-base md:text-lg font-medium mb-1 md:mb-2">Pronto para transformar seu look?</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                        Nossa IA criará um vídeo de moda impressionante com seu look com movimento realista.
                      </p>
                      <button 
                        className="w-full px-4 py-2 md:px-6 md:py-3 bg-primary text-primary-foreground rounded-full hover-lift flex items-center justify-center text-sm"
                        onClick={handleGenerateVideo}
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <span className="w-3 h-3 md:w-4 md:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1 md:mr-2" />
                            Processando...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Gerar Vídeo <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
