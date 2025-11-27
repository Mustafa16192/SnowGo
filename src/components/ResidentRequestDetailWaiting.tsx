import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export function ResidentRequestDetailWaiting() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button 
          onClick={() => navigate('/resident/requests')}
          className="transition-all active:scale-90"
        >
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Request details</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          {/* Basic Info Card */}
          <InteractiveCard>
            <div className="mb-3">What you asked for</div>
            <div className="mb-1">Sidewalk clearing – Today</div>
            <div className="text-gray-600 mb-2">309 W Hoover Ave, Ann Arbor, MI 48104</div>
            <div className="text-gray-500">Created today · 3:21 PM</div>
          </InteractiveCard>

          {/* Status Card */}
          <InteractiveCard>
            <div className="mb-4">Status</div>
            <div className="flex justify-center mb-3">
              <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">
                Waiting for volunteer
              </span>
            </div>
            <p className="text-gray-600 text-center">
              We've notified nearby volunteers. You'll be alerted when someone accepts.
            </p>
          </InteractiveCard>

          {/* Actions Card */}
          <InteractiveCard>
            <PrimaryButton 
              fullWidth
              variant="outline"
              onClick={() => navigate('/resident/cancel-request')}
            >
              Cancel request
            </PrimaryButton>
            <p className="text-gray-500 text-center mt-3">
              Use this if you no longer need help.
            </p>
          </InteractiveCard>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}