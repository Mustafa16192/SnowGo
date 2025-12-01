import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { PrimaryButton } from './PrimaryButton';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router';

export function OnboardingResident3() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-54px)] bg-gray-50 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-16 h-16 text-teal-600" />
          </div>
          <h1 className="mb-3">Safe and friendly</h1>
          <p className="text-gray-600 mb-2">
            All volunteers are from your local community.
          </p>
          <p className="text-gray-600">
            Free service built on neighborly kindness and mutual support.
          </p>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
          </div>
          <PrimaryButton 
            fullWidth
            onClick={() => navigate('/signup')}
          >
            Get started
          </PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}