import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNav } from './BottomNav';
import { Card } from './Card';

export function VolunteerRequestsEmpty() {
  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-center">
        <div>Requests</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-6">
          {/* Open Requests Section - Empty */}
          <div>
            <div className="mb-3 text-gray-700">Open requests near you</div>
            
            <Card className="text-center py-8">
              <div className="text-gray-400 mb-2">✓</div>
              <div className="mb-2 text-gray-700">All clear!</div>
              <p className="text-gray-600">No open requests near you right now. Check back later!</p>
            </Card>
          </div>

          {/* Accepted Requests Section - Empty */}
          <div>
            <div className="mb-3 text-gray-700">Your accepted requests</div>
            
            <Card className="text-center py-8">
              <div className="text-gray-400 mb-2">📋</div>
              <div className="mb-2 text-gray-700">No active tasks</div>
              <p className="text-gray-600">When you accept a request, it will appear here.</p>
            </Card>
          </div>
        </div>
      </div>

      <BottomNav active="requests" />
    </PhoneFrame>
  );
}
