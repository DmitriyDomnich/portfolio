"use client";

import { Github, Linkedin, Mail, MapPin, Circle } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import Image from "next/image";
import profilePic from "../public/images/photo_2026-06-16_13-22-56.jpg";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const activeSection = useActiveSection(NAV_ITEMS.map((n) => n.id));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className="hidden lg:flex flex-col fixed top-0 left-0 h-screen z-30"
      style={{
        width: "var(--sidebar-width)",
        backgroundColor: "var(--bg-secondary)",
        borderRight: "1px solid var(--border)",
      }}
    >
      <div className="flex flex-col items-center pt-12 px-6">
        <div className="animated-border rounded-2xl mb-5">
          <div
            className="size-60 rounded-2xl flex items-center overflow-hidden justify-center text-2xl font-bold"
            style={{
              background: "linear-gradient(135deg, #1a2040 0%, #0f1420 100%)",
              color: "var(--accent)",
            }}
          >
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="bg-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <h1
          className="text-lg font-bold text-center"
          style={{ color: "var(--text-primary)" }}
        >
          Dmytro D.
        </h1>
        <p
          className="text-sm font-medium mt-1 text-center"
          style={{ color: "var(--accent)" }}
        >
          Full-Stack Developer
        </p>

        <div className="flex items-center gap-1.5 mt-2">
          <Circle size={7} fill="currentColor" className="text-green-400" />
          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Available for work
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-1.5">
          <MapPin size={11} style={{ color: "var(--text-muted)" }} />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Ukraine
          </span>
        </div>
      </div>

      <div
        className="mx-6 my-6 h-px"
        style={{ backgroundColor: "var(--border)" }}
      />

      <nav className="flex flex-col gap-1 px-4 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-left w-full"
              style={{
                color: isActive ? "var(--accent)" : "var(--text-secondary)",
                backgroundColor: isActive
                  ? "var(--accent-glow)"
                  : "transparent",
              }}
            >
              <span
                className="nav-dot flex-shrink-0"
                style={{
                  background: isActive ? "var(--accent)" : "var(--text-muted)",
                }}
              />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="px-6 pb-8">
        <div
          className="mx-0 mb-5 h-px"
          style={{ backgroundColor: "var(--border)" }}
        />
        <div className="flex justify-center gap-3">
          {/* <a
            href="mailto:d.domnich2017@gmail.com"
            className="p-2 rounded-lg transition-all duration-200"
            style={{
              color: "var(--text-secondary)",
              backgroundColor: "var(--bg-card)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}
            title="Email"
          >
            <Mail size={18} />
          </a> */}
          <a
            href="https://github.com/DimaDomnich"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200"
            style={{
              color: "var(--text-secondary)",
              backgroundColor: "var(--bg-card)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200"
            style={{
              color: "var(--text-secondary)",
              backgroundColor: "var(--bg-card)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p
          className="text-center mt-4 text-xs mono"
          style={{ color: "var(--text-muted)" }}
        >
          © 2026 Dmytro Domnich
        </p>
      </div>
    </aside>
  );
}
