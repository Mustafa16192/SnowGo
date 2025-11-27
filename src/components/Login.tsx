import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { InteractiveCard } from './InteractiveCard';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router';

export function Login() {
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
        <div className="flex-1 text-center mr-6">Log in</div>
      </div>

      <div className="h-[calc(100%-56px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-6 pt-12">
          <div className="text-center">
            <h1 className="mb-2">Welcome back</h1>
            <p className="text-gray-600">Log in to continue to SnowGo</p>
          </div>

          <InteractiveCard>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="maya@example.com"
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

              <div className="text-right">
                <button className="text-teal-600 transition-all active:text-teal-700">Forgot password?</button>
              </div>
            </div>
          </InteractiveCard>

          <PrimaryButton 
            fullWidth
            onClick={() => navigate('/resident/home')}
          >
            Log in
          </PrimaryButton>

          <div className="text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/signup" className="text-teal-600 transition-all active:text-teal-700">Sign up</Link>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}