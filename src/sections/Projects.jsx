import { motion } from "framer-motion";

const projects = [
  {
    title: "Train Tracking Web App",
    description:
      "A real-time train tracking web application with login support and live train timing updates.",
    tech: "React, Node.js, APIs",
    link: "https://github.com/saad-affan12",
  },
  {
    title: "AI Smart Attendance System",
    description:
      "An AI-based attendance system using face recognition to automate student attendance.",
    tech: "Python, OpenCV, Machine Learning",
    link: "https://github.com/saad-affan12",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 20px",
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
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.6rem, 5vw, 2rem)",
            fontWeight: "600",
            marginBottom: "48px",
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              whileHover={{
                y: -8,
                borderColor: "#22D3EE",
                boxShadow: "0 10px 30px rgba(34, 211, 238, 0.12)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                display: "block",
                padding: "20px",
                borderRadius: "8px",
                background: "#111827",
                border: "1px solid #1F2933",
                textDecoration: "none",
                color: "#E5E7EB",
                transition: "all 0.25s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#9CA3AF",
                  marginBottom: "14px",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>

              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#22D3EE",
                }}
              >
                {project.tech}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
