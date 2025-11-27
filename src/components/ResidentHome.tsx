import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ChevronRight, Snowflake } from 'lucide-react';
import { useNavigate } from 'react-router';

export function ResidentHome() {
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
              onClick={() => navigate('/resident/map')} 
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
                <p className="text-yellow-800">3 inches of snow expected tonight.</p>
              </div>
            </div>
          </InteractiveCard>

          {/* Request Help CTA Card */}
          <InteractiveCard>
            <div className="mb-2">Need help clearing your sidewalk?</div>
            <p className="text-gray-600 mb-4">Tap below to ask a nearby volunteer for help.</p>
            <PrimaryButton 
              fullWidth
              onClick={() => navigate('/resident/request-help')}
            >
              Request Help
            </PrimaryButton>
          </InteractiveCard>

          {/* Your Requests Card */}
          <InteractiveCard clickable onClick={() => navigate('/resident/request/1')}>
            <div className="mb-3">Your requests</div>
            <div className="mb-2">
              <div className="mb-1">Sidewalk clearing – Today if possible</div>
              <div className="text-gray-600">Status: Waiting for volunteer</div>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); navigate('/resident/requests'); }} 
              className="text-teal-600 flex items-center gap-1 transition-all active:text-teal-700"
            >
              View all
              <ChevronRight className="w-4 h-4" />
            </button>
          </InteractiveCard>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}