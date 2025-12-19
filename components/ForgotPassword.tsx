
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';

interface ForgotPasswordProps {
  onBack: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white animate-reveal">
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 flex items-center space-x-2 text-sm font-bold text-[#86868b] hover:text-black transition-colors"
      >
        <ArrowLeft size={16} />
        <span>BACK TO LOGIN</span>
      </button>

      <div className="w-full max-w-md space-y-12">
        {!submitted ? (
          <>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[#f5f5f7] rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#1d1d1f]" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Reset password.</h1>
              <p className="text-[#86868b] font-medium">Enter your email and we'll send a link.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative group">
                <input 
                  required
                  type="email" 
                  placeholder="Email address"
                  className="w-full px-6 py-4 bg-[#f5f5f7] rounded-2xl border border-transparent focus:border-gray-200 focus:bg-white outline-none transition-all text-lg font-medium placeholder:text-gray-400"
                />
              </div>

              <button type="submit" className="w-full bg-[#1d1d1f] text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center space-x-2 group">
                <span>SEND RESET LINK</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 animate-reveal">
            <div className="w-16 h-16 bg-green-50 rounded-full mx-auto flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-green-600 -rotate-45" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Email sent.</h1>
              <p className="text-[#86868b] font-medium max-w-sm mx-auto">
                Check your inbox for instructions to reset your password.
              </p>
            </div>
            <button 
              onClick={onBack}
              className="w-full py-4 rounded-2xl border border-[#1d1d1f] font-bold text-lg hover:bg-[#f5f5f7] transition-all"
            >
              RETURN TO LOGIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
