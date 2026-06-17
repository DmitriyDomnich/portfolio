"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { skillCategories, awsServices } from "@/data/skills";

function AwsCard({ service }: { service: (typeof awsServices)[0] }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="card h-full px-4 py-3 cursor-default transition-all duration-200 select-none"
        style={{
          borderColor: hover ? "var(--accent)" : "var(--border)",
          backgroundColor: hover ? "var(--accent-glow)" : "var(--bg-card)",
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className="text-sm font-semibold mono"
            style={{ color: hover ? "var(--accent)" : "var(--text-primary)" }}
          >
            {service.name}
          </span>
          <Info
            size={12}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
        </div>
        <p
          className="text-xs mt-1 leading-snug"
          style={{ color: "var(--text-secondary)" }}
        >
          {service.description}
        </p>
      </div>

      {hover && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="absolute z-20 bottom-full mb-2 left-0 w-64 rounded-xl p-3 shadow-xl"
          style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--accent)",
            boxShadow: "0 0 20px var(--accent-glow)",
          }}
        >
          <p
            className="text-xs font-semibold mb-2"
            style={{ color: "var(--accent)" }}
          >
            Used together with:
          </p>
          <div className="flex flex-wrap gap-1">
            {service.depends.map((dep) => (
              <span
                key={dep}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "rgba(77,159,255,0.08)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                {dep}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-title mb-4">{"// skills"}</p>
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Technical Skills
        </h2>

        <div className="max-w-5xl space-y-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <p
                className="text-xs font-semibold mb-2 mono"
                style={{ color: "var(--text-muted)" }}
              >
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-lg font-medium transition-colors duration-150 cursor-default"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-primary)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border-hover)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-1 mb-2">
            <p
              className="text-xs font-semibold mono"
              style={{ color: "var(--text-muted)" }}
            >
              Amazon Web Services
            </p>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              - hover a service to see its dependencies
            </span>
          </div>

          <div
            className="rounded-xl p-5"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {awsServices.map((service) => (
                <AwsCard key={service.name} service={service} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
