
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface LoginProps {
  onBack: () => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
}

export const Login: React.FC<LoginProps> = ({ onBack, onSignUp, onForgotPassword }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login attempt successful! (Simulation)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white animate-reveal">
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 flex items-center space-x-2 text-sm font-bold text-[#86868b] hover:text-black transition-colors"
      >
        <ArrowLeft size={16} />
        <span>BACK</span>
      </button>

      <div className="w-full max-w-md space-y-12">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-[#1d1d1f] rounded-xl mx-auto mb-6" />
          <h1 className="text-4xl font-bold tracking-tight">Sign in.</h1>
          <p className="text-[#86868b] font-medium">Enter your details to continue.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative group">
              <input 
                required
                type="email" 
                placeholder="Email address"
                className="w-full px-6 py-4 bg-[#f5f5f7] rounded-2xl border border-transparent focus:border-gray-200 focus:bg-white outline-none transition-all text-lg font-medium placeholder:text-gray-400"
              />
            </div>
            <div className="relative group">
              <input 
                required
                type="password" 
                placeholder="Password"
                className="w-full px-6 py-4 bg-[#f5f5f7] rounded-2xl border border-transparent focus:border-gray-200 focus:bg-white outline-none transition-all text-lg font-medium placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-[#1d1d1f] text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center space-x-2 group">
              <span>CONTINUE</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        <div className="text-center space-y-4 pt-4">
          <button onClick={onForgotPassword} className="text-sm font-bold text-[#0071e3] hover:underline">Forgot password?</button>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-[#86868b]">New to [BRAND]?</span>
            <button onClick={onSignUp} className="font-bold hover:underline">Create account</button>
          </div>
        </div>
      </div>
    </div>
  );
};
