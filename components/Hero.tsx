
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onAction: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <section className="relative pt-40 pb-32 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <div className="animate-reveal inline-flex items-center space-x-2 bg-[#f5f5f7] px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-[#86868b]">
          <span>[ANNOUNCEMENT]</span>
          <ArrowRight className="w-3 h-3" />
        </div>
        
        <h1 className="animate-reveal delay-100 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#1D1D1F] leading-[0.95] max-w-4xl mx-auto">
          [PRIMARY HEADLINE]
        </h1>
        
        <p className="animate-reveal delay-200 text-xl md:text-2xl text-[#86868B] max-w-2xl mx-auto font-medium leading-relaxed">
          [Supporting statement or value proposition goes here. Keep it concise and impactful. Designed for any business scale.]
        </p>

        <div className="animate-reveal delay-300 flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
          <button onClick={onAction} className="w-full sm:w-auto bg-[#1d1d1f] text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-black transition-all transform hover:scale-[1.02] active:scale-95">
            [ACTION]
          </button>
          <button className="w-full sm:w-auto px-12 py-5 text-[#1d1d1f] text-lg font-bold flex items-center justify-center hover:opacity-70 transition-opacity group">
            [SECONDARY CTA] <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-[#0071e3]/5 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-purple-500/5 blur-[100px] rounded-full" />
      </div>
    </section>
  );
};
