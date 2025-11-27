import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export function ResidentRequestHelp() {
  const navigate = useNavigate();
  const [selectedHelp, setSelectedHelp] = useState('sidewalk');
  const [selectedUrgency, setSelectedUrgency] = useState('today');

  const helpOptions = [
    { id: 'sidewalk', icon: '🚶', label: 'Clear my sidewalk' },
    { id: 'driveway', icon: '🚗', label: 'Clear my driveway' },
    { id: 'steps', icon: '🏠', label: 'Clear steps / porch' },
    { id: 'car', icon: '❄️', label: 'Brush snow off my car' },
  ];

  const urgencyOptions = [
    { id: 'today', label: 'Today if possible' },
    { id: 'twodays', label: 'Within the next 2 days' },
    { id: 'norush', label: 'No rush' },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button 
          onClick={() => navigate('/resident/home')}
          className="transition-all active:scale-90"
        >
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Request Help</div>
      </div>

      <div className="h-[calc(100%-180px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-6">
          {/* What do you need help with */}
          <div>
            <div className="mb-3">What do you need help with?</div>
            <div className="space-y-2">
              {helpOptions.map((option) => (
                <InteractiveCard
                  key={option.id}
                  clickable
                  selected={selectedHelp === option.id}
                  onClick={() => setSelectedHelp(option.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedHelp === option.id ? 'bg-teal-100 text-teal-700' : 'bg-gray-100'
                    }`}>
                      {option.icon}
                    </div>
                    <div>{option.label}</div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>

          {/* Where should the volunteer go */}
          <div>
            <div className="mb-3">Where should the volunteer go?</div>
            <InteractiveCard className="border-2 border-green-200 bg-green-50">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="mb-1">309 W Hoover Ave</div>
                  <div className="text-gray-600">Ann Arbor, MI 48104</div>
                  <div className="flex items-center gap-1 mt-2 text-green-700">
                    <Check className="w-4 h-4" />
                    <span>This is my address</span>
                  </div>
                </div>
              </div>
            </InteractiveCard>
            <button className="text-teal-600 mt-2 transition-all active:text-teal-700">Change address</button>
          </div>

          {/* How soon do you need help */}
          <div>
            <div className="mb-3">How soon do you need help?</div>
            <div className="space-y-2">
              {urgencyOptions.map((option) => (
                <InteractiveCard
                  key={option.id}
                  clickable
                  selected={selectedUrgency === option.id}
                  onClick={() => setSelectedUrgency(option.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedUrgency === option.id 
                        ? 'border-teal-600 bg-teal-600' 
                        : 'border-gray-300'
                    }`}>
                      {selectedUrgency === option.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div>{option.label}</div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>

          {/* Send Request Button */}
          <PrimaryButton 
            fullWidth
            onClick={() => navigate('/resident/request-success')}
          >
            Send Request
          </PrimaryButton>

          {/* Helper text */}
          <p className="text-gray-500 text-center">
            Your request will be sent to nearby volunteers. You'll get a notification when someone accepts.
          </p>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}