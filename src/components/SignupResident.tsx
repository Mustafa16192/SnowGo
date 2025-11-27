import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router';

export function SignupResident() {
  const navigate = useNavigate();

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
        <div className="flex-1 text-center mr-6">Create account</div>
      </div>

      <div className="h-[calc(100%-56px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-4">
          <div className="pt-2 pb-2">
            <h2 className="mb-1">Welcome to SnowGo</h2>
            <p className="text-gray-600">Let's set up your resident account</p>
          </div>

          <InteractiveCard>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full name</label>
                <input 
                  type="text" 
                  placeholder="Maya Patel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="maya@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone number</label>
                <input 
                  type="tel" 
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Home address</label>
                <input 
                  type="text" 
                  placeholder="309 W Hoover Ave"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-2 transition-all focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
                <input 
                  type="text" 
                  placeholder="Ann Arbor, MI 48104"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
              </div>
            </div>
          </InteractiveCard>

          <p className="text-gray-500 text-center px-4">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>

          <PrimaryButton 
            fullWidth
            onClick={() => navigate('/resident/home')}
          >
            Create account
          </PrimaryButton>

          <div className="text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="text-teal-600 transition-all active:text-teal-700">Log in</Link>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}