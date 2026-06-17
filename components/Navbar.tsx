"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({
  onThemeToggle,
  isDark,
}: {
  onThemeToggle: () => void;
  isDark: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const activeSection = useActiveSection(NAV_ITEMS.map((n) => n.id));

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    setScrolled(scrollTop > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      <header
        className="fixed top-0 left-0 lg:left-[280px] right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,14,26,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between px-6 h-14">
          {/* Mobile: brand name */}
          <span
            className="lg:hidden font-bold text-sm mono whitespace-nowrap"
            style={{ color: "var(--accent)" }}
          >
            Dmytro D.
          </span>

          {/* Right side: theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-card)",
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className="lg:hidden p-2 rounded-lg"
              style={{
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-card)",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden px-4 pb-4 flex flex-col gap-1"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    backgroundColor: isActive
                      ? "var(--accent-glow)"
                      : "transparent",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}
