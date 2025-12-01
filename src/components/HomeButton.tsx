import { Home } from 'lucide-react';
import { useNavigate } from 'react-router';

export function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="absolute top-4 right-4 z-50 bg-gray-900/90 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 active:scale-95 transition-all duration-150 group"
      title="Back to Home"
    >
      <Home className="w-5 h-5 group-hover:text-teal-400 transition-colors" />
    </button>
  );
}
