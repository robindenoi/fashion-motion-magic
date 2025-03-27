
import React from 'react';
import { Check } from 'lucide-react';

export interface PricingPlan {
  name: string;
  credits: string;
  price: string;
  features: string[];
  popular: boolean;
  buttonText: string;
  cancelText: string;
}

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div className="glass-card rounded-3xl p-6 flex flex-col h-full border-2 border-amber-400/70 overflow-hidden relative hover-lift">
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

export default PricingCard;
