import Footer from "./Footer";

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
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-slate-100 selection:bg-primary selection:text-black">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 backdrop-blur-sm bg-background-dark/80">
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="material-symbols-outlined text-primary text-2xl">
            diamond
          </span>
          <h2 className="font-display text-xl font-bold tracking-widest">
            AURUM & CO.
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {["Agency", "Courses", "Journal", "Contact"].map((item) => (
            <a
              key={item}
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="gold-gradient-border hidden sm:flex h-10 px-6 items-center rounded-lg text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary/10 transition">
          Client Login
        </button>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center pt-24 px-6">
        <div className="max-w-4xl text-center space-y-8 animate-fade-in-up">
          <p className="text-primary text-xs font-bold tracking-[0.25em] uppercase opacity-80">
            Est. MMXXIV
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-glow">
            AURUM <span className="text-slate-500">&</span> CO.
          </h1>

          <h2 className="font-display italic text-lg md:text-2xl text-slate-300 max-w-xl mx-auto">
            Defining the Art of{" "}
            <span className="text-primary">Digital Influence</span> for the
            modern sovereign.
          </h2>
        </div>
      </section>

      {/* Courses */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-b from-transparent to-background-dark/60">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-16 gap-6 border-b border-white/5 pb-8">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Education
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                Exclusive Curricula
              </h2>
            </div>
            <p className="text-slate-400 max-w-md">
              Proprietary methodologies for brand scaling, perception management,
              and market dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group hover-lift flex flex-col justify-between p-8 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/40 transition min-h-[320px]"
              >
                <div>
                  <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">
                      {course.icon}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {course.desc}
                  </p>
                </div>

                <button className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-200 group-hover:text-primary transition">
                  View Details
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
