export default function Footer() {
  return (
    <footer
      style={{
        padding: "28px 20px",
        textAlign: "center",
        background: "linear-gradient(to top, #111827, #0B0F19)",
        borderTop: "1px solid #1F2933",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
          color: "#9CA3AF",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "#E5E7EB", fontWeight: 500 }}>
          MOHAMMED SAAD AFFAN A
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}
