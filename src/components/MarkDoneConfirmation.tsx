import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function MarkDoneConfirmation() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Mark as done</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4 pt-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="mb-2">Did you complete this task?</h2>
            <p className="text-gray-600">
              The resident will be notified that the work is done.
            </p>
          </div>

          <Card>
            <div className="mb-1">Sidewalk clearing – Today</div>
            <div className="text-gray-600">309 W Hoover Ave</div>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <div className="mb-2 text-green-900">You'll earn</div>
            <div className="text-green-900">+20 Community Points</div>
          </Card>

          <div className="space-y-3 pt-4">
            <button 
              onClick={() => navigate('/volunteer/task-completed')}
              className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl"
            >
              Mark as done
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="w-full text-gray-700 py-2"
            >
              Not yet
            </button>
          </div>
        </div>
      </div>

      <BottomNavInteractive mode="volunteer" />
    </PhoneFrame>
  );
}