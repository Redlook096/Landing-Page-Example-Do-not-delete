
import React from 'react';
import { Layers, MousePointer2 } from 'lucide-react';

interface BentoGridProps {
  onAction: () => void;
}

const Card: React.FC<{ children: React.ReactNode, className?: string, title: string, description: string, onClick?: () => void }> = ({ children, className = "", title, description, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-[#fbfbfd] rounded-[2rem] p-8 border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-700 group cursor-pointer ${className}`}
  >
    <div className="space-y-3 mb-8">
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      <p className="text-sm text-[#86868b] leading-relaxed font-medium">{description}</p>
    </div>
    <div className="flex-1 min-h-[160px] relative overflow-hidden bg-white/50 rounded-2xl border border-gray-50 flex items-center justify-center">
        {children}
    </div>
  </div>
);

export const BentoGrid: React.FC<BentoGridProps> = ({ onAction }) => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[900px]">
        
        {/* Featured Card */}
        <Card 
          title="[CORE BENEFIT 1]" 
          description="[Detailed description of a primary service or product feature. Focus on the 'why' and the value delivered.]"
          className="md:col-span-2 md:row-span-2"
          onClick={onAction}
        >
          <div className="grid grid-cols-3 gap-3 w-3/4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
             {[1,2,3,4,5,6,7,8,9].map(i => (
                 <div key={i} className={`h-12 rounded-lg bg-gray-100 ${i === 5 ? 'bg-[#1d1d1f]' : ''}`} />
             ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <Layers className="w-12 h-12 text-[#1d1d1f]/10" />
          </div>
        </Card>

        {/* Highlight 2 */}
        <Card 
          title="[HIGHLIGHT 2]" 
          description="[Key metric or USP statement.]"
          className="md:col-span-2"
          onClick={onAction}
        >
          <div className="flex items-center space-x-4">
             <div className="h-1 w-24 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-[#1d1d1f]" />
             </div>
             <span className="text-xs font-bold text-[#1d1d1f] tracking-widest">[STAT]</span>
          </div>
        </Card>

        {/* Square Card 3 */}
        <Card 
          title="[FEATURE 3]" 
          description="[Sub-feature description.]"
          onClick={onAction}
        >
          <MousePointer2 className="w-10 h-10 text-gray-200 group-hover:text-[#1d1d1f] transition-colors" />
        </Card>

        {/* Square Card 4 */}
        <Card 
          title="[FEATURE 4]" 
          description="[Sub-feature description.]"
          onClick={onAction}
        >
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center">
             <div className="w-8 h-8 rounded-full bg-[#f5f5f7]" />
          </div>
        </Card>

      </div>
    </section>
  );
};
