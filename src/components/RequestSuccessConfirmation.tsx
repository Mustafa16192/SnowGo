import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function RequestSuccessConfirmation() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-54px)] bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="mb-3 text-center">Request sent!</h1>
        <p className="text-gray-600 text-center mb-8">
          We've notified nearby volunteers. You'll get an alert when someone accepts.
        </p>

        <InteractiveCard className="w-full mb-6">
          <div className="mb-3">Your request</div>
          <div className="mb-1">Sidewalk clearing – Today</div>
          <div className="text-gray-600 mb-2">309 W Hoover Ave</div>
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            Waiting for volunteer
          </span>
        </InteractiveCard>

        <div className="space-y-3 w-full">
          <PrimaryButton 
            fullWidth
            onClick={() => navigate('/resident/home')}
          >
            Go to home
          </PrimaryButton>
          <PrimaryButton 
            fullWidth
            variant="ghost"
            onClick={() => navigate('/resident/request/1')}
          >
            View request details
          </PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}