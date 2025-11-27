import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { useNavigate } from 'react-router';

export function VolunteerRequests() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-center">
        <div>Requests</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-6">
          {/* Open Requests Section */}
          <div>
            <div className="mb-3 text-gray-700">Open requests near you</div>
            
            {/* Open Request Card 1 */}
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

            {/* Open Request Card 2 */}
            <InteractiveCard className="mb-3" clickable onClick={() => navigate('/volunteer/task/2')}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="mb-1">Clear steps / porch – Within 2 days</div>
                  <div className="text-gray-600 mb-1">215 S State St · 0.6 miles away</div>
                  <div className="text-gray-500">Estimated 15 min</div>
                </div>
                <PrimaryButton 
                  onClick={(e) => { e.stopPropagation(); navigate('/volunteer/accept-task'); }}
                  className="ml-3 flex-shrink-0 !py-2 !px-4"
                >
                  Help
                </PrimaryButton>
              </div>
            </InteractiveCard>

            {/* Open Request Card 3 */}
            <InteractiveCard clickable onClick={() => navigate('/volunteer/task/3')}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="mb-1">Brush snow off my car – No rush</div>
                  <div className="text-gray-600 mb-1">512 E Madison St · 0.8 miles away</div>
                  <div className="text-gray-500">Estimated 5 min</div>
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

          {/* Accepted Requests Section */}
          <div>
            <div className="mb-3 text-gray-700">Your accepted requests</div>
            
            {/* Accepted Request Card */}
            <InteractiveCard 
              clickable
              className="bg-teal-50 border-teal-100" 
              onClick={() => navigate('/volunteer/task/4/accepted')}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="mb-1">Sidewalk clearing – Today</div>
                  <div className="text-gray-600 mb-2">415 W Hoover Ave</div>
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                    In progress
                  </span>
                </div>
                <PrimaryButton 
                  onClick={(e) => { e.stopPropagation(); navigate('/volunteer/mark-done'); }}
                  className="ml-3 flex-shrink-0 !py-2 !px-3"
                >
                  Mark done
                </PrimaryButton>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </div>

      <BottomNavInteractive mode="volunteer" />
    </PhoneFrame>
  );
}