
import React, { useState } from 'react';
import { generateCopySuggestion } from '../services/geminiService';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [headline, setHeadline] = useState("[PRIMARY HEADLINE]");
  const [subheadline, setSubheadline] = useState("[Supporting statement or value proposition goes here. Keep it concise and impactful.]");
  const [cta, setCta] = useState("[ACTION]");
  const [isGenerating, setIsGenerating] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSmartCopy = async () => {
    if (!inputValue.trim()) return;
    setIsGenerating(true);
    try {
      const result = await generateCopySuggestion(inputValue);
      if (result) {
        setHeadline(result.headline);
        setSubheadline(result.subheadline);
        setCta(result.cta);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative pt-40 pb-32 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <div className="animate-reveal inline-flex items-center space-x-2 bg-[#f5f5f7] px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-[#86868b]">
          <span>[ANNOUNCEMENT]</span>
          <ArrowRight className="w-3 h-3" />
        </div>
        
        <h1 className="animate-reveal delay-100 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#1D1D1F] leading-[0.95] max-w-4xl mx-auto">
          {headline}
        </h1>
        
        <p className="animate-reveal delay-200 text-xl md:text-2xl text-[#86868B] max-w-2xl mx-auto font-medium leading-relaxed">
          {subheadline}
        </p>

        <div className="animate-reveal delay-300 flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
          <button className="w-full sm:w-auto bg-[#1d1d1f] text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-black transition-all transform hover:scale-[1.02] active:scale-95">
            {cta}
          </button>
          <button className="w-full sm:w-auto px-12 py-5 text-[#1d1d1f] text-lg font-bold flex items-center justify-center hover:opacity-70 transition-opacity group">
            [SECONDARY CTA] <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* AI Template Assistant */}
        <div className="animate-reveal delay-400 mt-24 max-w-lg mx-auto p-1.5 bg-[#f5f5f7]/50 border border-gray-200 rounded-2xl flex items-center">
          <input 
            type="text" 
            placeholder="AI Assist: Describe your business here..."
            className="flex-1 bg-transparent border-none focus:ring-0 px-5 py-3 text-sm italic"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSmartCopy()}
          />
          <button 
            onClick={handleSmartCopy}
            disabled={isGenerating}
            className="bg-[#1D1D1F] text-white px-5 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest flex items-center space-x-2 hover:bg-black transition-all disabled:opacity-50"
          >
            {isGenerating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
            <span>{isGenerating ? 'Drafting...' : 'Generate'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
