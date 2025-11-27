import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNav } from './BottomNav';
import { Card } from './Card';
import { ChevronRight, Snowflake } from 'lucide-react';

export function ResidentHomeEmpty() {
  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          {/* Greeting */}
          <div className="pt-2">
            <h1 className="mb-1">Hi, Maya 👋</h1>
            <p className="text-gray-600">Here's your block today.</p>
          </div>

          {/* Block Overview Card */}
          <Card>
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="mb-1">W Hoover Ave</div>
                <div className="text-gray-600">41°F · Light snow</div>
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-xs text-gray-500">Map</div>
              </div>
            </div>
            <a href="#" className="text-teal-600 flex items-center gap-1">
              View on map
              <ChevronRight className="w-4 h-4" />
            </a>
          </Card>

          {/* Snow Alert Card */}
          <Card className="border-l-4 border-yellow-400 bg-yellow-50">
            <div className="flex items-start gap-3">
              <Snowflake className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="mb-1 text-yellow-900">Snow Alert</div>
                <p className="text-yellow-800">3 inches of snow expected tonight.</p>
              </div>
            </div>
          </Card>

          {/* Your Requests Card - Empty State */}
          <Card className="text-center py-6">
            <div className="text-gray-400 mb-2">📋</div>
            <div className="mb-2 text-gray-700">No active requests</div>
            <p className="text-gray-600">You haven't requested any help yet.</p>
          </Card>

          {/* Request Help CTA Card */}
          <Card>
            <div className="mb-2">Need help clearing your sidewalk?</div>
            <p className="text-gray-600 mb-4">Tap below to ask a nearby volunteer for help.</p>
            <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl">
              Request Help
            </button>
          </Card>
        </div>
      </div>

      <BottomNav active="home" />
    </PhoneFrame>
  );
}
