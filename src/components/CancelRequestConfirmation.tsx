import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function CancelRequestConfirmation() {
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
        <div className="flex-1 text-center mr-6">Cancel request</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4 pt-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="mb-2">Cancel this request?</h2>
            <p className="text-gray-600">
              This request will be removed and volunteers will no longer see it.
            </p>
          </div>

          <InteractiveCard>
            <div className="mb-1">Sidewalk clearing – Today</div>
            <div className="text-gray-600">309 W Hoover Ave</div>
          </InteractiveCard>

          <div className="space-y-3 pt-4">
            <PrimaryButton 
              fullWidth
              variant="danger"
              onClick={() => navigate('/resident/request-cancelled')}
            >
              Yes, cancel request
            </PrimaryButton>
            <PrimaryButton 
              fullWidth
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Keep request
            </PrimaryButton>
          </div>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}