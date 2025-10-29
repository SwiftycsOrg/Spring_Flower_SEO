import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      fontFamily: "sans-serif",
      backgroundColor: "#f9f9f9",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", color: "#e74c3c", marginBottom: "20px" }}>
        404
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" style={{
        backgroundColor: "#4CAF50",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "bold"
      }}>
        Back to Home
      </Link>
    </div>
  );
}
