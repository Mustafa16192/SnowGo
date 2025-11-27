import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNav } from './BottomNav';
import { Card } from './Card';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export function CantHelpConfirmation() {
  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <ArrowLeft className="w-6 h-6 text-gray-900" />
        <div className="flex-1 text-center mr-6">Can't help</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4 pt-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="mb-2">Can't help this time?</h2>
            <p className="text-gray-600">
              This request will be made available to other volunteers.
            </p>
          </div>

          <Card>
            <div className="mb-1">Sidewalk clearing – Today</div>
            <div className="text-gray-600">309 W Hoover Ave</div>
          </Card>

          <Card className="bg-gray-50 border-gray-200">
            <p className="text-gray-600 text-center">
              No worries! You can help whenever it works for your schedule.
            </p>
          </Card>

          <div className="space-y-3 pt-4">
            <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-xl">
              Release this task
            </button>
            <button className="w-full text-gray-700 py-2">
              Keep it
            </button>
          </div>
        </div>
      </div>

      <BottomNav active="requests" />
    </PhoneFrame>
  );
}
