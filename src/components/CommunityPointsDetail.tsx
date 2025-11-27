import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';

export function CommunityPointsDetail() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button onClick={() => navigate('/volunteer/home')}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Community Points</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          {/* Points Display Card */}
          <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200 text-center py-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-teal-600" />
              <div className="text-gray-600">Total Points</div>
            </div>
            <div className="mb-2">620 pts</div>
            <p className="text-gray-600">Keep up the great work!</p>
          </Card>

          {/* Explanation Card */}
          <Card>
            <div className="mb-2">How it works</div>
            <p className="text-gray-600 mb-2">You earn Community Points each time you complete a request.</p>
            <p className="text-gray-600">In the future, these points can be thanked or recognized by local partners.</p>
          </Card>

          {/* Recent Activities */}
          <div>
            <div className="mb-3">Recent activities</div>
            
            <Card className="mb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-teal-600 mb-1">+20 pts</div>
                  <div className="mb-1">Sidewalk clearing</div>
                  <div className="text-gray-500">309 W Hoover Ave</div>
                </div>
                <div className="text-gray-500">Today</div>
              </div>
            </Card>

            <Card className="mb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-teal-600 mb-1">+20 pts</div>
                  <div className="mb-1">Steps / porch</div>
                  <div className="text-gray-500">415 W Hoover Ave</div>
                </div>
                <div className="text-gray-500">Yesterday</div>
              </div>
            </Card>

            <Card className="mb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-teal-600 mb-1">+10 pts</div>
                  <div className="mb-1">Brush snow off car</div>
                  <div className="text-gray-500">215 S State St</div>
                </div>
                <div className="text-gray-500">2 days ago</div>
              </div>
            </Card>

            <Card>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-teal-600 mb-1">+20 pts</div>
                  <div className="mb-1">Clear driveway</div>
                  <div className="text-gray-500">512 E Madison St</div>
                </div>
                <div className="text-gray-500">3 days ago</div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <BottomNavInteractive mode="volunteer" />
    </PhoneFrame>
  );
}