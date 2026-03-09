import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Web Development Training",
    issuer: "Internshala Trainings",
    issuerShort: "INTERNSHALA",
    date: "March 15, 2024",
    duration: "8 Weeks Online",
    certNo: "2emvj5sqt5s",
    topics: ["HTML", "CSS", "Bootstrap", "DBMS", "PHP", "JavaScript", "React"],
    verifyLink: "https://trainings.internshala.com/verify_certificate",
    verifyLabel: "🔗 Verify Certificate",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    bgGlow: "rgba(59,130,246,0.1)",
    icon: "🌐",
    badge: "Verified ✓",
  },
  {
    id: 2,
    title: "Alpha — DSA with Java",
    issuer: "Apna College",
    issuerShort: "APNA COLLEGE",
    date: "2024",
    duration: "Complete DSA Course",
    certNo: null,
    topics: ["Java", "OOPs", "Problem Solving"],
    verifyLink: "https://www.apnacollege.in/",
    verifyLabel: "🎓 Visit Apna College",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316, #facc15)",
    bgGlow: "rgba(249,115,22,0.1)",
    icon: "☕",
    badge: "Completed ✓",
  },
];

const CertCard = ({ cert, index, visible }) => {
  const [hover, setHover] = useState(false);
  const [shine, setShine] = useState(false);

  useEffect(() => {
    if (hover) {
      setShine(true);
      const t = setTimeout(() => setShine(false), 600);
      return () => clearTimeout(t);
    }
  }, [hover]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: hover ? cert.bgGlow : "rgba(255,255,255,0.02)",
        border: `1px solid ${hover ? cert.color : "rgba(255,255,255,0.08)"}`,
        borderRadius: "24px",
        padding: "32px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hover ? "translateY(-8px) scale(1.01)" : "translateY(0)"
          : "translateY(60px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.4s cubic-bezier(0.34,1.4,0.64,1)`,
        boxShadow: hover ? `0 24px 60px rgba(${cert.color === "#3b82f6" ? "59,130,246" : "249,115,22"},0.2)` : "none",
        cursor: "default",
      }}
    >
      {/* Shine sweep */}
      <div style={{
        position: "absolute",
        top: "-50%", left: shine ? "130%" : "-60%",
        width: "35%", height: "200%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
        transform: "skewX(-15deg)",
        transition: "left 0.55s ease",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      {/* Top glow border */}
      <div style={{
        position: "absolute", top: 0, left: "15%", right: "15%",
        height: "2px",
        background: cert.gradient,
        opacity: hover ? 1 : 0.4,
        transition: "opacity 0.3s",
        borderRadius: "1px",
      }} />

      {/* Corner badge */}
      <div style={{
        position: "absolute",
        top: "18px", right: "18px",
        padding: "5px 12px",
        background: `rgba(${cert.color === "#3b82f6" ? "59,130,246" : "249,115,22"},0.15)`,
        border: `1px solid ${cert.color}`,
        borderRadius: "20px",
        fontSize: "11px",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        color: cert.color,
        letterSpacing: "0.5px",
      }}>
        {cert.badge}
      </div>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "22px" }}>
        {/* Icon */}
        <div style={{
          width: "56px", height: "56px",
          background: cert.gradient,
          borderRadius: "16px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "26px",
          flexShrink: 0,
          boxShadow: hover ? `0 8px 24px rgba(${cert.color === "#3b82f6" ? "59,130,246" : "249,115,22"},0.4)` : "none",
          transition: "all 0.3s ease",
          transform: hover ? "rotate(-5deg) scale(1.1)" : "rotate(0) scale(1)",
        }}>
          {cert.icon}
        </div>

        <div>
          <h3 style={{
            fontSize: "19px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "4px",
            lineHeight: 1.2,
          }}>
            {cert.title}
          </h3>
          <p style={{
            fontSize: "13px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            background: cert.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}>
            {cert.issuerShort}
          </p>
        </div>
      </div>

      {/* Info Row */}
      <div style={{
        display: "flex", gap: "16px", flexWrap: "wrap",
        marginBottom: "20px",
      }}>
        {[
          { icon: "📅", label: cert.date },
          { icon: "⏱️", label: cert.duration },
          ...(cert.certNo ? [{ icon: "🔢", label: `ID: ${cert.certNo}` }] : []),
        ].map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "6px",
            padding: "5px 12px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px",
          }}>
            <span style={{ fontSize: "12px" }}>{item.icon}</span>
            <span style={{
              fontSize: "12px",
              color: "#64748b",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: "rgba(255,255,255,0.06)",
        marginBottom: "18px",
      }} />

      {/* Topics */}
      <p style={{
        fontSize: "12px",
        color: "#475569",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "12px",
      }}>
        Topics Covered
      </p>
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "8px",
        marginBottom: "24px",
      }}>
        {cert.topics.map((topic, i) => (
          <span key={i} style={{
            padding: "4px 12px",
            background: `rgba(${cert.color === "#3b82f6" ? "59,130,246" : "249,115,22"},0.1)`,
            border: `1px solid rgba(${cert.color === "#3b82f6" ? "59,130,246" : "249,115,22"},0.25)`,
            borderRadius: "20px",
            fontSize: "12px",
            color: cert.color,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            transition: "all 0.3s ease",
          }}>
            {topic}
          </span>
        ))}
      </div>

      {/* Verify Button */}
      <a
        href={cert.verifyLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 24px",
          background: hover ? cert.gradient : "transparent",
          border: `2px solid ${cert.color}`,
          borderRadius: "12px",
          color: hover ? "#fff" : cert.color,
          textDecoration: "none",
          fontSize: "14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          transition: "all 0.3s ease",
          letterSpacing: "0.3px",
          boxShadow: hover ? `0 8px 24px rgba(${cert.color === "#3b82f6" ? "59,130,246" : "249,115,22"},0.4)` : "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {cert.verifyLabel}
        <span style={{ fontSize: "16px", transition: "transform 0.3s" }}>→</span>
      </a>
    </div>
  );
};

const Certificates = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certificates"
      ref={ref}
      style={{
        padding: "100px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%",
        width: "450px", height: "450px",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%",
        width: "380px", height: "380px",
        background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section Title */}
        <div style={{
          textAlign: "center", marginBottom: "60px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease",
        }}>
          <p style={{
            color: "#a855f7", fontSize: "14px", fontWeight: 600,
            fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "4px",
            textTransform: "uppercase", marginBottom: "10px",
          }}>
            My Achievements
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, color: "#fff",
          }}>
            Certificates &{" "}
            <span style={{
              background: "linear-gradient(135deg, #f97316, #facc15)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Training
            </span>
          </h2>
          <div style={{
            width: "60px", height: "4px", margin: "16px auto 0",
            background: "linear-gradient(135deg, #f97316, #facc15)",
            borderRadius: "2px",
          }} />
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "24px",
        }}>
          {certificates.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
