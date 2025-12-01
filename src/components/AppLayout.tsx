import { Link } from 'react-router';
import { Snowflake, Users, HandHeart, TrendingUp, MapPin, Shield, ArrowRight, Sparkles, Palette } from 'lucide-react';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full p-3">
                <Snowflake className="w-8 h-8 text-teal-400" />
              </div>
            </div>
            
            <h1 className="mb-6 bg-gradient-to-r from-white via-teal-100 to-blue-100 bg-clip-text text-transparent">
              SnowGo
            </h1>
            
            <p className="text-xl text-gray-300 mb-4">
              Neighbors helping neighbors clear snow
            </p>
            
            <p className="text-gray-400 max-w-2xl mx-auto">
              A community-driven mobile app connecting residents who need help with snow clearing 
              to volunteers who want to make a difference.
            </p>
          </div>

          {/* Quick Start Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {/* Resident Journey */}
            <Link 
              to="/role-selection" 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
            >
              <div className="bg-teal-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-all">
                <Users className="w-8 h-8 text-teal-400" />
              </div>
              
              <h3 className="mb-3">I Need Help</h3>
              
              <p className="text-gray-400 mb-6">
                Request snow clearing assistance from volunteers in your area. 
                Free service for older adults and people with disabilities.
              </p>
              
              <div className="flex items-center text-teal-400 group-hover:text-teal-300 transition-colors">
                <span>Start as Resident</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Volunteer Journey */}
            <Link 
              to="/onboarding/volunteer/1" 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all">
                <HandHeart className="w-8 h-8 text-blue-400" />
              </div>
              
              <h3 className="mb-3">I Want to Help</h3>
              
              <p className="text-gray-400 mb-6">
                Volunteer to help neighbors with snow clearing. Earn Community Points 
                and make a real difference in your community.
              </p>
              
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span>Start as Volunteer</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-teal-400">Features</h2>
              <p className="text-gray-400">Everything you need for community snow clearing</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="bg-teal-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="mb-2">Real-time Map</h3>
                <p className="text-gray-400 text-sm">
                  See snow conditions and open requests in your neighborhood
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="mb-2">Safe & Verified</h3>
                <p className="text-gray-400 text-sm">
                  All volunteers are from your local community
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="bg-yellow-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="mb-2">Community Points</h3>
                <p className="text-gray-400 text-sm">
                  Volunteers earn points for each completed request
                </p>
              </div>
            </div>
          </div>

          {/* Demo Journeys */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-teal-400 text-sm">Interactive Prototype</span>
              </div>
              <h2 className="mb-4">Experience the Full Journey</h2>
              <p className="text-gray-400">Click any screen to explore the complete user experience</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Onboarding */}
              <Link 
                to="/splash"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-teal-500/50 transition-all hover:scale-105"
              >
                <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-lg p-4 mb-4 aspect-video flex items-center justify-center">
                  <Snowflake className="w-12 h-12 text-teal-400" />
                </div>
                <h3 className="mb-2">Onboarding Flow</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Splash → Role Selection → 3-step Onboarding
                </p>
                <div className="flex items-center text-teal-400 text-sm group-hover:text-teal-300">
                  <span>Start Journey</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Resident Flow */}
              <Link 
                to="/resident/home"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-teal-500/50 transition-all hover:scale-105"
              >
                <div className="bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-lg p-4 mb-4 aspect-video flex items-center justify-center">
                  <Users className="w-12 h-12 text-teal-400" />
                </div>
                <h3 className="mb-2">Resident Mode</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Request help → Track status → Get notifications
                </p>
                <div className="flex items-center text-teal-400 text-sm group-hover:text-teal-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Volunteer Flow */}
              <Link 
                to="/volunteer/home"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 mb-4 aspect-video flex items-center justify-center">
                  <HandHeart className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="mb-2">Volunteer Mode</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Browse tasks → Accept → Earn points
                </p>
                <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Design System Card */}
            <div className="mt-8 max-w-2xl mx-auto">
              <Link 
                to="/design-system"
                className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="mb-1">Design System</h3>
                    <p className="text-gray-400 text-sm">
                      View all colors, buttons, cards, and component states
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto mt-20 grid grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-teal-400 mb-2">50+</div>
              <p className="text-gray-400 text-sm">Interactive Screens</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-blue-400 mb-2">2</div>
              <p className="text-gray-400 text-sm">User Modes</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-purple-400 mb-2">100%</div>
              <p className="text-gray-400 text-sm">Functional Prototype</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
            <p>SnowGo - A complete mobile app design system by Figma Make</p>
          </div>
        </div>
      </div>
    </div>
  );
}