"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        zIndex: 50,
        transition: "opacity 300ms, transform 300ms",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: `translateX(-50%) translateY(${visible ? "0" : "-0.5rem"})`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.4rem 0.75rem",
          background: "rgba(9, 9, 11, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--color-border-mid)",
          borderRadius: "9999px",
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <button
            key={href}
            onClick={() => scrollTo(href)}
            style={{
              padding: "0.3rem 0.85rem",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: active === href ? 600 : 400,
              color: active === href ? "var(--color-text-primary)" : "var(--color-text-muted)",
              background: active === href ? "rgba(99,102,241,0.15)" : "transparent",
              border: "none",
              cursor: "pointer",
              transition: "all 200ms",
              fontFamily: "var(--font-sans)",
            }}
            onMouseEnter={e => {
              if (active !== href)
                e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
            onMouseLeave={e => {
              if (active !== href)
                e.currentTarget.style.color = "var(--color-text-muted)";
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
