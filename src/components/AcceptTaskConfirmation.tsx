import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function AcceptTaskConfirmation() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button 
          onClick={() => navigate(-1)}
          className="transition-all active:scale-90"
        >
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Accept request</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4 pt-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-teal-600" />
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="mb-2">Accept this request?</h2>
            <p className="text-gray-600">
              The resident will be notified that you're coming to help.
            </p>
          </div>

          <InteractiveCard>
            <div className="mb-1">Sidewalk clearing – Today</div>
            <div className="text-gray-600 mb-2">309 W Hoover Ave</div>
            <div className="text-gray-500">Estimated 10 min</div>
          </InteractiveCard>

          <InteractiveCard className="bg-teal-50 border-teal-200">
            <div className="mb-2 text-teal-900">You'll earn</div>
            <div className="text-teal-900">+20 Community Points</div>
          </InteractiveCard>

          <div className="space-y-3 pt-4">
            <PrimaryButton 
              fullWidth
              onClick={() => navigate('/volunteer/task-accepted')}
            >
              Accept and help
            </PrimaryButton>
            <PrimaryButton 
              fullWidth
              variant="ghost"
              onClick={() => navigate(-1)}
            >
              Go back
            </PrimaryButton>
          </div>
        </div>
      </div>

      <BottomNavInteractive mode="volunteer" />
    </PhoneFrame>
  );
}