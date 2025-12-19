
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogin, onSignUp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass h-12 py-2' : 'bg-transparent h-16 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-[#1d1d1f] rounded-sm" />
          <span className="font-bold text-lg tracking-tighter">[BRAND]</span>
        </div>

        <div className="hidden md:flex space-x-10 text-[12px] font-medium text-[#1D1D1F]/70 tracking-tight">
          <a href="#features" className="hover:text-black transition-colors uppercase">[NAV 1]</a>
          <a href="#vision" className="hover:text-black transition-colors uppercase">[NAV 2]</a>
          <a href="#pricing" className="hover:text-black transition-colors uppercase">[NAV 3]</a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button onClick={onLogin} className="text-[12px] font-bold text-[#1d1d1f] hover:opacity-70 transition-opacity">
            LOG IN
          </button>
          <button onClick={onSignUp} className="bg-[#1d1d1f] text-white px-5 py-1.5 rounded-full text-[12px] font-semibold hover:bg-black transition-all transform active:scale-95 shadow-sm">
            [CTA BUTTON]
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-6 animate-reveal">
          <a href="#features" className="text-xl font-medium">[NAV 1]</a>
          <a href="#vision" className="text-xl font-medium">[NAV 2]</a>
          <a href="#pricing" className="text-xl font-medium">[NAV 3]</a>
          <div className="flex flex-col space-y-4">
            <button onClick={onLogin} className="w-full py-4 border border-[#1d1d1f] rounded-2xl font-bold">
              LOG IN
            </button>
            <button onClick={onSignUp} className="bg-[#1d1d1f] text-white py-4 rounded-2xl font-bold">
              [CTA BUTTON]
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
