import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export function SupportFAQ() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Support & FAQ</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          <div className="pt-2">
            <h2 className="mb-2">How can we help?</h2>
            <p className="text-gray-600">Find answers to common questions</p>
          </div>

          <div className="space-y-2">
            <Card className="cursor-pointer">
              <div className="flex items-center justify-between py-2">
                <div>How do I request help?</div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card className="cursor-pointer">
              <div className="flex items-center justify-between py-2">
                <div>How long does it take?</div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card className="cursor-pointer">
              <div className="flex items-center justify-between py-2">
                <div>Is this service free?</div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card className="cursor-pointer">
              <div className="flex items-center justify-between py-2">
                <div>How are volunteers verified?</div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card className="cursor-pointer">
              <div className="flex items-center justify-between py-2">
                <div>Can I cancel a request?</div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card className="cursor-pointer">
              <div className="flex items-center justify-between py-2">
                <div>What are Community Points?</div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          </div>

          <Card className="bg-teal-50 border-teal-200">
            <div className="mb-3">Still need help?</div>
            <p className="text-gray-600 mb-4">Contact our support team</p>
            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg">
              Contact support
            </button>
          </Card>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}