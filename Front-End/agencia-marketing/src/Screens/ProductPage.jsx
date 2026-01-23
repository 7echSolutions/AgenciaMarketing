
export default function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-rich-black text-white font-body overflow-x-hidden selection:bg-primary/30">
      <header className="sticky top-0 z-50 w-full border-b border-[#37342a] bg-rich-black/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="material-symbols-outlined text-primary text-3xl">
              diamond
            </span>
            <h2 className="font-display text-lg font-bold tracking-tight text-white">
              Agency Masterclass
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden text-sm font-medium text-[#b7b19f] hover:text-white sm:block transition-colors">
              Log in
            </button>
            <button className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-rich-black">
              Get Access
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Split */}
      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Left Column: Locked Visual */}
        <div className="relative min-h-[50vh] w-full overflow-hidden bg-rich-surface lg:h-[calc(100vh-64px)] lg:w-1/2 group">
          {/* Background Image (Locked) */}
          <div
            className="absolute inset-0 h-full w-full scale-105 bg-cover bg-center bg-no-repeat opacity-60 blur-md transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop")',
            }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Lock UI */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 shadow-[0_0_40px_rgba(217,175,48,0.3)] backdrop-blur-sm ring-1 ring-primary/50">
              <span className="material-symbols-outlined text-5xl text-primary">
                lock
              </span>
            </div>
            <h3 className="mb-2 font-display text-2xl font-bold tracking-tight text-white">
              Member Only Content
            </h3>
            <p className="max-w-md text-sm text-gray-300">
              This premium module contains proprietary agency frameworks. Unlock
              access to view the full curriculum and downloadable assets.
            </p>
          </div>

          {/* Security Badge */}
          <div className="absolute bottom-10 left-10 hidden lg:block z-20">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md">
              <span className="material-symbols-outlined text-sm text-green-400">
                security
              </span>
              <span className="text-xs font-medium text-white">
                AES-256 Encrypted Content
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="flex w-full flex-col justify-center bg-rich-black lg:min-h-[calc(100vh-64px)] lg:w-1/2 border-l border-[#37342a]">
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
                <span className="text-[#8a8576]">Elevation</span>
              </h1>
              <p className="text-lg leading-relaxed text-[#b7b19f]">
                Unlock the exact blueprints used to scale luxury campaigns to
                8-figures. A masterclass in perception, pricing, and
                positioning.
              </p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 border-y border-[#37342a] py-6">
              <span className="text-4xl font-bold text-white">$1,200</span>
              <span className="text-xl text-[#62666b] line-through decoration-[#62666b] decoration-1">
                $2,500
              </span>
              <span className="ml-auto rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
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
                  <p className="text-[#e5e5e5]">{item}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col gap-4">
              <button className="gold-gradient-bg group relative flex h-14 w-full items-center justify-center gap-2 rounded-lg text-[#171612] shadow-lg shadow-primary/10 transition-all hover:shadow-primary/20 hover:-translate-y-0.5 overflow-hidden">
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
                <div className="flex items-center gap-1 text-[#62666b]">
                  <span className="material-symbols-outlined text-lg">
                    lock
                  </span>
                  <span class="text-xs font-medium">
                    Guaranteed Secure Checkout
                  </span>
                </div>
                <div className="flex items-center gap-3 grayscale opacity-60 transition-opacity hover:opacity-100">
                  <div className="flex h-6 items-center gap-1">
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
      <footer className="border-t border-[#37342a] bg-[#171612] py-8 text-center">
        <p className="text-sm text-[#b7b19f]">
          © 2026 Agency Masterclass. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs text-[#62666b]">
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
