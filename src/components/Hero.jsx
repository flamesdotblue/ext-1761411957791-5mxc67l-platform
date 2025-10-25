import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950" />

      <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-4 py-2 text-xs md:text-sm">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-neutral-300">Technology-forward, interactive LMS</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            Futuristic Learning Management System
          </h1>
          <p className="mt-4 md:mt-6 text-neutral-300 text-base md:text-lg">
            Manage courses, resources, and projects with a unified platform for admins, instructors, and students.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#roles" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 transition-colors">
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800/70 text-white px-5 py-3 transition-colors">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
