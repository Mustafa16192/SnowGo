import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { Card } from './Card';
import { X, CheckCircle } from 'lucide-react';

export function NotificationAccepted() {
  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-44px)] bg-gray-50">
        {/* Notification Banner */}
        <div className="bg-teal-600 text-white p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="mb-1">Good news!</div>
              <p className="text-teal-50">
                Diego accepted your request for sidewalk clearing at 309 W Hoover Ave.
              </p>
            </div>
            <button className="flex-shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>
          <button className="w-full bg-white text-teal-600 py-2 px-4 rounded-lg mt-3">
            View details
          </button>
        </div>

        {/* Home content underneath */}
        <div className="p-4 space-y-4">
          <div className="pt-2">
            <h1 className="mb-1">Hi, Maya 👋</h1>
            <p className="text-gray-600">Here's your block today.</p>
          </div>

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
          </Card>
        </div>
      </div>
    </PhoneFrame>
  );
}
