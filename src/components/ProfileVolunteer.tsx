import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { Mail, Phone, ChevronRight, Globe, HelpCircle, Shield, TrendingUp } from 'lucide-react';
import { Switch } from './ui/switch';
import { useNavigate } from 'react-router';

export function ProfileVolunteer() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-center">
        <div>Profile</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          {/* User Info Section */}
          <div className="flex flex-col items-center py-4">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-3">
              <div className="text-teal-700">MP</div>
            </div>
            <div className="mb-2">Maya Patel</div>
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
              Volunteer account
            </span>
          </div>

          {/* Personal Info Card */}
          <Card className="cursor-pointer" onClick={() => navigate('/edit-personal-info')}>
            <div className="mb-4">Personal info</div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <div>Email</div>
                  <div className="text-gray-600">maya@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <div>Phone</div>
                  <div className="text-gray-600">(555) 123-4567</div>
                </div>
              </div>
            </div>
            <button className="text-teal-600 flex items-center gap-1">
              Edit personal info
              <ChevronRight className="w-4 h-4" />
            </button>
          </Card>

          {/* Community Points Card */}
          <Card 
            className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200 cursor-pointer"
            onClick={() => navigate('/volunteer/community-points')}
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-teal-600" />
              <div>Community Points</div>
            </div>
            <div className="mb-2">620 pts</div>
            <p className="text-gray-600 mb-3">
              You earn points each time you complete a request.
            </p>
            <button className="text-teal-600 flex items-center gap-1">
              View details
              <ChevronRight className="w-4 h-4" />
            </button>
          </Card>

          {/* Notifications Card */}
          <Card>
            <div className="mb-4">Notifications</div>
            <div className="space-y-4 mb-3">
              <div className="flex items-center justify-between">
                <div className="text-gray-700">App notifications</div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-700">Text messages</div>
                <Switch defaultChecked />
              </div>
            </div>
            <p className="text-gray-500">
              We'll notify you when new requests appear near you.
            </p>
          </Card>

          {/* App Settings Card */}
          <Card>
            <div className="mb-4">App settings</div>
            <div className="space-y-3">
              <button className="flex items-center justify-between py-2 w-full">
                <div className="flex items-center gap-3 text-gray-700">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span>Language</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>English</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
              <button 
                onClick={() => navigate('/support')}
                className="flex items-center justify-between py-2 w-full"
              >
                <div className="flex items-center gap-3 text-gray-700">
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                  <span>Support & FAQ</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
              <button className="flex items-center justify-between py-2 w-full">
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span>Privacy policy</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </Card>

          {/* Log Out Button */}
          <div className="pt-4 pb-8 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-red-600 py-2"
            >
              Log out
            </button>
          </div>
        </div>
      </div>

      <BottomNavInteractive mode="volunteer" />
    </PhoneFrame>
  );
}