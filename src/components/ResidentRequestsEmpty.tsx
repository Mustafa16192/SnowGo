import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNav } from './BottomNav';
import { Card } from './Card';

export function ResidentRequestsEmpty() {
  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-center">
        <div>My Requests</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 flex flex-col items-center justify-center min-h-[500px]">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="mb-2">No requests yet</h2>
          <p className="text-gray-600 text-center mb-8">
            You haven't requested any help yet. When you do, your requests will appear here.
          </p>
          
          <button className="bg-teal-600 text-white py-3 px-6 rounded-xl">
            Request Help
          </button>
        </div>
      </div>

      <BottomNav active="requests" />
    </PhoneFrame>
  );
}
