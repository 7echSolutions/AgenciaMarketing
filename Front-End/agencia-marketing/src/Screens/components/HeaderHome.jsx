

export default function HeaderHome() {
  return (    
    <>
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
           DarkSync
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
      </header>
    </>
  );
}