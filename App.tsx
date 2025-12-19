
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  // Smooth scroll for nav anchors
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white overflow-x-hidden">
      <Header />
      
      <main>
        {/* Intro */}
        <Hero />

        {/* Partners / Social Proof Placeholder */}
        <section className="py-20 border-y border-gray-100 animate-reveal delay-400">
           <div className="max-w-7xl mx-auto px-6 overflow-hidden">
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40">
                  {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-xs font-black tracking-widest uppercase">[PARTNER {i}]</span>
                  ))}
              </div>
           </div>
        </section>

        {/* Vision / Statement Section */}
        <div id="vision" className="bg-white py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">[SECONDARY HEADLINE]</h2>
                        <p className="text-2xl text-[#86868B] font-medium leading-relaxed">
                            [A longer paragraph detailing the core mission, philosophy, or breakthrough behind your solution. Keep it centered on impact.]
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full aspect-square bg-[#f5f5f7] rounded-[4rem] relative flex items-center justify-center p-12">
                        {/* Abstract Skeleton Image Placeholder */}
                        <div className="w-full h-full bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col p-10 space-y-6">
                            <div className="h-6 w-3/4 bg-[#f5f5f7] rounded-full" />
                            <div className="h-4 w-1/2 bg-[#f5f5f7] rounded-full" />
                            <div className="flex-1 bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl" />
                        </div>
                        {/* Status Float */}
                        <div className="absolute -bottom-6 -right-6 bg-[#1d1d1f] text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">[INDICATOR]</span>
                            <span className="text-xl font-bold">[99.9%]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Bento */}
        <BentoGrid />

        {/* Pricing */}
        <Pricing />

        {/* Final CTA */}
        <section className="py-40 bg-white text-center px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">[FINAL CALL TO ACTION]</h2>
                <p className="text-xl md:text-2xl text-[#86868b] font-medium max-w-2xl mx-auto">[Last supporting sentence to close the deal.]</p>
                <div className="flex flex-col sm:flex-row gap-6 pt-10 justify-center">
                    <button className="bg-[#1D1D1F] text-white px-16 py-6 rounded-full text-xl font-bold hover:bg-black transition-all">
                        [PRIMARY]
                    </button>
                    <button className="bg-white border-2 border-[#1D1D1F] text-[#1D1D1F] px-16 py-6 rounded-full text-xl font-bold hover:bg-gray-50 transition-all">
                        [SECONDARY]
                    </button>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
