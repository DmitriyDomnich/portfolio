"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "d.domnich2017@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      action: copyEmail,
      hidden: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com",
      href: "https://github.com/DimaDomnich",
      hidden: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com",
      href: "https://www.linkedin.com/in/dmytro-domnich-41480b243/",
    },
  ];

  return (
    <section id="contact" className="py-16 px-6 lg:px-10 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-title mb-4">{"// contact"}</p>
        <h2
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Get in Touch
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
          Open to new opportunities, interesting projects, and collaborations.
          Feel free to reach out via any of the channels below.
        </p>

        <div className="flex flex-col gap-3 max-w-2xl">
          {links
            .filter((link) => !link.hidden)
            .map((link) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="card p-4 flex items-center justify-between group cursor-pointer"
                  onClick={
                    link.action || (() => window.open(link.href, "_blank"))
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--accent-glow)",
                        border: "1px solid rgba(77,159,255,0.2)",
                      }}
                    >
                      <Icon size={16} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {link.value}
                      </p>
                    </div>
                  </div>

                  {link.action ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        link.action!();
                      }}
                      className="p-1.5 rounded transition-all duration-200"
                      style={{ color: "var(--text-muted)" }}
                      title="Copy email"
                    >
                      {copied ? (
                        <Check size={15} style={{ color: "#4ade80" }} />
                      ) : (
                        <Copy size={15} />
                      )}
                    </button>
                  ) : (
                    <Linkedin
                      size={14}
                      style={{ color: "var(--text-muted)", opacity: 0 }}
                      className="group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
}
