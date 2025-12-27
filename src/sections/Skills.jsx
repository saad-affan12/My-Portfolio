import { motion } from "framer-motion";

const skills = [
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Git",
  "MySQL",
];

export default function Skills() {
  return (
    <section
      id="skills"
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
        style={{ maxWidth: "900px", width: "100%" }}
      >
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: "600",
            marginBottom: "clamp(28px, 6vw, 40px)",
          }}
        >
          Skills
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
            gap: "14px",
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                borderColor: "#22D3EE",
                boxShadow: "0 6px 18px rgba(34, 211, 238, 0.14)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                padding: "14px 10px",
                textAlign: "center",
                borderRadius: "6px",
                background: "#111827",
                border: "1px solid #1F2933",
                fontSize: "clamp(0.85rem, 3.5vw, 0.95rem)",
                transition: "all 0.25s ease",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
