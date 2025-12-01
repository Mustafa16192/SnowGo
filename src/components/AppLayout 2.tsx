import { useState } from 'react';
import { Link } from 'react-router';
import { 
  Snowflake, 
  ArrowRight, 
  ChevronRight, 
  Layers,
  Zap,
  ShieldCheck,
  Globe,
  Smartphone
} from 'lucide-react';
import { cn } from '@/components/ui/utils';

export function AppLayout() {
  // Enforce dark mode for the "B2B SaaS" vibe
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-teal-500/30 overflow-x-hidden">
      {/* Background Grid & Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-600 opacity-10 blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-teal-400/20 to-teal-400/5 border border-teal-400/20 flex items-center justify-center">
               <Snowflake className="w-4 h-4 text-teal-400" />
            </div>
            <span className="font-semibold text-sm tracking-wide text-zinc-200">SnowGo <span className="text-zinc-600">Enterprise</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">Sign in</Link>
            <Link 
              to="/splash"
              className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
            >
              Launch Prototype
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-teal-400 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
            <span className="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
            Announcing SnowGo 2.0 Public Beta
            <ArrowRight className="w-3 h-3 ml-1 opacity-50" />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
            Orchestrate local <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">snow logistics.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The intelligent platform connecting residential nodes with distributed volunteer networks. Real-time geospatial matching, automated dispatch, and community verification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/resident/home"
              className="group relative h-12 px-8 rounded-full bg-gradient-to-b from-teal-500 to-teal-600 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_-5px_rgba(20,184,166,0.4)] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start as Resident <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/volunteer/home"
              className="h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 hover:text-white transition-all w-full sm:w-auto"
            >
              <Smartphone className="w-4 h-4" />
              Volunteer View
            </Link>
          </div>

          {/* "Mockup" / Visual Element */}
          <div className="mt-20 relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <div className="ml-4 w-64 h-5 rounded-md bg-white/5 text-[10px] text-zinc-600 flex items-center px-2 font-mono">
                  snowgo.app/dashboard/map-view
                </div>
              </div>
              <div className="aspect-[16/9] bg-[#050505] flex items-center justify-center relative p-8">
                 {/* Abstract UI representation */}
                 <div className="grid grid-cols-3 gap-4 w-full h-full">
                    <div className="col-span-1 bg-white/[0.03] border border-white/5 rounded-lg p-4 flex flex-col gap-3">
                       <div className="w-12 h-12 rounded bg-teal-500/20 border border-teal-500/30 mb-2"></div>
                       <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                       <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                       <div className="mt-auto h-20 w-full bg-gradient-to-b from-transparent to-teal-500/10 rounded border border-teal-500/10"></div>
                    </div>
                    <div className="col-span-2 bg-white/[0.03] border border-white/5 rounded-lg p-4 relative overflow-hidden">
                       {/* Map simulation */}
                       <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.1]"></div>
                       <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                       <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-zinc-600 rounded-full"></div>
                       <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-zinc-600 rounded-full"></div>
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div 
            className="md:col-span-2 p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors group"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Scale, Local Impact</h3>
            <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
              Our infrastructure scales automatically to handle blizzard-level traffic spikes. 
              Connect thousands of neighbors simultaneously with sub-millisecond latency.
            </p>
          </div>

          {/* Feature 2 */}
          <div 
            className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors group"
          >
             <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Instant Dispatch</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Automated volunteer matching based on proximity and equipment availability.
            </p>
          </div>

           {/* Feature 3 */}
           <div 
            className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors group"
          >
             <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Role Based</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Distinct, optimized interfaces for both requestors and service providers.
            </p>
          </div>

          {/* Feature 4 */}
          <div 
            className="md:col-span-2 p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise-grade Trust</h3>
            <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
              Built-in identity verification and community reputation systems ensure safety 
              and reliability for every interaction on the platform.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 mt-32 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
           <div>© 2025 SnowGo Technologies Inc.</div>
           <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">GitHub</a>
           </div>
        </div>
      </main>
    </div>
  );
}
