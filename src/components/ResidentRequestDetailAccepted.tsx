import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { ArrowLeft, MessageSquare, Phone } from 'lucide-react';
import { useNavigate } from 'react-router';

export function ResidentRequestDetailAccepted() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button onClick={() => navigate('/resident/requests')}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Request details</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          {/* Basic Info Card */}
          <Card>
            <div className="mb-3">What you asked for</div>
            <div className="mb-1">Sidewalk clearing – Today</div>
            <div className="text-gray-600 mb-2">309 W Hoover Ave, Ann Arbor, MI 48104</div>
            <div className="text-gray-500">Created today · 3:21 PM</div>
          </Card>

          {/* Status Card */}
          <Card>
            <div className="mb-4">Status</div>
            <div className="flex justify-center mb-3">
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full">
                Accepted by Diego
              </span>
            </div>
            <p className="text-gray-600 text-center">
              Diego has accepted your request and will come as soon as possible.
            </p>
          </Card>

          {/* Contact & Safety Card */}
          <Card>
            <div className="mb-3">Contact</div>
            <div className="text-gray-600 mb-4">Preferred contact: SMS</div>
            <div className="flex gap-3 mb-3">
              <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Message
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call
              </button>
            </div>
            <p className="text-gray-500">
              Use this only if you need to clarify something.
            </p>
          </Card>

          {/* Note Card */}
          <Card className="bg-gray-50 border-gray-200">
            <p className="text-gray-600 text-center">
              We'll mark this as completed when your volunteer finishes.
            </p>
          </Card>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}