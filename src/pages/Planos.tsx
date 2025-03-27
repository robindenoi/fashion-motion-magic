
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const PRICING_PLANS = [
  {
    name: "Versace Mensal",
    credits: "100 créditos / mês",
    price: "R$40,00 / mês",
    features: [
      "Adicionar membros à equipe",
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
    name: "Dior Mensal",
    credits: "200 créditos / mês",
    price: "R$75,00 / mês",
    features: [
      "Adicionar membros à equipe",
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
    name: "Chanel Mensal",
    credits: "500 créditos / mês",
    price: "R$175,00 / mês",
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
    name: "Black Mensal",
    credits: "1000 créditos / mês",
    price: "R$325,00 / mês",
    features: [
      "Adicionar membros à equipe",
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
    name: "XL Mensal",
    credits: "5000 créditos / mês",
    price: "R$1500,00 / mês",
    features: [
      "Adicionar membros à equipe",
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

const PlanCard = ({ plan }: { plan: (typeof PRICING_PLANS)[0] }) => {
  return (
    <div className="glass-card rounded-3xl p-6 flex flex-col h-full border-2 border-amber-400/70 overflow-hidden relative">
      {plan.popular && (
        <div className="absolute top-4 right-4">
          <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
            <Check size={12} className="mr-1" /> MAIS POPULAR
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-medium mb-1">{plan.name}</h3>
      <p className="text-amber-600 font-medium mb-6">{plan.credits}</p>
      
      <ul className="space-y-2 text-left text-sm mb-6 flex-grow">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full mb-2 transition-colors font-medium">
          {plan.buttonText}
        </button>
        
        <p className="text-lg font-semibold mb-1">{plan.price}</p>
        <p className="text-xs text-gray-500">{plan.cancelText}</p>
      </div>
    </div>
  );
};

const Planos = () => {
  const [selectedTab, setSelectedTab] = useState("planos");
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20 px-4 md:px-10">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Preços</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para suas necessidades de moda digital
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <Tabs 
              defaultValue="planos" 
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="bg-black rounded-full p-1"
            >
              <TabsList className="grid grid-cols-3 bg-transparent">
                <TabsTrigger 
                  value="pacotes" 
                  className={cn(
                    "rounded-full text-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=inactive]:text-white/70",
                    selectedTab === "pacotes" && "bg-amber-500"
                  )}
                >
                  Pacotes
                </TabsTrigger>
                <TabsTrigger 
                  value="planos" 
                  className={cn(
                    "rounded-full text-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=inactive]:text-white/70",
                    selectedTab === "planos" && "bg-amber-500"
                  )}
                >
                  Planos
                </TabsTrigger>
                <TabsTrigger 
                  value="integracao" 
                  className={cn(
                    "rounded-full text-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=inactive]:text-white/70",
                    selectedTab === "integracao" && "bg-amber-500"
                  )}
                >
                  Integração
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-xl mb-1">
              Assine com <span className="text-amber-500 font-medium">Recursos Premium</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PRICING_PLANS.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>
          
          <div className="mt-10 text-center text-sm text-amber-600">
            <p className="mb-2">
              <strong>Nota:</strong> Se você cancelar seu plano, perderá imediatamente o acesso aos recursos premium.
            </p>
            <p>
              Você atualmente tem 0.5 crédito(s) restante(s) (1 crédito = 1 design)
            </p>
          </div>
          
          <div className="mt-16 flex justify-center">
            <a href="#learn-more" className="flex items-center text-sm text-gray-600 hover:text-gray-900 animated-underline">
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
