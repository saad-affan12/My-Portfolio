import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
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
        style={{ maxWidth: "700px", textAlign: "center" }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Get in Touch
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1rem",
            color: "#9CA3AF",
            marginBottom: "40px",
            lineHeight: "1.7",
          }}
        >
          I’m open to internships, collaborations, and opportunities to build
          meaningful tech projects.
        </p>

        {/* Contact Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:saadaffan129@gmail.com"
            style={linkStyle}
          >
            Email
          </a>

          <a
            href="https://github.com/saad-affan12"
            target="_blank"
            style={linkStyle}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/saad-affan-566553319"
            target="_blank"
            style={linkStyle}
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

const linkStyle = {
  padding: "12px 20px",
  borderRadius: "6px",
  border: "1px solid #1F2933",
  color: "#E5E7EB",
  textDecoration: "none",
  fontSize: "0.95rem",
  transition: "all 0.2s ease",
};
