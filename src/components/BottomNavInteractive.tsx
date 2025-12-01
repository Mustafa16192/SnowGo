import { Home, MapPin, FileText, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

interface BottomNavInteractiveProps {
  mode: 'resident' | 'volunteer';
}

export function BottomNavInteractive({ mode }: BottomNavInteractiveProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const basePath = mode === 'resident' ? '/resident' : '/volunteer';
  
  const getActive = () => {
    if (location.pathname.includes('/home')) return 'home';
    if (location.pathname.includes('/map')) return 'map';
    if (location.pathname.includes('/request') || location.pathname.includes('/task')) return 'requests';
    if (location.pathname.includes('/profile')) return 'profile';
    return 'home';
  };
  
  const active = getActive();

  const tabs = [
    { id: 'home', icon: Home, label: 'Home', path: `${basePath}/home` },
    { id: 'map', icon: MapPin, label: 'Map', path: `${basePath}/map` },
    { id: 'requests', icon: FileText, label: 'Requests', path: `${basePath}/requests` },
    { id: 'profile', icon: User, label: 'Profile', path: `${basePath}/profile` },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 px-4">
      <div className="flex items-center justify-around h-full pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-1 transition-all duration-150 active:scale-90"
            >
              <Icon 
                className={`w-6 h-6 transition-colors ${isActive ? 'text-teal-600' : 'text-gray-400'}`}
                strokeWidth={2}
              />
              <span className={`text-xs transition-colors ${isActive ? 'text-teal-600' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}