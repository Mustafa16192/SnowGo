import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { Card } from './Card';
import { Award } from 'lucide-react';
import { useNavigate } from 'react-router';

export function TaskCompletedSuccess() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-44px)] bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
          <Award className="w-12 h-12 text-yellow-600" />
        </div>

        <h1 className="mb-3 text-center">Great work!</h1>
        <p className="text-gray-600 text-center mb-8">
          Thank you for helping your neighbor. You've earned Community Points!
        </p>

        <Card className="w-full mb-6 bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
          <div className="text-center py-4">
            <div className="mb-2">You earned</div>
            <div className="mb-2">+20 pts</div>
            <div className="text-gray-600">Total: 640 pts</div>
          </div>
        </Card>

        <Card className="w-full mb-6">
          <div className="mb-1">Task completed</div>
          <div className="text-gray-600 mb-2">Sidewalk clearing</div>
          <div className="text-gray-500">309 W Hoover Ave</div>
        </Card>

        <div className="space-y-3 w-full">
          <button 
            onClick={() => navigate('/volunteer/requests')}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl"
          >
            Find more tasks
          </button>
          <button 
            onClick={() => navigate('/volunteer/home')}
            className="w-full text-gray-700 py-2"
          >
            Go to home
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}