import { Link } from "react-router-dom";

export default function CoursesCard({ title, icon, desc }) {
  return (
    <div className="hover-lift relative flex flex-col justify-between p-8 rounded-lg bg-surface-dark border border-white/5 hover:border-primary/50 transition-all duration-300 h-full min-h-[320px] group">
      <div>
        <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">
            {icon}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="font-body text-sm text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="pt-8 mt-auto">
        <Link to="/courses" className="inline-block">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-white transition-colors">
            View Details
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 text-primary">
              arrow_forward
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
