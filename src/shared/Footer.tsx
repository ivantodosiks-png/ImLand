export default function Footer() {
  return (
    <footer className="relative pb-14 pt-10">
      <div className="container-xl">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-semibold tracking-tight">
                <span className="text-gradient">ImLand</span>
              </div>
              <div className="mt-2 text-sm text-white/65">
                ImLand — where cool becomes a country.
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-white/55">
              <a className="hover:text-white" href="#">
                X
              </a>
              <a className="hover:text-white" href="#">
                GitHub
              </a>
              <a className="hover:text-white" href="#">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 h-px w-full hairline" />
          <div className="mt-6 text-xs text-white/55">
            © {new Date().getFullYear()} ImLand • Fictional nation portal
          </div>
        </div>
      </div>
    </footer>
  );
}

