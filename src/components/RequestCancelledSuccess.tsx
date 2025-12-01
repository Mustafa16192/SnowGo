import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function RequestCancelledSuccess() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-54px)] bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-gray-600" />
        </div>

        <h1 className="mb-3 text-center">Request cancelled</h1>
        <p className="text-gray-600 text-center mb-8">
          Your request has been cancelled. You can create a new request anytime.
        </p>

        <div className="space-y-3 w-full">
          <button 
            onClick={() => navigate('/resident/home')}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl"
          >
            Go to home
          </button>
          <button 
            onClick={() => navigate('/resident/requests')}
            className="w-full text-gray-700 py-2"
          >
            View all requests
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}