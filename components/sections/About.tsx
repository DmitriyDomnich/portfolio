"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "Remote", label: "Availability" },
  { value: "SaaS", label: "Products" },
  { value: "B2", label: "English" },
  { value: "∞", label: "Coffee" },
];

export default function About() {
  return (
    <section id="about" className="pt-24 pb-16 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-title mb-4">{"// about"}</p>
        <h2
          className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Full-Stack Developer
          <br />
          <span style={{ color: "var(--accent)" }}>
            Frontend, Backend & Cloud Infrastructure.
          </span>
        </h2>

        <div className="space-y-4" style={{ color: "var(--text-secondary)" }}>
          <p>
            Four years of commercial experience building full-stack platforms
            end-to-end — from complex frontend UIs to backend APIs, real-time
            systems, and cloud infrastructure.
          </p>
          <p>
            Frontend:{" "}
            <span style={{ color: "var(--text-primary)" }}>
              React, Next.js, TypeScript
            </span>
            . Mostly data-heavy work — operational dashboards, interactive map
            interfaces, real-time tooling, AI-integrated workflows. On the
            backend:{" "}
            <span style={{ color: "var(--text-primary)" }}>
              Node.js, Python, NestJS, Django
            </span>{" "}
            — clean API design, solid data handling, nothing over-engineered.
          </p>
          <p>
            Most of my recent projects are enterprise platforms built for
            government and regulated-industry clients — compliance systems,
            field operations tools, legal case management, analytics dashboards.
            Serious scope, real constraints, Arabic/RTL requirements. The kind
            of work that actually needs to hold up.
          </p>
          <p>
            I pick up complex problems fast and prefer them over straightforward
            ones.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-4 text-center"
            >
              <div
                className="text-md sm:text-2xl font-bold mono"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
