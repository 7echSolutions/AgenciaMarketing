import React from "react";
import { Link } from "react-router-dom"; // Importamos Link por si quieres conectar el logo

export default function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background-dark text-white font-body overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:text-primary-soft transition-colors">
              diamond
            </span>
            <h2 className="font-display text-lg font-bold tracking-tight text-white">
              Dark<span className="text-accent">Sync</span> Masterclass
            </h2>
          </Link>

          <div className="flex items-center gap-4">
            <button className="hidden text-sm font-medium text-accent hover:text-white sm:block transition-colors">
              Log in
            </button>
            <button className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white border border-primary/20">
              Get Access
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Split */}
      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Left Column: Locked Visual */}
        <div className="relative min-h-[50vh] w-full overflow-hidden bg-surface-dark lg:h-[calc(100vh-64px)] lg:w-1/2 group">
          {/* Background Image (Locked) */}
          <div
            className="absolute inset-0 h-full w-full scale-105 bg-cover bg-center bg-no-repeat opacity-40 blur-md transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop")',
            }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Lock UI */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 shadow-[0_0_40px_rgba(128,0,32,0.4)] backdrop-blur-sm ring-1 ring-primary/40">
              <span className="material-symbols-outlined text-5xl text-primary">
                lock
              </span>
            </div>
            <h3 className="mb-2 font-display text-2xl font-bold tracking-tight text-white">
              Member Only Content
            </h3>
            <p className="max-w-md text-sm text-accent">
              This premium module contains proprietary agency frameworks. Unlock
              access to view the full curriculum and downloadable assets.
            </p>
          </div>

          {/* Security Badge (Silver Style) */}
          <div className="absolute bottom-10 left-10 hidden lg:block z-20">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="material-symbols-outlined text-sm text-accent">
                security
              </span>
              <span className="text-xs font-medium text-slate-300">
                AES-256 Encrypted Content
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="flex w-full flex-col justify-center bg-background-dark lg:min-h-[calc(100vh-64px)] lg:w-1/2 border-l border-white/5">
          <div className="mx-auto flex max-w-xl flex-col gap-8 px-6 py-12 lg:px-12 lg:py-20">
            {/* Header Group */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Exclusive Access
                </span>
              </div>
              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                Strategic Brand <br />
                <span className="text-accent">Elevation</span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-400">
                Unlock the exact blueprints used to scale luxury campaigns to
                8-figures. A masterclass in perception, pricing, and
                positioning.
              </p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 border-y border-white/5 py-6">
              <span className="text-4xl font-bold text-white">$1,200</span>
              <span className="text-xl text-slate-600 line-through decoration-slate-600 decoration-1">
                $2,500
              </span>
              <span className="ml-auto rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
                Limited Time
              </span>
            </div>

            {/* Features Checklist */}
            <div className="space-y-4">
              {[
                "Instant access to 50+ video modules and case studies.",
                "Downloadable white-label agency templates & contracts.",
                "Private mastermind community access (Lifetime).",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 pt-1">
                    <span className="material-symbols-outlined text-xl text-primary">
                      check_circle
                    </span>
                  </div>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col gap-4">
              {/* Botón con el nuevo degradado Wine/Bordó */}
              <button className="primary-gradient-bg group relative flex h-14 w-full items-center justify-center gap-2 rounded-lg text-white shadow-lg shadow-primary/10 transition-all hover:shadow-primary/30 hover:-translate-y-0.5 overflow-hidden">
                <span className="text-lg font-bold tracking-wide z-10">
                  Purchase Access Now
                </span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 z-10">
                  arrow_forward
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-none"></div>
              </button>

              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-1 text-slate-500">
                  <span className="material-symbols-outlined text-lg">
                    lock
                  </span>
                  <span className="text-xs font-medium">
                    Guaranteed Secure Checkout
                  </span>
                </div>
                <div className="flex items-center gap-3 grayscale opacity-40 transition-opacity hover:opacity-100">
                  <div className="flex h-6 items-center gap-1 text-white">
                    <span className="material-symbols-outlined text-2xl">
                      credit_card
                    </span>
                    <span className="material-symbols-outlined text-2xl">
                      account_balance_wallet
                    </span>
                    <span className="material-symbols-outlined text-2xl">
                      payments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/5 bg-background-dark py-8 text-center">
        <p className="text-sm text-slate-500">
          © 2026 DarkSync Masterclass. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs text-slate-600">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Support
          </a>
        </div>
      </footer>
    </div>
  );
}
