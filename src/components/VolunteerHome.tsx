import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ChevronRight, Snowflake } from 'lucide-react';
import { useNavigate } from 'react-router';

export function VolunteerHome() {
  const navigate = useNavigate();

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
          <p className="text-gray-600">Light snow on W Hoover Ave. A few neighbors need help.</p>

          {/* Block Overview Card */}
          <InteractiveCard>
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="mb-1">W Hoover Ave</div>
                <div className="text-gray-600">41°F · Light snow</div>
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-xs text-gray-500">Map</div>
              </div>
            </div>
            <button 
              onClick={() => navigate('/volunteer/map')} 
              className="text-teal-600 flex items-center gap-1 transition-all active:text-teal-700"
            >
              View on map
              <ChevronRight className="w-4 h-4" />
            </button>
          </InteractiveCard>

          {/* Snow Alert Card */}
          <InteractiveCard className="border-l-4 border-yellow-400 bg-yellow-50">
            <div className="flex items-start gap-3">
              <Snowflake className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="mb-1 text-yellow-900">Snow Alert</div>
                <p className="text-yellow-800">3 inches of snow expected today. Volunteers needed.</p>
              </div>
            </div>
          </InteractiveCard>

          {/* Helping Hands Section */}
          <div>
            <div className="mb-1">Helping Hands</div>
            <p className="text-gray-600 mb-3">These are nearby requests. You can see all requests in the Requests tab.</p>
            <div className="text-gray-600 mb-3">3 open requests near you</div>
            
            {/* Task Card 1 */}
            <InteractiveCard className="mb-3" clickable onClick={() => navigate('/volunteer/task/1')}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="mb-1">Sidewalk clearing – Today if possible</div>
                  <div className="text-gray-600 mb-1">309 W Hoover Ave · 0.4 miles away</div>
                  <div className="text-gray-500">Estimated 10 min</div>
                </div>
                <PrimaryButton 
                  onClick={(e) => { e.stopPropagation(); navigate('/volunteer/accept-task'); }}
                  className="ml-3 flex-shrink-0 !py-2 !px-4"
                >
                  Help
                </PrimaryButton>
              </div>
            </InteractiveCard>

            {/* Task Card 2 */}
            <InteractiveCard clickable onClick={() => navigate('/volunteer/task/2')}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="mb-1">Sidewalk clearing – Today if possible</div>
                  <div className="text-gray-600 mb-1">415 W Hoover Ave · 0.6 miles away</div>
                  <div className="text-gray-500">Estimated 20 min</div>
                </div>
                <PrimaryButton 
                  onClick={(e) => { e.stopPropagation(); navigate('/volunteer/accept-task'); }}
                  className="ml-3 flex-shrink-0 !py-2 !px-4"
                >
                  Help
                </PrimaryButton>
              </div>
            </InteractiveCard>
          </div>

          {/* Community Points Card */}
          <InteractiveCard 
            clickable
            className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200" 
            onClick={() => navigate('/volunteer/community-points')}
          >
            <div className="mb-2">Community Points</div>
            <div className="mb-2">620 pts</div>
            <p className="text-gray-600 mb-1">You earn points each time you complete a request.</p>
            <p className="text-gray-600 mb-3">In future, these can be used for thanks or recognition from local partners.</p>
            <button className="text-teal-600 flex items-center gap-1 transition-all active:text-teal-700">
              View details
              <ChevronRight className="w-4 h-4" />
            </button>
          </InteractiveCard>
        </div>
      </div>

      <BottomNavInteractive mode="volunteer" />
    </PhoneFrame>
  );
}