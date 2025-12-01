import { ReactNode } from 'react';
import { HomeButton } from './HomeButton';

interface PhoneFrameProps {
  children: ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 relative overflow-hidden">
      {/* Blurry background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Home Button */}
      <HomeButton />
      
      {/* iPhone 15 Pro frame */}
      <div className="relative z-10 w-[393px] h-[852px] bg-black rounded-[55px] shadow-2xl overflow-hidden p-[3px]">
        {/* iPhone bezel */}
        <div className="w-full h-full bg-white rounded-[52px] overflow-hidden relative">
          {/* Dynamic Island */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-full z-50"></div>
          
          {children}
        </div>
      </div>
    </div>
  );
}