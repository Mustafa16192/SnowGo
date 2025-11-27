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
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 overflow-hidden">
      {showRestartButton && (
        <button
          type="button"
          onClick={() => navigate('/')}
          className="group fixed top-4 left-1/2 -translate-x-1/2 z-[999] pointer-events-auto cursor-pointer inline-flex items-center gap-3 rounded-full border-2 border-white/90 px-7 py-3 text-base font-semibold text-white bg-white/20 backdrop-blur-xl shadow-2xl shadow-teal-500/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/35 hover:shadow-teal-400/70 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Back to journey selection"
        >
          <span className="absolute inset-0 rounded-full border border-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <Sparkles className="relative h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-6" />
          <span className="relative">Back to start</span>
        </button>
      )}
      {/* Blurry background effects */}
      <div className="pointer-events-none absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Phone frame */}
      <div className="relative z-10 w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-900">
        {children}
      </div>
    </div>
  );
}
