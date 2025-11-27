import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router';

export function VolunteerTaskDetailOpen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button onClick={() => navigate('/volunteer/requests')}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Help your neighbor</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          {/* Request Summary Card */}
          <Card>
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="mb-1">Sidewalk clearing – Today</div>
                <div className="text-gray-600 mb-1">309 W Hoover Ave, Ann Arbor, MI 48104</div>
                <div className="text-gray-500">0.4 miles away · Estimated 10 min</div>
              </div>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm ml-3 flex-shrink-0">
                Open
              </span>
            </div>
          </Card>

          {/* Details Card */}
          <Card>
            <div className="mb-3">Details</div>
            <div className="space-y-2 text-gray-700 mb-3">
              <div className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Requested: Today, 3:21 PM</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Urgency: Today</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Area: Sidewalk in front of home</span>
              </div>
            </div>
            <p className="text-gray-600">
              Please clear a safe path from the door to the sidewalk.
            </p>
          </Card>

          {/* Resident Preferences Card */}
          <Card>
            <div className="mb-2">Contact preference</div>
            <div className="text-gray-700 mb-3">SMS if you're on the way</div>
            <p className="text-gray-500">
              Follow this preference when you start the task.
            </p>
          </Card>

          {/* Map Preview Card */}
          <Card>
            <div className="mb-3">Location</div>
            <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
              {/* Simple map representation */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-teal-600 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-500 relative z-10">Map preview</div>
            </div>
            <button className="text-teal-600 flex items-center gap-1">
              <ExternalLink className="w-4 h-4" />
              Open in Maps
            </button>
          </Card>

          {/* Actions */}
          <div className="space-y-3 pb-4">
            <button 
              onClick={() => navigate('/volunteer/accept-task')}
              className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl"
            >
              Accept request
            </button>
            <button 
              onClick={() => navigate('/volunteer/requests')}
              className="w-full text-gray-700 py-2"
            >
              Back to list
            </button>
          </div>
        </div>
      </div>

      <BottomNavInteractive mode="volunteer" />
    </PhoneFrame>
  );
}