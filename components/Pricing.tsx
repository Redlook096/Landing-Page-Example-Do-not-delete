
import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onAction: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onAction }) => {
  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">[PRICING TITLE]</h2>
            <p className="text-[#86868B] text-lg font-medium">[Supporting pricing subtitle.]</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="p-10 space-y-8 animate-reveal delay-100">
            <h3 className="text-xl font-bold">[BASIC]</h3>
            <div className="flex items-baseline">
                <span className="text-5xl font-bold tracking-tight">[$XX]</span>
                <span className="text-[#86868b] ml-1 font-medium text-lg">/mo</span>
            </div>
            <ul className="space-y-4">
              {['[FEATURE 1]', '[FEATURE 2]', '[FEATURE 3]'].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-sm font-medium text-[#1d1d1f]">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={onAction} className="w-full py-4 border border-[#1d1d1f] rounded-full font-bold hover:bg-[#f5f5f7] transition-all uppercase text-[11px] tracking-widest">
              [GET STARTED]
            </button>
          </div>

          {/* Plan 2 - Featured */}
          <div className="p-10 bg-[#fbfbfd] rounded-[2.5rem] border border-gray-100 shadow-xl space-y-8 relative scale-105 animate-reveal delay-200">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1d1d1f] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                [RECOMMENDED]
            </div>
            <h3 className="text-xl font-bold">[PRO]</h3>
            <div className="flex items-baseline">
                <span className="text-5xl font-bold tracking-tight">[$XX]</span>
                <span className="text-[#86868b] ml-1 font-medium text-lg">/mo</span>
            </div>
            <ul className="space-y-4">
              {['[ALL BASIC FEATURES]', '[PRO FEATURE 1]', '[PRO FEATURE 2]', '[PRO FEATURE 3]'].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-sm font-medium text-[#1d1d1f]">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={onAction} className="w-full py-4 bg-[#1d1d1f] text-white rounded-full font-bold hover:bg-black transition-all uppercase text-[11px] tracking-widest">
              [UPGRADE NOW]
            </button>
          </div>

          {/* Plan 3 */}
          <div className="p-10 space-y-8 animate-reveal delay-300">
            <h3 className="text-xl font-bold">[ENTERPRISE]</h3>
            <div className="flex items-baseline">
                <span className="text-5xl font-bold tracking-tight">[$XX]</span>
                <span className="text-[#86868b] ml-1 font-medium text-lg">/mo</span>
            </div>
            <ul className="space-y-4">
              {['[ALL PRO FEATURES]', '[CUSTOM SOLUTIONS]', '[DEDICATED SUPPORT]'].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-sm font-medium text-[#1d1d1f]">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={onAction} className="w-full py-4 border border-[#1d1d1f] rounded-full font-bold hover:bg-[#f5f5f7] transition-all uppercase text-[11px] tracking-widest">
              [CONTACT SALES]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
