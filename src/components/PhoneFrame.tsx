import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Sparkles } from 'lucide-react';

interface PhoneFrameProps {
  children: ReactNode;
  showRestartButton?: boolean;
}

export function PhoneFrame({ children, showRestartButton = true }: PhoneFrameProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 relative overflow-hidden">
      {showRestartButton && (
        <button
          type="button"
          onClick={() => navigate('/')}
          className="group absolute top-6 left-6 z-20 inline-flex items-center gap-2 rounded-full border border-teal-300/80 px-4 py-2 text-sm font-semibold text-teal-100 bg-white/10 backdrop-blur-md shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:text-white hover:shadow-teal-500/35 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
          aria-label="Back to journey selection"
        >
          <span className="absolute inset-0 rounded-full border border-teal-200/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-pulse"></span>
          <Sparkles className="relative h-4 w-4 text-teal-100 transition-transform duration-300 group-hover:rotate-6" />
          <span className="relative">Choose journey</span>
        </button>
      )}
      {/* Blurry background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Phone frame */}
      <div className="relative z-10 w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-900">
        {children}
      </div>
    </div>
  );
}
