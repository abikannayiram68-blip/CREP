import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About CREP" },
  { href: "#publications", label: "Publications" },
  { href: "#portfolio", label: "Workshop & Events" },
  { href: "#research", label: "Research & Development" },
  { href: "#collaborate", label: "Collaborations" },
  { href: "#cta", label: "Connect Us" },
  { href: "#payments", label: "Payments" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = "hero";

      navItems.forEach((item) => {
        const sectionId = item.href.slice(1);
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // Close mobile menu
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl container-px flex h-16 md:h-20 items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setOpen(false);
            if (window.location.pathname === "/") {
              scrollToSection("hero");
            }
          }}
          className="flex items-center gap-2.5 group"
          aria-label="CREP home"
        >
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-hero text-primary-foreground shadow-soft group-hover:scale-105 transition-transform">
            <BookOpen className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-display text-lg md:text-xl font-bold tracking-tight">
            CREP
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href.slice(1))}
              className={`text-sm font-medium transition-colors story-link ${
                activeSection === item.href.slice(1)
                  ? "text-foreground story-link-active"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          {/* Removed Get in touch button */}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border bg-background/60"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl container-px py-4 flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`px-3 py-3 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-foreground/80 hover:bg-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
