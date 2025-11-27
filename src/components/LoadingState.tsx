import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNav } from './BottomNav';
import { Loader2 } from 'lucide-react';

export function LoadingState() {
  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-center">
        <div>Requests</div>
      </div>

      <div className="h-[calc(100%-124px)] bg-gray-50 flex flex-col items-center justify-center p-6">
        <Loader2 className="w-12 h-12 text-teal-600 animate-spin mb-4" />
        <p className="text-gray-600">Loading requests...</p>
      </div>

      <BottomNav active="requests" />
    </PhoneFrame>
  );
}
