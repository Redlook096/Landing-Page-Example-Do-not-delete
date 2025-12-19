
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#86868B] pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-200 pb-12">
          <div className="space-y-4">
            <h4 className="text-[#1D1D1F] font-bold text-[11px] uppercase tracking-widest">[CATEGORY 1]</h4>
            <ul className="text-xs space-y-3 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">[LINK 1]</a></li>
              <li><a href="#" className="hover:text-black transition-colors">[LINK 2]</a></li>
              <li><a href="#" className="hover:text-black transition-colors">[LINK 3]</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#1D1D1F] font-bold text-[11px] uppercase tracking-widest">[CATEGORY 2]</h4>
            <ul className="text-xs space-y-3 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">[LINK 4]</a></li>
              <li><a href="#" className="hover:text-black transition-colors">[LINK 5]</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#1D1D1F] font-bold text-[11px] uppercase tracking-widest">[CATEGORY 3]</h4>
            <ul className="text-xs space-y-3 font-medium">
              <li><a href="#" className="hover:text-black transition-colors">[LINK 6]</a></li>
              <li><a href="#" className="hover:text-black transition-colors">[LINK 7]</a></li>
            </ul>
          </div>
          <div className="space-y-4 text-xs">
            <h4 className="text-[#1D1D1F] font-bold text-[11px] uppercase tracking-widest">[HEADQUARTERS]</h4>
            <p>[Full Address Line 1]<br/>[City, State, Zip Code]<br/>[Contact Email]</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-medium tracking-tight">
          <div className="mb-4 md:mb-0">
            © 2024 [BUSINESS NAME] INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-8 uppercase tracking-widest">
            <a href="#" className="hover:text-black transition-colors">[PRIVACY]</a>
            <a href="#" className="hover:text-black transition-colors">[TERMS]</a>
            <a href="#" className="hover:text-black transition-colors">[LEGAL]</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
