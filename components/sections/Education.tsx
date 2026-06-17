"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/experience";

const languages = [
  { name: "Ukrainian", level: "Native", flag: "🇺🇦", barWidth: "100%" },
  {
    name: "English",
    level: "B2 Upper-Intermediate",
    flag: "🇬🇧",
    barWidth: "78%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-title mb-4">{"// education"}</p>
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Education
        </h2>

        <div className="space-y-4 mb-14">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-5 flex gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{
                  backgroundColor: "var(--accent-glow)",
                  border: "1px solid rgba(77,159,255,0.2)",
                }}
              >
                <GraduationCap size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {edu.degree}
                </h3>
                <p className="text-sm" style={{ color: "var(--accent)" }}>
                  {edu.field}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {edu.school}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title mb-4">{"// languages"}</p>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Languages
          </h2>

          <div className="max-w-lg space-y-5">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {lang.name}
                    </span>
                  </div>
                  <span
                    className="text-xs mono"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {lang.level}
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent), #7c3aed)",
                    }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: lang.barWidth }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
