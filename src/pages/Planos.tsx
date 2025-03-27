
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { ChevronDown } from 'lucide-react';
import type { PricingPlan } from '@/components/PricingCard';

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    credits: "100 créditos / mês",
    price: "US$8 / mês",
    features: [
      "Acesso à IA de última geração",
      "Acesso ao estilista de moda IA",
      "Treinar IA para estilos e humanos",
      "Criar designs de frente e costas",
      "Aprimorar designs em HD",
      "E muito mais..."
    ],
    popular: false,
    buttonText: "Comece Agora",
    cancelText: "Cancele a qualquer momento"
  },
  {
    name: "Pro",
    credits: "500 créditos / mês",
    price: "US$35 / mês",
    features: [
      "Adicionar membros à equipe",
      "Acesso à IA de última geração",
      "Acesso ao estilista de moda IA",
      "Treinar IA para estilos e humanos",
      "Criar designs de frente e costas",
      "Aprimorar designs em HD",
      "E muito mais..."
    ],
    popular: true,
    buttonText: "Comece Agora",
    cancelText: "Cancele a qualquer momento"
  },
  {
    name: "Premium",
    credits: "1000 créditos / mês",
    price: "US$65 / mês",
    features: [
      "Adicionar membros à equipe",
      "Acesso prioritário",
      "Acesso à IA de última geração",
      "Acesso ao estilista de moda IA",
      "Treinar IA para estilos e humanos",
      "Criar designs de frente e costas",
      "Aprimorar designs em HD",
      "E muito mais..."
    ],
    popular: false,
    buttonText: "Comece Agora",
    cancelText: "Cancele a qualquer momento"
  }
];

const Planos = () => {
  return (
    <div className="min-h-screen fancy-blur-bg">
      <Header />
      
      <main className="pt-24 pb-20 px-4 md:px-10">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Preços</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para suas necessidades de moda digital
            </p>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-xl mb-1">
              Assine com <span className="text-primary font-medium">Recursos Premium</span>
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {PRICING_PLANS.map((plan, i) => (
              <div key={i} className="lg:w-1/3">
                <PricingCard plan={plan} />
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center text-sm text-primary/80">
            <p className="mb-2">
              <strong>Nota:</strong> Se você cancelar seu plano, perderá imediatamente o acesso aos recursos premium.
            </p>
            <p>
              Você atualmente tem 0.5 crédito(s) restante(s) (1 crédito = 1 design)
            </p>
          </div>
          
          <div className="mt-16 flex justify-center">
            <a href="#learn-more" className="flex items-center text-sm text-foreground/70 hover:text-foreground animated-underline">
              Saiba mais abaixo
              <ChevronDown size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Planos;
