import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { Users, HandHeart } from 'lucide-react';
import { useNavigate } from 'react-router';

export function RoleSelection() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-44px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-6 pt-12">
          <div className="text-center mb-8">
            <h1 className="mb-2">Welcome to SnowGo</h1>
            <p className="text-gray-600">How would you like to use SnowGo?</p>
          </div>

          {/* Resident Option */}
          <InteractiveCard clickable className="border-2 border-gray-200 hover:border-teal-600 transition-colors">
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div className="mb-2">I need help</div>
              <p className="text-gray-600 mb-4">Request snow clearing assistance from volunteers in your area</p>
              <PrimaryButton 
                fullWidth
                onClick={() => navigate('/onboarding/resident/1')}
              >
                Continue as Resident
              </PrimaryButton>
            </div>
          </InteractiveCard>

          {/* Volunteer Option */}
          <InteractiveCard clickable className="border-2 border-gray-200 hover:border-teal-600 transition-colors">
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-teal-600" />
              </div>
              <div className="mb-2">I want to help</div>
              <p className="text-gray-600 mb-4">Volunteer to help neighbors with snow clearing and earn points</p>
              <PrimaryButton 
                fullWidth
                variant="outline"
                onClick={() => navigate('/onboarding/volunteer/1')}
                className="border-2 border-teal-600 text-teal-600 active:bg-teal-50"
              >
                Continue as Volunteer
              </PrimaryButton>
            </div>
          </InteractiveCard>

          <p className="text-gray-500 text-center">
            You can switch between modes anytime in settings
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}