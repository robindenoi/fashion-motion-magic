
import React from 'react';
import { Camera, Wand2, Video } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Envie Sua Foto",
      description: "Simplesmente envie uma foto sua com seu outfit favorito. Fotos de alta qualidade e bem iluminadas funcionam melhor.",
      delay: 1
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Processamento de IA",
      description: "Nossa IA avançada analisa seu outfit, estilo e pose para criar movimentos realistas que complementam seu visual.",
      delay: 2
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Receba Seu Vídeo",
      description: "Em segundos, receba um vídeo deslumbrante que dá vida ao seu outfit com movimentos profissionais.",
      delay: 3
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-10 fancy-blur-bg">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-secondary text-xs uppercase tracking-wider rounded-full mb-3">
            Como Funciona
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Processo em 3 Passos</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            De foto estática para vídeo dinâmico em segundos, sem necessidade de conhecimentos técnicos.
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
