import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../../../data/data";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,11,18,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(41,121,255,0.12)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-sm font-mono font-medium text-foreground hover:text-[#2979FF] transition-colors">
          <span className="text-[#2979FF]">&lt;</span> Rene Tajos Jr.{" "}
          <span className="text-[#7C3AED]">/&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ background: "#2979FF", boxShadow: "0 0 0 0 rgba(41,121,255,0)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(41,121,255,0.4)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-muted-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ background: "rgba(8,11,18,0.98)", borderColor: "rgba(41,121,255,0.12)" }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-white text-center" style={{ background: "#2979FF" }}>
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

export default Nav;