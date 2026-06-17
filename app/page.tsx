"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import BackgroundOrbs from "@/components/BackgroundOrbs";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") setIsDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
      <BackgroundOrbs />
      <Sidebar />
      <Navbar onThemeToggle={() => setIsDark(!isDark)} isDark={isDark} />

      <main
        className="lg:ml-[280px] pt-14 relative"
        style={{ minHeight: "100vh", zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <About />
          <div
            className="mx-6 lg:mx-10 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <Projects />
          <div
            className="mx-6 lg:mx-10 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <Skills />
          <div
            className="mx-6 lg:mx-10 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <Experience />
          <div
            className="mx-6 lg:mx-10 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <Education />
          <div
            className="mx-6 lg:mx-10 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <Contact />
        </div>
      </main>
    </div>
  );
}
