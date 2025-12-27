import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        background: "#0B0F19",
        color: "#E5E7EB",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ maxWidth: "800px", textAlign: "center" }}
      >
        {/* Section title */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "24px",
          }}
        >
          About Me
        </h2>

        {/* About text */}
        <p
          style={{
            fontSize: "1rem",
            color: "#9CA3AF",
            lineHeight: "1.8",
          }}
        >
          I’m a second-year B.Sc Computer Science student at Vellore Institute of
          Technology with a strong interest in building clean, modern, and
          efficient web applications. I enjoy working with full-stack
          technologies, exploring data structures and object-oriented
          programming, and continuously improving my problem-solving skills
          through real-world projects.
        </p>
      </motion.div>
    </section>
  );
}
