"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lock, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxSrc]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
        className="card overflow-hidden"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-5 flex items-start justify-between gap-4 transition-colors duration-200"
          style={{
            backgroundColor: open ? "rgba(77,159,255,0.04)" : "transparent",
          }}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span
                className="text-xs mono px-2 py-0.5 rounded"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  color: "var(--text-muted)",
                }}
              >
                {project.role}
              </span>
              {project.nda && (
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Lock size={10} />
                  NDA
                </span>
              )}
            </div>

            <h3
              className="font-semibold text-base leading-snug"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h3>
          </div>

          <ChevronDown
            size={18}
            className="flex-shrink-0 mt-1 transition-transform duration-300"
            style={{
              color: "var(--text-muted)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-5 pb-5"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <p
                  className="text-sm leading-relaxed mt-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span
                        className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      <span style={{ color: "var(--text-secondary)" }}>
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {project.images && project.images.length > 0 && (
                  <>
                    <div
                      className="h-px mt-5"
                      style={{ backgroundColor: "var(--border)" }}
                    />
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.images.map((src, idx) => (
                        <div
                          key={idx}
                          className="relative rounded-lg overflow-hidden cursor-zoom-in transition-transform duration-300 hover:scale-[1.03]"
                          style={{
                            aspectRatio: "16/9",
                            backgroundColor:
                              project.imageBg ?? "var(--bg-secondary)",
                          }}
                          onClick={() => setLightboxSrc(src)}
                        >
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            fill
                            className={
                              project.id === "trackmate"
                                ? "object-contain"
                                : "object-cover"
                            }
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {project.nda ? (
                  <p
                    className="text-xs mt-4 flex items-center gap-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Lock size={11} />
                    Project under NDA — no public link available
                  </p>
                ) : project.external_link ? (
                  <a
                    href={project.external_link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs mt-4 transition-colors duration-200"
                    style={{ color: "var(--accent)" }}
                  >
                    <ExternalLink size={12} />
                    {project.external_link.name}
                  </a>
                ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {lightboxSrc && (
              <motion.div
                key="lightbox"
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={() => setLightboxSrc(null)}
              >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={lightboxSrc}
                    alt={project.title}
                    style={{
                      backgroundColor: project.imageBg ?? "initial",
                    }}
                    className="block max-w-[90vw] max-h-[88vh] rounded-xl shadow-2xl object-contain"
                  />
                  <button
                    onClick={() => setLightboxSrc(null)}
                    className="absolute top-3 right-3 p-1.5 rounded-lg transition-opacity duration-150 hover:opacity-80"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.55)",
                      color: "#fff",
                    }}
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-title mb-4">{"// projects"}</p>
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Work & Projects
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          Click a card to expand details, highlights, and tech stack.
        </p>

        <div className="grid grid-cols-1 gap-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
