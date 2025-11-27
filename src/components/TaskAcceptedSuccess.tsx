import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { Card } from './Card';
import { CheckCircle, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router';

export function TaskAcceptedSuccess() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-44px)] bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-teal-600" />
        </div>

        <h1 className="mb-3 text-center">You're helping!</h1>
        <p className="text-gray-600 text-center mb-8">
          The resident has been notified. Thank you for being a great neighbor!
        </p>

        <Card className="w-full mb-6">
          <div className="mb-1">Sidewalk clearing – Today</div>
          <div className="text-gray-600 mb-2">309 W Hoover Ave</div>
          <div className="flex items-center gap-2 text-gray-500">
            <Navigation className="w-4 h-4" />
            <span>0.4 miles away</span>
          </div>
        </Card>

        <div className="space-y-3 w-full">
          <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2">
            <Navigation className="w-5 h-5" />
            Get directions
          </button>
          <button 
            onClick={() => navigate('/volunteer/task/1/accepted')}
            className="w-full text-gray-700 py-2"
          >
            View task details
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}