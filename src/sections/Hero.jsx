import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B0F19",
        color: "#E5E7EB",
        padding: "0 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ maxWidth: "800px", textAlign: "center" }}
      >
        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          MOHAMMED SAAD AFFAN A
        </h1>

        {/* Role */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#9CA3AF",
            marginBottom: "16px",
          }}
        >
          Computer Science Student | Web Developer
        </p>

        {/* Intro line */}
        <p
          style={{
            fontSize: "1rem",
            color: "#9CA3AF",
            marginBottom: "32px",
            lineHeight: "1.6",
          }}
        >
          I build modern, responsive, and efficient web applications using
          contemporary technologies.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <a
            href="#projects"
            style={{
              padding: "12px 24px",
              background: "#22D3EE",
              color: "#0B0F19",
              borderRadius: "6px",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              padding: "12px 24px",
              border: "1px solid #374151",
              color: "#E5E7EB",
              borderRadius: "6px",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
