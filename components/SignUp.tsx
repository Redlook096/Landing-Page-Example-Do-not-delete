
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Circle } from 'lucide-react';

interface SignUpProps {
  onBack: () => void;
  onLogin: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onBack, onLogin }) => {
  const [password, setPassword] = useState('');
  
  const validation = {
    length: password.length >= 8,
    number: /\d/.test(password),
    capital: /[A-Z]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  };

  const strengthCount = Object.values(validation).filter(Boolean).length;
  const strengthPercent = (strengthCount / 4) * 100;

  const getStrengthColor = () => {
    if (strengthCount === 0) return 'bg-gray-200';
    if (strengthCount <= 2) return 'bg-red-500';
    if (strengthCount === 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (strengthCount === 4) {
      alert("Sign up successful! (Simulation)");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#fbfbfd] animate-reveal">
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 flex items-center space-x-2 text-sm font-bold text-[#86868b] hover:text-black transition-colors"
      >
        <ArrowLeft size={16} />
        <span>BACK</span>
      </button>

      <div className="w-full max-w-lg space-y-12 bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
        <div className="text-center space-y-2">
          <ShieldCheck className="w-12 h-12 text-[#1d1d1f] mx-auto mb-4" />
          <h1 className="text-4xl font-bold tracking-tight">Get started.</h1>
          <p className="text-[#86868b] font-medium">Join [BRAND] and build the future.</p>
        </div>

        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div className="col-span-1">
            <input 
              required
              type="text" 
              placeholder="First name"
              className="w-full px-6 py-4 bg-[#f5f5f7] rounded-2xl border border-transparent focus:border-gray-200 focus:bg-white outline-none transition-all text-base font-medium"
            />
          </div>
          <div className="col-span-1">
            <input 
              required
              type="text" 
              placeholder="Last name"
              className="w-full px-6 py-4 bg-[#f5f5f7] rounded-2xl border border-transparent focus:border-gray-200 focus:bg-white outline-none transition-all text-base font-medium"
            />
          </div>
          <div className="col-span-2">
            <input 
              required
              type="email" 
              placeholder="Email address"
              className="w-full px-6 py-4 bg-[#f5f5f7] rounded-2xl border border-transparent focus:border-gray-200 focus:bg-white outline-none transition-all text-base font-medium"
            />
          </div>
          <div className="col-span-2 space-y-4">
            <input 
              required
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-[#f5f5f7] rounded-2xl border border-transparent focus:border-gray-200 focus:bg-white outline-none transition-all text-base font-medium"
            />
            
            {/* Password Strength Bar */}
            <div className="space-y-3 px-2">
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${getStrengthColor()}`}
                  style={{ width: `${strengthPercent}%` }}
                />
              </div>
              
              {/* Checklist */}
              <div className="grid grid-cols-2 gap-y-2">
                <Requirement label="8+ characters" met={validation.length} />
                <Requirement label="One number" met={validation.number} />
                <Requirement label="One capital letter" met={validation.capital} />
                <Requirement label="One special character" met={validation.special} />
              </div>
            </div>
          </div>

          <div className="col-span-2 pt-6">
            <button 
              disabled={strengthCount < 4}
              className="w-full bg-[#1d1d1f] text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center space-x-2 group disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span>CREATE ACCOUNT</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        <div className="text-center pt-4">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-[#86868b]">Already have an account?</span>
            <button onClick={onLogin} className="font-bold hover:underline text-[#0071e3]">Sign in</button>
          </div>
          <p className="mt-8 text-[10px] text-[#86868b] leading-relaxed">
            By creating an account, you agree to our Terms of Service and Privacy Policy. [BRAND] uses on-device encryption to protect your data.
          </p>
        </div>
      </div>
    </div>
  );
};

const Requirement: React.FC<{ label: string; met: boolean }> = ({ label, met }) => (
  <div className={`flex items-center space-x-2 text-[11px] font-bold tracking-tight transition-colors ${met ? 'text-green-600' : 'text-[#86868b]'}`}>
    {met ? <CheckCircle2 size={12} /> : <Circle size={12} />}
    <span className="uppercase">{label}</span>
  </div>
);
