import { BookOpen, Video, Image, FileText, FolderGit2, Star } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Course Builder',
    desc: 'Compose modules, lessons, quizzes and certificates. Structure content with drag-and-drop.',
    badge: 'Curriculum',
  },
  {
    icon: Video,
    title: 'Video Streaming',
    desc: 'Upload HD videos with transcripts, chapters, and adaptive playback for low bandwidth.',
    badge: 'Media',
  },
  {
    icon: Image,
    title: 'Photo Libraries',
    desc: 'Organize galleries, annotate images, and embed visual assets within lessons.',
    badge: 'Assets',
  },
  {
    icon: FileText,
    title: 'Documents & Notes',
    desc: 'Attach PDFs, slides, and docs. Rich text editor for notes and assignment handouts.',
    badge: 'Docs',
  },
  {
    icon: FolderGit2,
    title: 'Project Workspace',
    desc: 'Students submit versioned projects with links, files and peer reviews.',
    badge: 'Projects',
  },
];

export default function CourseGrid() {
  return (
    <div id="features">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Everything you need to teach and learn</h2>
          <p className="mt-2 text-neutral-400">Photos, videos, documents, and projects seamlessly integrated.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-emerald-400">
          <Star className="h-4 w-4" />
          <span className="text-sm">Production-ready UI</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <article key={i} className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/70 transition-colors p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <span className="text-xs px-2 py-1 rounded-full border border-neutral-700 text-neutral-300">{f.badge}</span>
            </div>
            <p className="mt-3 text-neutral-300 text-sm">{f.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-wide text-neutral-400 bg-neutral-950/50 border border-neutral-800 rounded px-2 py-1">Access Control</span>
              <span className="text-[10px] uppercase tracking-wide text-neutral-400 bg-neutral-950/50 border border-neutral-800 rounded px-2 py-1">Versioning</span>
              <span className="text-[10px] uppercase tracking-wide text-neutral-400 bg-neutral-950/50 border border-neutral-800 rounded px-2 py-1">Analytics</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
