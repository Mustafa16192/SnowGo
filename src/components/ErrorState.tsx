import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNav } from './BottomNav';
import { WifiOff } from 'lucide-react';

export function ErrorState() {
  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-center">
        <div>Home</div>
      </div>

      <div className="h-[calc(100%-124px)] bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6">
          <WifiOff className="w-10 h-10 text-gray-400" />
        </div>

        <h2 className="mb-2 text-center">Connection error</h2>
        <p className="text-gray-600 text-center mb-8">
          We can't connect to the network. Please check your internet connection and try again.
        </p>

        <div className="space-y-3 w-full">
          <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl">
            Try again
          </button>
          <button className="w-full text-gray-700 py-2">
            Go offline
          </button>
        </div>
      </div>

      <BottomNav active="home" />
    </PhoneFrame>
  );
}
