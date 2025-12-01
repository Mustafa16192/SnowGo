import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { ChevronRight, Snowflake } from 'lucide-react';

export function VolunteerHomeEmpty() {
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

          {/* Block body text */}
          <p className="text-gray-600">Light snow on W Hoover Ave. No open requests right now.</p>

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
                <p className="text-yellow-800">3 inches of snow expected today. Volunteers needed.</p>
              </div>
            </div>
          </Card>

          {/* Helping Hands Section - Empty */}
          <div>
            <div className="mb-1">Helping Hands</div>
            <p className="text-gray-600 mb-3">These are nearby requests. You can see all requests in the Requests tab.</p>
            
            <Card className="text-center py-8">
              <div className="text-gray-400 mb-2">✓</div>
              <div className="mb-2 text-gray-700">All clear!</div>
              <p className="text-gray-600">No open requests near you right now.</p>
            </Card>
          </div>

          {/* Community Points Card */}
          <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
            <div className="mb-2">Community Points</div>
            <div className="mb-2">620 pts</div>
            <p className="text-gray-600 mb-1">You earn points each time you complete a request.</p>
            <p className="text-gray-600 mb-3">In future, these can be used for thanks or recognition from local partners.</p>
            <a href="#" className="text-teal-600 flex items-center gap-1">
              View details
              <ChevronRight className="w-4 h-4" />
            </a>
          </Card>
        </div>
      </div>

      <BottomNavInteractive mode="volunteer" />
    </PhoneFrame>
  );
}