import { Home, MapPin, FileText, User } from 'lucide-react';

interface BottomNavProps {
  active: 'home' | 'map' | 'requests' | 'profile';
}

export function BottomNav({ active }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'map', icon: MapPin, label: 'Map' },
    { id: 'requests', icon: FileText, label: 'Requests' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 px-4">
      <div className="flex items-center justify-around h-full pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === active;
          return (
            <div key={tab.id} className="flex flex-col items-center gap-1">
              <Icon 
                className={`w-6 h-6 ${isActive ? 'text-teal-600' : 'text-gray-400'}`}
                strokeWidth={2}
              />
              <span className={`text-xs ${isActive ? 'text-teal-600' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
