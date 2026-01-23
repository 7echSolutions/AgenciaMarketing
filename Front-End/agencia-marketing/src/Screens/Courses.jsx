<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom"; // <--- 1. Importamos esto
=======
import { Link } from "react-router-dom";

>>>>>>> 6e70bf9a2b76793b601c2baeaa00dd5df61f4914

const courses = [
  {
    id: 1,
    title: "Arquitectura de Software Avanzada",
    instructor: "Dra. Elena Ramírez",
    duration: "40 horas",
    rating: 4.9,
    category: "Ingeniería",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Estrategias de Marketing Digital",
    instructor: "Marco Valenzuela",
    duration: "25 horas",
    rating: 4.7,
    category: "Negocios",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    title: "Ciencia de Datos con Python",
    instructor: "Ing. Samuel Chen",
    duration: "55 horas",
    rating: 4.8,
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    title: "Diseño de Interfaces (UX/UI)",
    instructor: "Sofía Aranda",
    duration: "30 horas",
    rating: 4.9,
    category: "Diseño",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    title: "Ciberseguridad Empresarial",
    instructor: "Carlos Méndez",
    duration: "45 horas",
    rating: 4.6,
    category: "Seguridad",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
  },
];

export default function CoursesScreen() {
  const navigate = useNavigate(); // <--- 2. Inicializamos el hook

  return (
    <div className="min-h-screen bg-background-dark font-body text-white p-8 pb-20">
      {/* Header Refinado */}
      <header className="max-w-7xl mx-auto mb-16 pt-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-primary"></span>
          <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
            Formación de Élite
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
          Eleva tu <span className="text-primary italic">Maestría</span>{" "}
          Profesional
        </h1>

        <div className="max-w-3xl border-l border-primary-dark/50 pl-8">
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Explora una selección rigurosa de programas diseñados para líderes
            tecnológicos. Domina las competencias más críticas del mercado con
            una metodología de aprendizaje profundo y visión empresarial.
          </p>
        </div>
      </header>

      {/* Grid de Cursos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            // <--- 3. Agregamos el onClick aquí para que toda la tarjeta sea cliqueable
            onClick={() => navigate("/product")}
            className="group bg-surface-dark border border-white/5 rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-3 cursor-pointer"
          >
            {/* Imagen con Overlay */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-60"></div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-background-dark/40 backdrop-blur-md border border-white/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {course.category}
              </div>
            </div>

            {/* Contenido */}
            <div className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                {course.title}
              </h3>

              <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                <span className="material-symbols-outlined text-sm">
                  school
                </span>
                <span>Inst. {course.instructor}</span>
              </div>

              <div className="flex items-center justify-between py-4 border-y border-white/5 mb-8 text-sm">
                {/* Duración */}
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="material-symbols-outlined text-primary text-xl">
                    history_toggle_off
                  </span>
                  <span className="font-medium">{course.duration}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 text-yellow-400">
                  <span className="material-symbols-outlined text-xl fill-[1]">
                    star
                  </span>
                  <span className="font-bold text-base">{course.rating}</span>
                </div>
              </div>

              {/* Botón con Material Symbol */}
<<<<<<< HEAD
              <button className="w-full py-4 px-4 bg-primary-dark/5 border border-primary/30 text-primary font-bold rounded-xl flex items-center justify-center gap-3 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
=======
              <Link to="/product" className="w-full py-4 px-4 bg-primary-dark/5 border border-primary/30 text-primary-soft font-bold rounded-xl flex items-center justify-center gap-3 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
>>>>>>> 6e70bf9a2b76793b601c2baeaa00dd5df61f4914
                Explorar Programa
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-2">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
