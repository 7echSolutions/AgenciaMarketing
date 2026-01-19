import React from "react";

const courses = [
  {
    title: "Brand Alchemy",
    icon: "science",
    desc: "Mastering high-ticket perception and transforming commodities into luxury assets.",
  },
  {
    title: "The Silent Launch",
    icon: "rocket_launch",
    desc: "Advanced strategies for organic growth without paid acquisition or aggressive noise.",
  },
  {
    title: "Legacy Design",
    icon: "account_balance",
    desc: "Architectural frameworks for building brands that outlast temporary market trends.",
  },
  {
    title: "Digital Sovereign",
    icon: "crown",
    desc: "Complete ownership of your market niche through authority and content precision.",
  },
  {
    title: "Social Prestige",
    icon: "hotel_class",
    desc: "Cultivating an undeniable aura of status that commands attention in any room.",
  },
  {
    title: "Omnichannel Mastery",
    icon: "hub",
    desc: "Synchronizing your narrative across all mediums for a seamless, ubiquitous presence.",
  },
  {
    title: "Elite Networking",
    icon: "handshake",
    desc: "The art of entering closed circles and forging alliances with high-net-worth individuals.",
  },
  {
    title: "Iconic Content",
    icon: "auto_awesome",
    desc: "Producing timeless visual and written assets that define the standard for your industry.",
  },
];

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-slate-100 selection:bg-primary selection:text-black">
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 backdrop-blur-sm bg-background-dark/80 transition-all duration-300">
        <div className="flex items-center gap-3 text-white cursor-pointer">
          <span className="material-symbols-outlined text-primary text-2xl">
            diamond
          </span>
          <h2 className="font-display text-xl font-bold tracking-widest text-white">
            AURUM & CO.
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {["Agency", "Courses", "Journal", "Contact"].map((item) => (
            <a
              key={item}
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors duration-300"
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="gold-gradient-border hidden sm:flex items-center justify-center h-10 px-6 rounded-lg text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary/10 transition-colors">
            Client Login
          </button>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center pt-20 px-6">
        <div className="flex flex-col items-center text-center max-w-4xl space-y-8 animate-fade-in-up">
          <p className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-80">
            Est. MMXXIV
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white text-glow">
            AURUM <span className="text-slate-600">&</span> CO.
          </h1>
          <h2 className="font-display italic text-lg md:text-2xl text-slate-300 max-w-xl leading-relaxed">
            Defining the Art of{" "}
            <span className="text-primary">Digital Influence</span> for the
            modern sovereign.
          </h2>
          <div className="pt-12">
            <div className="flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <span className="text-[10px] uppercase tracking-widest text-slate-400">
                Explore Curricula
              </span>
              <span className="material-symbols-outlined text-primary">
                arrow_downward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-b from-transparent to-background-dark/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">
                Education
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Exclusive Curricula
              </h2>
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-md">
              Proprietary methodologies for brand scaling, perception
              management, and market dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group hover-lift relative flex flex-col justify-between p-8 rounded-lg bg-surface-dark border border-white/5 hover:border-primary/30 transition-all duration-300 h-full min-h-[320px]"
              >
                <div>
                  <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">
                      {course.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="font-body text-sm text-slate-400 leading-relaxed">
                    {course.desc}
                  </p>
                </div>
                <div className="pt-8 mt-auto">
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-background-dark py-12 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <span className="material-symbols-outlined text-primary text-lg">
              diamond
            </span>
            <span className="text-xs text-slate-400 tracking-wider">
              © 2026 AURUM & CO.
            </span>
          </div>
          <div className="flex gap-6">
            {/* Social Icons (SVG) */}
            <a
              className="text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              <span className="sr-only">IG</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a
              className="text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              <span className="sr-only">LI</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
