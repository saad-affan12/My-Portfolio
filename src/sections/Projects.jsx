import { motion } from "framer-motion";

const projects = [
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
        padding: "clamp(60px, 10vw, 100px) 20px",
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
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: "600",
            marginBottom: "clamp(36px, 7vw, 48px)",
          }}
        >
          Projects
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              whileHover={{
                y: -6,
                borderColor: "#22D3EE",
                boxShadow: "0 10px 28px rgba(34, 211, 238, 0.16)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                display: "block",
                padding: "18px",
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
                  fontSize: "clamp(1.05rem, 4vw, 1.15rem)",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "clamp(0.9rem, 3.8vw, 0.95rem)",
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
