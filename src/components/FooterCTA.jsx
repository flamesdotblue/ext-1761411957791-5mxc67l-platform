import { Github, Mail } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="mt-20 md:mt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),rgba(0,0,0,0)_50%)]" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold">Launch your LMS today</h3>
            <p className="mt-2 text-neutral-400 max-w-2xl">A modern, interactive platform for education that unifies admin controls, instructor tools, and student experiences.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 transition-colors">Request Demo</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800/70 text-white px-5 py-3 transition-colors">
                <Github className="h-4 w-4" />
                View Code
              </a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800/70 text-white px-5 py-3 transition-colors">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
            <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} FutureLMS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
