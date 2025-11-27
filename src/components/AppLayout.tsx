import { Link } from 'react-router';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-12">
          <h1 className="mb-2">SnowGo Mobile App UI</h1>
          <p className="text-gray-600">Complete interactive mobile app design - click any screen to start</p>
        </div>

        {/* Quick Start Links */}
        <div className="mb-16 p-6 bg-white rounded-xl shadow-sm">
          <h2 className="mb-4">Quick Start</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/splash" className="text-teal-600 hover:text-teal-700 py-2 px-4 border border-teal-600 rounded-lg text-center">
              Start from Splash
            </Link>
            <Link to="/resident/home" className="text-teal-600 hover:text-teal-700 py-2 px-4 border border-teal-600 rounded-lg text-center">
              Resident Mode
            </Link>
            <Link to="/volunteer/home" className="text-teal-600 hover:text-teal-700 py-2 px-4 border border-teal-600 rounded-lg text-center">
              Volunteer Mode
            </Link>
            <Link to="/role-selection" className="text-teal-600 hover:text-teal-700 py-2 px-4 border border-teal-600 rounded-lg text-center">
              Choose Role
            </Link>
          </div>
        </div>

        {/* Flow Descriptions */}
        <div className="space-y-8">
          <div className="p-6 bg-purple-50 rounded-xl">
            <h3 className="mb-3 text-purple-900">Onboarding Flow</h3>
            <p className="text-purple-700 mb-4">Splash → Role Selection → Onboarding (3 steps) → Signup → Home</p>
            <Link to="/splash" className="inline-block bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700">
              Start Onboarding
            </Link>
          </div>

          <div className="p-6 bg-teal-50 rounded-xl">
            <h3 className="mb-3 text-teal-900">Resident Flow</h3>
            <p className="text-teal-700 mb-4">Home → Request Help → Confirmation → View Requests → Request Details</p>
            <Link to="/resident/home" className="inline-block bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700">
              Try Resident Mode
            </Link>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="mb-3 text-blue-900">Volunteer Flow</h3>
            <p className="text-blue-700 mb-4">Home → Browse Requests → Task Details → Accept → Mark Done → Points Earned</p>
            <Link to="/volunteer/home" className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Try Volunteer Mode
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
