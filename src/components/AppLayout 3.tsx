import { Link } from 'react-router';
import { Snowflake, Users, HandHeart, TrendingUp, MapPin, Shield, ArrowRight, Sparkles } from 'lucide-react';

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
        <div className="container mx-auto px-6 pt-24 pb-40">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="bg-teal-500/20 backdrop-blur-md border border-teal-500/30 rounded-full p-4">
                <Snowflake className="w-10 h-10 text-teal-400" />
              </div>
            </div>
            
            <h1 className="mb-8 text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-teal-100 to-blue-100 bg-clip-text text-transparent leading-tight">
              SnowGo
            </h1>
            
            <p className="text-2xl text-gray-200 mb-6">
              Neighbors helping neighbors clear snow
            </p>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A community-driven mobile app connecting residents who need help with snow clearing 
              to volunteers who want to make a difference.
            </p>
          </div>

          {/* Quick Start Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto mb-24">
            {/* Resident Journey */}
            <Link 
              to="/splash" 
              className="group w-full bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-10 hover:bg-white/20 hover:border-teal-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
            >
              <div className="bg-teal-500/30 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-500/40 transition-all">
                <Users className="w-10 h-10 text-teal-300" />
              </div>
              
              <h3 className="mb-4 text-2xl font-semibold text-white">I Need Help</h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Request snow clearing assistance from volunteers in your area. 
                Free service for older adults and people with disabilities.
              </p>
              
              <div className="flex items-center text-teal-300 text-lg group-hover:text-teal-200 transition-colors">
                <span>Start as Resident</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Volunteer Journey */}
            <Link 
              to="/onboarding/volunteer/1" 
              className="group w-full bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-10 hover:bg-white/20 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="bg-blue-500/30 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/40 transition-all">
                <HandHeart className="w-10 h-10 text-blue-300" />
              </div>
              
              <h3 className="mb-4 text-2xl font-semibold text-white">I Want to Help</h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Volunteer to help neighbors with snow clearing. Earn Community Points 
                and make a real difference in your community.
              </p>
              
              <div className="flex items-center text-blue-300 text-lg group-hover:text-blue-200 transition-colors">
                <span>Start as Volunteer</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="text-center mb-16">
              <h2 className="mb-6 text-4xl font-bold text-teal-300">Features</h2>
              <p className="text-xl text-gray-400">Everything you need for community snow clearing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
                <div className="bg-teal-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-teal-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Real-time Map</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  See snow conditions and open requests in your neighborhood
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
                <div className="bg-purple-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Safe & Verified</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  All volunteers are from your local community and vetted.
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
                <div className="bg-yellow-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-yellow-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Community Points</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Volunteers earn points for each completed request and unlock perks.
                </p>
              </div>
            </div>
          </div>

          {/* Demo Journeys */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md border border-teal-500/30 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <span className="text-lg text-teal-400">Interactive Prototype</span>
              </div>
              <h2 className="mb-4 text-4xl font-bold">Experience the Full Journey</h2>
              <p className="text-xl text-gray-400">Click any screen to explore the complete user experience</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Onboarding */}
              <Link 
                to="/splash"
                className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-teal-500/60 transition-all hover:scale-105"
              >
                <div className="bg-gradient-to-br from-teal-500/30 to-blue-500/30 rounded-lg p-5 mb-5 aspect-video flex items-center justify-center">
                  <Snowflake className="w-14 h-14 text-teal-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Onboarding Flow</h3>
                <p className="text-base text-gray-300 mb-5 leading-relaxed">
                  Splash → Role Selection → 3-step Onboarding
                </p>
                <div className="flex items-center text-teal-300 text-base group-hover:text-teal-200 transition-colors">
                  <span>Start Journey</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Resident Flow */}
              <Link 
                to="/resident/home"
                className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-teal-500/60 transition-all hover:scale-105"
              >
                <div className="bg-gradient-to-br from-teal-500/30 to-green-500/30 rounded-lg p-5 mb-5 aspect-video flex items-center justify-center">
                  <Users className="w-14 h-14 text-teal-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Resident Mode</h3>
                <p className="text-base text-gray-300 mb-5 leading-relaxed">
                  Request help → Track status → Get notifications
                </p>
                <div className="flex items-center text-teal-300 text-base group-hover:text-teal-200 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Volunteer Flow */}
              <Link 
                to="/volunteer/home"
                className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-blue-500/60 transition-all hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg p-5 mb-5 aspect-video flex items-center justify-center">
                  <HandHeart className="w-14 h-14 text-blue-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Volunteer Mode</h3>
                <p className="text-base text-gray-300 mb-5 leading-relaxed">
                  Browse tasks → Accept → Earn points
                </p>
                <div className="flex items-center text-blue-300 text-base group-hover:text-blue-200 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Login Flow */}
              <Link 
                to="/login"
                className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-gray-500/60 transition-all hover:scale-105"
              >
                <div className="bg-gray-500/30 w-14 h-14 rounded-lg p-5 mb-5 aspect-video flex items-center justify-center">
                  <Users className="w-14 h-14 text-gray-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Login Flow</h3>
                <p className="text-base text-gray-300 mb-5 leading-relaxed">
                  Access the app by logging in as an existing user.
                </p>
                <div className="flex items-center text-gray-300 text-base group-hover:text-gray-200 transition-colors">
                  <span>Go to Login</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Resident Map */}
              <Link 
                to="/resident/map"
                className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-green-500/60 transition-all hover:scale-105"
              >
                <div className="bg-green-500/30 w-14 h-14 rounded-lg p-5 mb-5 aspect-video flex items-center justify-center">
                  <MapPin className="w-14 h-14 text-green-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Resident Map</h3>
                <p className="text-base text-gray-300 mb-5 leading-relaxed">
                  Explore the interactive map of snow conditions and requests.
                </p>
                <div className="flex items-center text-green-300 text-base group-hover:text-green-200 transition-colors">
                  <span>View Map</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Resident Request Help */}
              <Link 
                to="/resident/request-help"
                className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-red-500/60 transition-all hover:scale-105"
              >
                <div className="bg-red-500/30 w-14 h-14 rounded-lg p-5 mb-5 aspect-video flex items-center justify-center">
                  <Sparkles className="w-14 h-14 text-red-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Request Help</h3>
                <p className="text-base text-gray-300 mb-5 leading-relaxed">
                  Simulate the process of a resident requesting snow removal.
                </p>
                <div className="flex items-center text-red-300 text-base group-hover:text-red-200 transition-colors">
                  <span>Make Request</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Volunteer Tasks List */}
              <Link 
                to="/volunteer/requests"
                className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-yellow-500/60 transition-all hover:scale-105"
              >
                <div className="bg-yellow-500/30 w-14 h-14 rounded-lg p-5 mb-5 aspect-video flex items-center justify-center">
                  <HandHeart className="w-14 h-14 text-yellow-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Volunteer Tasks</h3>
                <p className="text-base text-gray-300 mb-5 leading-relaxed">
                  View the list of available snow removal tasks for volunteers.
                </p>
                <div className="flex items-center text-yellow-300 text-base group-hover:text-yellow-200 transition-colors">
                  <span>Browse Tasks</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Resident Requests List */}
              <Link 
                to="/resident/requests"
                className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-orange-500/60 transition-all hover:scale-105"
              >
                <div className="bg-orange-500/30 w-14 h-14 rounded-lg p-5 mb-5 aspect-video flex items-center justify-center">
                  <Users className="w-14 h-14 text-orange-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Resident Requests</h3>
                <p className="text-base text-gray-300 mb-5 leading-relaxed">
                  See a resident's historical and pending request list.
                </p>
                <div className="flex items-center text-orange-300 text-base group-hover:text-orange-200 transition-colors">
                  <span>View Requests</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <div className="text-3xl font-bold text-teal-300 mb-3">50+</div>
              <p className="text-lg text-gray-300">Interactive Screens</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <div className="text-3xl font-bold text-blue-300 mb-3">2</div>
              <p className="text-lg text-gray-300">User Modes</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <div className="text-3xl font-bold text-purple-300 mb-3">100%</div>
              <p className="text-lg text-gray-300">Functional Prototype</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 py-12">
          <div className="container mx-auto px-6 text-center text-gray-500 text-lg">
            <p>SnowGo - A complete mobile app design system by Figma Make</p>
          </div>
        </div>
      </div>
    </div>
