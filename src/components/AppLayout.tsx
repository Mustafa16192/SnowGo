import { Link } from 'react-router';
import {
  ArrowRight,
  Compass,
  Heart,
  MapPin,
  Play,
  Shield,
  Snowflake,
  Sparkles,
  Zap,
} from 'lucide-react';

export function AppLayout() {
  const flows = [
    {
      title: 'Onboarding',
      description: 'Splash → role selection → 3-step primer before home.',
      to: '/splash',
      icon: <Sparkles className="w-5 h-5 text-cyan-200" />,
    },
    {
      title: 'Resident',
      description: 'Request help, confirm, and track status on map & detail.',
      to: '/resident/home',
      icon: <MapPin className="w-5 h-5 text-teal-200" />,
    },
    {
      title: 'Volunteer',
      description: 'Browse nearby tasks, accept, mark done, and earn points.',
      to: '/volunteer/home',
      icon: <Zap className="w-5 h-5 text-amber-200" />,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#031625] via-[#062133] to-[#0a2f49] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.2),transparent_25%)] blur-3xl" />
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-400 via-cyan-400 to-blue-500 shadow-lg shadow-teal-500/40 flex items-center justify-center">
              <Snowflake className="w-5 h-5" />
            </div>
            SnowGo Mobile UI
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/role-selection"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold hover:border-white hover:-translate-y-0.5 transition shadow-md shadow-cyan-500/30"
            >
              Choose journey
              <Compass className="w-4 h-4" />
            </Link>
            <Link
              to="/splash"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#0a1a29] px-4 py-2 text-sm font-semibold shadow-lg shadow-teal-500/40 hover:-translate-y-0.5 transition"
            >
              Launch prototype
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-12 items-center pt-4 pb-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
              Live prototype · Tap into any flow
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] drop-shadow-[0_10px_40px_rgba(16,185,129,0.25)]">
                A bold landing into <br />
                resident & volunteer journeys.
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/75 max-w-2xl">
                Skip the Figma handoff—tap the real screens. Jump straight to the mode you need and click through every state of the SnowGo mobile experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/resident/home"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 px-6 py-3 text-base font-semibold text-[#062033] shadow-xl shadow-teal-500/40 hover:-translate-y-0.5 transition"
              >
                Start resident flow
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/volunteer/home"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white hover:border-white hover:-translate-y-0.5 transition"
              >
                Start volunteer flow
              </Link>
              <Link
                to="/role-selection"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-white/80 px-6 py-3 text-base font-semibold hover:text-white hover:-translate-y-0.5 transition"
              >
                Choose role
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <Sparkles className="w-4 h-4 text-cyan-200" /> Guided onboarding
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <MapPin className="w-4 h-4 text-teal-200" /> Map & requests
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <Shield className="w-4 h-4 text-purple-200" /> Profiles & support
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-teal-400/30 via-cyan-400/20 to-blue-500/20" />
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl shadow-teal-500/30 p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-300 to-blue-400 flex items-center justify-center text-[#062033] font-bold shadow-lg shadow-teal-500/40">
                    <Play className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Launch points</p>
                    <p className="font-semibold text-white">Jump into a flow</p>
                  </div>
                </div>
                <Link to="/splash" className="text-sm font-semibold text-cyan-100 hover:text-white transition">
                  Splash screen <ArrowRight className="w-4 h-4 inline" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/role-selection"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:-translate-y-1 transition shadow-lg shadow-cyan-500/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-cyan-100">Onboarding</span>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white" />
                  </div>
                  <p className="font-semibold text-white">Choose your journey</p>
                  <p className="text-sm text-white/60 mt-1">Splash → role select → guided steps</p>
                </Link>
                <Link
                  to="/resident/home"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:-translate-y-1 transition shadow-lg shadow-teal-500/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-teal-100">Resident</span>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white" />
                  </div>
                  <p className="font-semibold text-white">Request snow help</p>
                  <p className="text-sm text-white/60 mt-1">Home → request → confirmation → status</p>
                </Link>
                <Link
                  to="/volunteer/home"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:-translate-y-1 transition shadow-lg shadow-amber-500/15"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-amber-100">Volunteer</span>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white" />
                  </div>
                  <p className="font-semibold text-white">Pick up nearby tasks</p>
                  <p className="text-sm text-white/60 mt-1">Browse → detail → accept → complete</p>
                </Link>
                <Link
                  to="/support"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:-translate-y-1 transition shadow-lg shadow-purple-500/15"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-purple-100">Support</span>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white" />
                  </div>
                  <p className="font-semibold text-white">Profile & FAQs</p>
                  <p className="text-sm text-white/60 mt-1">Edit address, info, and read answers</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Flow cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-14">
          {flows.map((flow) => (
            <Link
              key={flow.title}
              to={flow.to}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl shadow-teal-500/25 hover:-translate-y-1 transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white/10">
                  {flow.icon}
                </div>
                <span className="text-xs font-semibold text-white/70">Quick launch</span>
              </div>
              <h3 className="text-2xl font-semibold">{flow.title}</h3>
              <p className="text-sm text-white/70 mt-2 leading-relaxed">{flow.description}</p>
            </Link>
          ))}
        </section>

        {/* Highlights */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-cyan-500/20">
            <MapPin className="w-6 h-6 text-teal-200 mb-3" />
            <h4 className="text-lg font-semibold">Live map states</h4>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">Map, request detail, waiting/accepted states, and confirmation screens ready to click.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-purple-500/20">
            <Shield className="w-6 h-6 text-purple-200 mb-3" />
            <h4 className="text-lg font-semibold">Profiles & notifications</h4>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">Resident/volunteer profiles, edit address, support, and notification previews.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-amber-500/20">
            <Heart className="w-6 h-6 text-amber-200 mb-3" />
            <h4 className="text-lg font-semibold">Reward moments</h4>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">Task accepted, completed, points detail, and success celebrations to show the win.</p>
          </div>
        </section>

        {/* CTA banner */}
        <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-teal-500/40 via-cyan-500/30 to-blue-600/40 p-8 shadow-2xl shadow-teal-500/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2),transparent_25%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.12),transparent_25%)]" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/75">Jump in</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Explore SnowGo without guessing.</h3>
              <p className="text-white/80 mt-2">Start resident or volunteer and click through the full mobile journey.</p>
              <div className="flex flex-wrap gap-3 mt-3 text-sm text-white/85">
                {['Splash', 'Role selection', 'Requests', 'Accept task', 'Support'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-3 py-1.5">
                    <ArrowRight className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/resident/home"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0a1a29] px-6 py-3 font-semibold shadow-lg hover:-translate-y-0.5 transition"
              >
                Resident flow
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/volunteer/home"
                className="inline-flex items-center gap-2 rounded-xl border border-white/60 text-white px-6 py-3 font-semibold hover:-translate-y-0.5 transition"
              >
                Volunteer flow
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-14 pt-8 border-t border-white/10 text-white/60 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>© 2025 SnowGo Mobile UI prototype.</div>
          <div className="flex items-center gap-6">
            <Link className="hover:text-white transition" to="/login">
              Login
            </Link>
            <Link className="hover:text-white transition" to="/signup">
              Sign up
            </Link>
            <Link className="hover:text-white transition" to="/support">
              Support
            </Link>
            <Link className="hover:text-white transition" to="/splash">
              Splash
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
