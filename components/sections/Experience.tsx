"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-title mb-4">{"// experience"}</p>
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Employment History
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-2 bottom-2 w-px"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-14"
              >
                {/* Icon bubble */}
                <div
                  className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: job.current
                      ? "var(--accent-glow)"
                      : "var(--bg-card)",
                    border: `1px solid ${job.current ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  <Briefcase
                    size={16}
                    style={{
                      color: job.current
                        ? "var(--accent)"
                        : "var(--text-muted)",
                    }}
                  />
                </div>

                <div className="card p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3
                        className="font-semibold text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {job.role}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: "rgba(74,222,128,0.12)",
                            color: "#4ade80",
                            border: "1px solid rgba(74,222,128,0.25)",
                          }}
                        >
                          Current
                        </span>
                      )}
                      <span
                        className="text-xs mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
