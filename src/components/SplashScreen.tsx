import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { Snowflake } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/role-selection');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-[calc(100%-44px)] bg-gradient-to-br from-teal-500 to-teal-600 flex flex-col items-center justify-center">
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-lg">
          <Snowflake className="w-16 h-16 text-teal-600" />
        </div>
        <h1 className="text-white mb-2">SnowGo</h1>
        <p className="text-teal-100">Neighbors helping neighbors</p>
      </div>
    </PhoneFrame>
  );
}