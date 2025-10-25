import { useState } from 'react';
import { Shield, GraduationCap, User, Settings, Users, Upload, BarChart3, BookOpen, Video, Image, FileText, FolderGit2 } from 'lucide-react';

const TABS = [
  {
    key: 'admin',
    label: 'Admin',
    icon: Shield,
    color: 'text-emerald-400',
    points: [
      { icon: Settings, text: 'Organization and role management' },
      { icon: Users, text: 'User provisioning and access control' },
      { icon: BarChart3, text: 'Analytics across courses and activity' },
      { icon: Upload, text: 'Global asset libraries and storage policies' },
    ],
  },
  {
    key: 'instructor',
    label: 'Instructor',
    icon: BookOpen,
    color: 'text-sky-400',
    points: [
      { icon: BookOpen, text: 'Create modular courses and lessons' },
      { icon: Video, text: 'Upload videos with chapters and transcripts' },
      { icon: Image, text: 'Add photo galleries and visual notes' },
      { icon: FileText, text: 'Attach documents, slides, PDFs' },
    ],
  },
  {
    key: 'student',
    label: 'Student',
    icon: GraduationCap,
    color: 'text-violet-400',
    points: [
      { icon: FolderGit2, text: 'Submit projects with versioned files' },
      { icon: Video, text: 'Stream lessons with speed control' },
      { icon: FileText, text: 'Download notes, docs and assignments' },
      { icon: User, text: 'Track progress, badges and certificates' },
    ],
  },
];

export default function RoleTabs() {
  const [active, setActive] = useState('admin');

  const activeTab = TABS.find((t) => t.key === active);

  return (
    <div id="roles">
      <div className="flex flex-wrap gap-2">
        {TABS.map(({ key, label, icon: Icon, color }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all ${
              active === key
                ? 'border-neutral-700 bg-neutral-800 text-white'
                : 'border-neutral-800 bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/60'
            }`}
            aria-pressed={active === key}
          >
            <Icon className={`h-4 w-4 ${color}`} />
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
          <div className="flex items-center gap-3">
            {activeTab && <activeTab.icon className={`h-5 w-5 ${activeTab.color}`} />}
            <h3 className="text-lg font-semibold capitalize">{active} Capabilities</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {activeTab?.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-300">
                <p.icon className="mt-0.5 h-4 w-4 text-neutral-400" />
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <QuickAction label="Create Course" icon={BookOpen} />
            <QuickAction label="Upload Video" icon={Video} />
            <QuickAction label="Add Photos" icon={Image} />
            <QuickAction label="Attach Docs" icon={FileText} />
            <QuickAction label="Submit Project" icon={FolderGit2} />
            <QuickAction label="Manage Users" icon={Users} />
          </div>
          <p className="mt-4 text-xs text-neutral-400">These sample actions illustrate the core flows of photos, videos, documents and project management for each role.</p>
        </div>
      </div>
    </div>
  );
}

function QuickAction({ label, icon: Icon }) {
  return (
    <button className="group flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950/40 px-3 py-3 text-sm hover:border-neutral-700 hover:bg-neutral-900/70 transition-colors">
      <Icon className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
      <span className="text-neutral-300 group-hover:text-white">{label}</span>
    </button>
  );
}
