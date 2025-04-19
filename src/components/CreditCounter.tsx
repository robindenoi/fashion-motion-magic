
import React from 'react';
import { Coins } from 'lucide-react';

const CreditCounter = () => {
  // This would typically come from your auth/user state
  const credits = 0.5; 

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
      <Coins size={16} className="text-primary" />
      <span className="text-sm font-medium">
        {credits} créditos
      </span>
    </div>
  );
};

export default CreditCounter;
