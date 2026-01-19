import Footer from "./components/Footer";
import HeaderHome from "./components/HeaderHome";
import CoursesCard from "./components/CoursesCard";

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
  }
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-slate-100 selection:bg-primary selection:text-black">
      
     <HeaderHome />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center pt-24 px-6">
        <div className="max-w-4xl text-center space-y-8 animate-fade-in-up">
          <p className="text-primary text-xs font-bold tracking-[0.25em] uppercase opacity-80">
            Est. MMXXIV
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-glow">
            Dar<span className="text-primary  ">kS</span>ync.
          </h1>

          <h2 className="font-display italic text-lg md:text-2xl text-slate-300 max-w-xl mx-auto">
            Construyendo{" "}
            <span className="text-primary">Influencia y Posicionamiento</span> mediante inteligencia artificial
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
                Nuestros Cursos
              </h2>
            </div>
            <p className="text-slate-400 max-w-md">
Metodologías propias potenciadas con inteligencia artificial para identificar y corregir ineficiencias de marketing, optimizar la percepción de marca y consolidar dominio de mercado.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {courses.map((course, index) => (
    <CoursesCard
      key={index}
      title={course.title}
      icon={course.icon}
      desc={course.desc}
    />
  ))}
</div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
