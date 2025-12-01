import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ChevronRight, Snowflake, Home } from 'lucide-react';
import { useNavigate } from 'react-router';

export function ResidentHome() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-3">
          {/* Greeting */}
          <div className="pt-1">
            <h1 className="mb-1">Hi, Maya 👋</h1>
            <p className="text-gray-600">Here's your block today.</p>
          </div>

          {/* Block Overview Card */}
          <InteractiveCard>
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="mb-1">W Hoover Ave</div>
                <div className="text-gray-600">41°F · Light snow</div>
              </div>
              {/* Mini Map Preview */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden relative flex-shrink-0">
                {/* Street grid */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 bottom-0 left-5 w-px bg-gray-300"></div>
                  <div className="absolute top-0 bottom-0 right-5 w-px bg-gray-300"></div>
                  <div className="absolute left-0 right-0 top-5 h-px bg-gray-300"></div>
                  <div className="absolute left-0 right-0 bottom-5 h-px bg-gray-300"></div>
                </div>
                {/* Snow overlay */}
                <div className="absolute top-1 left-1 w-6 h-6 bg-blue-200 opacity-40 rounded-full blur-sm"></div>
                {/* Your location marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-teal-600 rounded-full p-0.5">
                    <Home className="w-2 h-2 text-white" />
                  </div>
                </div>
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
            <div className="mb-1.5">Need help clearing your sidewalk?</div>
            <p className="text-gray-600 mb-3">Tap below to ask a nearby volunteer for help.</p>
            <PrimaryButton 
              fullWidth
              onClick={() => navigate('/resident/request-help')}
            >
              Request Help
            </PrimaryButton>
          </InteractiveCard>

          {/* Your Requests Card */}
          <InteractiveCard clickable onClick={() => navigate('/resident/request/1')}>
            <div className="flex items-center justify-between mb-2">
              <div>Your requests</div>
              <button 
                onClick={(e) => { e.stopPropagation(); navigate('/resident/requests'); }} 
                className="text-teal-600 flex items-center gap-1 transition-all active:text-teal-700"
              >
                View all
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div>
              <div className="text-gray-900 mb-2">Sidewalk clearing – Today if possible</div>
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                Waiting for volunteer
              </div>
            </div>
          </InteractiveCard>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}