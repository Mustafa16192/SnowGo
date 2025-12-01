import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { Home } from 'lucide-react';

export function ResidentMap() {
  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-center">
        <div>Map</div>
      </div>

      <div className="h-[calc(100%-124px)] bg-gray-50 relative">
        {/* Map Area */}
        <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden pb-32">
          {/* Street grid - simplified */}
          <div className="absolute inset-0">
            {/* Vertical streets */}
            <div className="absolute top-0 bottom-0 left-20 w-1 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-40 w-1 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-60 w-1 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 right-20 w-1 bg-gray-300"></div>
            
            {/* Horizontal streets */}
            <div className="absolute left-0 right-0 top-32 h-1 bg-gray-300"></div>
            <div className="absolute left-0 right-0 top-48 h-1 bg-gray-300"></div>
            <div className="absolute left-0 right-0 bottom-32 h-1 bg-gray-300"></div>
            <div className="absolute left-0 right-0 bottom-48 h-1 bg-gray-300"></div>
          </div>

          {/* Snow intensity overlays */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 opacity-40 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 opacity-50 rounded-full blur-2xl"></div>

          {/* Place Labels */}
          <div className="absolute top-20 left-8 text-gray-700">Downtown</div>
          <div className="absolute top-44 right-12 text-gray-700">Campus</div>
          <div className="absolute bottom-36 left-12 text-gray-700">Stadium</div>
          <div className="absolute top-56 left-32 text-gray-700">Main St</div>

          {/* Your area marker */}
          <div className="absolute top-40 left-48 flex flex-col items-center">
            <div className="bg-teal-600 rounded-full p-2 shadow-lg">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div className="mt-1 text-teal-900 bg-white px-2 py-0.5 rounded shadow-sm text-xs">
              Your area
            </div>
          </div>

          {/* Legend Card - positioned with more bottom margin to avoid navbar */}
          <div className="absolute bottom-20 left-4 right-4 z-10">
            <Card>
              <div className="flex items-center justify-around">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                  <span>Light snow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Heavier</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}