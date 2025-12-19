
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { ForgotPassword } from './components/ForgotPassword';

export type View = 'landing' | 'login' | 'signup' | 'forgot-password';

function App() {
  const [view, setView] = useState<View>('landing');

  // Smooth scroll for nav anchors
  useEffect(() => {
    if (view === 'landing') {
      const handleNavClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]');
        if (anchor) {
          e.preventDefault();
          const href = anchor.getAttribute('href');
          if (href) {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      document.addEventListener('click', handleNavClick);
      return () => document.removeEventListener('click', handleNavClick);
    }
  }, [view]);

  const handleAction = () => setView('signup');

  const renderView = () => {
    switch (view) {
      case 'login':
        return (
          <Login 
            onBack={() => setView('landing')} 
            onSignUp={() => setView('signup')} 
            onForgotPassword={() => setView('forgot-password')} 
          />
        );
      case 'signup':
        return (
          <SignUp 
            onBack={() => setView('landing')} 
            onLogin={() => setView('login')} 
          />
        );
      case 'forgot-password':
        return (
          <ForgotPassword 
            onBack={() => setView('login')} 
          />
        );
      default:
        return (
          <>
            <Header onLogin={() => setView('login')} onSignUp={() => setView('signup')} />
            <main className="animate-reveal">
              <Hero onAction={handleAction} />

              <section className="py-20 border-y border-gray-100 animate-reveal delay-200">
                 <div className="max-w-7xl mx-auto px-6 overflow-hidden">
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40">
                        {[1,2,3,4,5].map(i => (
                            <span key={i} className="text-xs font-black tracking-widest uppercase cursor-default hover:opacity-100 transition-opacity">
                              [PARTNER {i}]
                            </span>
                        ))}
                    </div>
                 </div>
              </section>

              <div id="vision" className="bg-white py-40">
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="flex flex-col md:flex-row items-center gap-20">
                          <div className="md:w-1/2 space-y-8 animate-reveal delay-300">
                              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">[SECONDARY HEADLINE]</h2>
                              <p className="text-2xl text-[#86868B] font-medium leading-relaxed">
                                  [A longer paragraph detailing the core mission, philosophy, or breakthrough behind your solution.]
                              </p>
                              <button onClick={handleAction} className="bg-[#1d1d1f] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all">
                                [LEARN MORE]
                              </button>
                          </div>
                          <div className="md:w-1/2 w-full aspect-square bg-[#f5f5f7] rounded-[4rem] relative flex items-center justify-center p-12 animate-reveal delay-400">
                              <div className="w-full h-full bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col p-10 space-y-6">
                                  <div className="h-6 w-3/4 bg-[#f5f5f7] rounded-full" />
                                  <div className="h-4 w-1/2 bg-[#f5f5f7] rounded-full" />
                                  <div className="flex-1 bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl" />
                              </div>
                              <div className="absolute -bottom-6 -right-6 bg-[#1d1d1f] text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col space-y-1">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">[INDICATOR]</span>
                                  <span className="text-xl font-bold">[99.9%]</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <BentoGrid onAction={handleAction} />
              <Pricing onAction={handleAction} />

              <section className="py-40 bg-white text-center px-6">
                  <div className="max-w-4xl mx-auto space-y-12">
                      <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">[FINAL CALL TO ACTION]</h2>
                      <p className="text-xl md:text-2xl text-[#86868b] font-medium max-w-2xl mx-auto">[Last supporting sentence to close the deal.]</p>
                      <div className="flex flex-col sm:flex-row gap-6 pt-10 justify-center">
                          <button onClick={handleAction} className="bg-[#1D1D1F] text-white px-16 py-6 rounded-full text-xl font-bold hover:bg-black transition-all">
                              [PRIMARY]
                          </button>
                          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white border-2 border-[#1D1D1F] text-[#1D1D1F] px-16 py-6 rounded-full text-xl font-bold hover:bg-gray-50 transition-all">
                              [SECONDARY]
                          </button>
                      </div>
                  </div>
              </section>
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white overflow-x-hidden bg-white">
      {renderView()}
    </div>
  );
}

export default App;
