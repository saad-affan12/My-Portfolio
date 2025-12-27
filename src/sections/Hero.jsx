import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "clamp(64px, 10vw, 120px) 20px",
        background: "radial-gradient(circle at top, #111827, #0B0F19)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        style={{ maxWidth: "820px", width: "100%" }}
      >
        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 700,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          MOHAMMED SAAD AFFAN A
        </h1>

        {/* Role */}
        <p
          style={{
            color: "#9CA3AF",
            fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
            marginBottom: "14px",
          }}
        >
          Computer Science Student | Web Developer
        </p>

        {/* One-liner */}
        <p
          style={{
            color: "#9CA3AF",
            fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          I build modern, responsive, and efficient web applications with a
          focus on clean UI and real-world usability.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#projects" className="underline-link">
            View Projects
          </a>
          <a href="#contact" className="underline-link">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
