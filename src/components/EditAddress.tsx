import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { BottomNavInteractive } from './BottomNavInteractive';
import { Card } from './Card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export function EditAddress() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Edit address</div>
      </div>

      <div className="h-[calc(100%-124px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          <p className="text-gray-600 pt-2">
            Update your home address. We use this when you request help.
          </p>

          <Card>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Street address</label>
                <input 
                  type="text" 
                  defaultValue="309 W Hoover Ave"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">City</label>
                <input 
                  type="text" 
                  defaultValue="Ann Arbor"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2">State</label>
                  <input 
                    type="text" 
                    defaultValue="MI"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2">ZIP</label>
                  <input 
                    type="text" 
                    defaultValue="48104"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Card>

          <button 
            onClick={() => navigate(-1)}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl"
          >
            Save changes
          </button>

          <button 
            onClick={() => navigate(-1)}
            className="w-full text-gray-700 py-2"
          >
            Cancel
          </button>
        </div>
      </div>

      <BottomNavInteractive mode="resident" />
    </PhoneFrame>
  );
}