import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { AddressPickerSheet } from './AddressPickerSheet';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router';
import { useState } from 'react';

export function SignupVolunteer() {
  const navigate = useNavigate();
  const [isAddressSheetOpen, setIsAddressSheetOpen] = useState(false);
  const [address, setAddress] = useState('');

  const handleAddressConfirm = (selectedAddress: string, selectedCity: string) => {
    setAddress(`${selectedAddress}, ${selectedCity}`);
  };

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button 
          onClick={() => navigate(-1)}
          className="transition-all active:scale-90"
        >
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="flex-1 text-center mr-6">Create Account</h2>
      </div>
      
      <div className="h-[calc(100%-44px-56px)] overflow-y-auto bg-gray-50 relative">
        <div className="p-4 space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800">
              You're signing up as a <span className="font-semibold">Volunteer</span>
            </p>
          </div>

          <InteractiveCard>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all active:scale-[0.99]"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all active:scale-[0.99]"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all active:scale-[0.99]"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <input 
                  type="text" 
                  value={address}
                  onClick={() => setIsAddressSheetOpen(true)}
                  readOnly
                  className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all active:scale-[0.99] cursor-pointer"
                  placeholder="Tap to add your address"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all active:scale-[0.99]"
                  placeholder="Create a password"
                />
              </div>
            </div>
          </InteractiveCard>

          <p className="text-gray-600 text-sm">
            By creating an account, you agree to our Terms of Service and Privacy Policy.
          </p>

          <PrimaryButton 
            fullWidth
            onClick={() => navigate('/volunteer/home')}
          >
            Create Account
          </PrimaryButton>

          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-teal-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>

        {/* Address Picker Sheet */}
        <AddressPickerSheet
          isOpen={isAddressSheetOpen}
          onClose={() => setIsAddressSheetOpen(false)}
          onConfirm={handleAddressConfirm}
        />
      </div>
    </PhoneFrame>
  );
}