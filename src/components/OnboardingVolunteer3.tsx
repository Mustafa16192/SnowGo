import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { PrimaryButton } from './PrimaryButton';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router';

export function OnboardingVolunteer3() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-54px)] bg-gray-50 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mb-6">
            <Calendar className="w-16 h-16 text-teal-600" />
          </div>
          <h1 className="mb-3">Help on your schedule</h1>
          <p className="text-gray-600 mb-2">
            Only accept requests when you have time.
          </p>
          <p className="text-gray-600">
            No pressure, no commitments. Help when it works for you.
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
            onClick={() => navigate('/signup/volunteer')}
          >
            Get started
          </PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}