import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router';

export function ResidentRequests() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-center">
        <div>My Requests</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-3">
          {/* Add New Request Button */}
          <PrimaryButton 
            fullWidth
            onClick={() => navigate('/resident/request-help')}
            className="flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Request
          </PrimaryButton>

          {/* Request Card 1 */}
          <InteractiveCard 
            clickable
            onClick={() => navigate('/resident/request/1')}
          >
            <div className="mb-2">Sidewalk clearing – Today if possible</div>
            <div className="text-gray-600 mb-2">309 W Hoover Ave</div>
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Waiting for volunteer
              </span>
              <span className="text-gray-500">Today · 3:21 PM</span>
            </div>
          </InteractiveCard>

          {/* Request Card 2 */}
          <InteractiveCard 
            clickable
            onClick={() => navigate('/resident/request/2/accepted')}
          >
            <div className="mb-2">Clear steps / porch – Within 2 days</div>
            <div className="text-gray-600 mb-2">309 W Hoover Ave</div>
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Accepted
              </span>
              <span className="text-gray-500">Yesterday · 2:15 PM</span>
            </div>
          </InteractiveCard>

          {/* Request Card 3 */}
          <InteractiveCard clickable>
            <div className="mb-2">Clear my driveway – Today if possible</div>
            <div className="text-gray-600 mb-2">309 W Hoover Ave</div>
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Completed
              </span>
              <span className="text-gray-500">2 days ago</span>
            </div>
          </InteractiveCard>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}