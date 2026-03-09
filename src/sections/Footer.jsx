import { useState, useEffect } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a855f7, #06b6d4)",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 20px rgba(168,85,247,0.5)",
          pointerEvents: showTop ? "all" : "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(168,85,247,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(168,85,247,0.5)";
        }}
      >
        ↑
      </button>

      <footer
        style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(168,85,247,0.15)",
          background: "rgba(255,255,255,0.01)",
          padding: "60px 60px 30px",
        }}
      >
        {/* Background glow */}
        <div style={{
          position: "absolute", top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: "600px", height: "200px",
          background: "radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Top border glow line */}
        <div style={{
          position: "absolute", top: 0, left: "20%", right: "20%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #a855f7, #06b6d4, transparent)",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Top Row */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "48px",
          }}>

            {/* Logo + tagline */}
            <div style={{ flex: "1 1 280px" }}>
              <div
                onClick={scrollToTop}
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                  marginBottom: "14px",
                  display: "inline-block",
                }}
              >
                <span style={{ color: "#a855f7" }}>&lt;</span>
                <span style={{ color: "#ffffff" }}>Vijay</span>
                <span style={{ color: "#06b6d4" }}>.dev</span>
                <span style={{ color: "#a855f7" }}>/&gt;</span>
              </div>
              <p style={{
                color: "#64748b",
                fontSize: "14px",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.7,
                maxWidth: "260px",
              }}>
                BCA Student & Web Developer passionate about building modern, responsive digital experiences. 🚀
              </p>
            </div>

            {/* Quick Links */}
            <div style={{ flex: "0 0 auto" }}>
              <p style={{
                color: "#fff",
                fontSize: "14px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                Quick Links
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() =>
                      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: "#64748b",
                      fontSize: "14px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 500,
                      cursor: "pointer",
                      textAlign: "left",
                      padding: 0,
                      transition: "color 0.3s, transform 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#a855f7";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#64748b";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span style={{ color: "#a855f7", fontSize: "10px" }}>▸</span>
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div style={{ flex: "0 0 auto" }}>
              <p style={{
                color: "#fff",
                fontSize: "14px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { icon: "📧", value: "vijaysp2021@gmail.com", href: "mailto:vijaysp2021@gmail.com" },
                  { icon: "📱", value: "+91 7310687409", href: "tel:+917310687409" },
                  { icon: "📍", value: "Uttarakhand, India", href: null },
                ].map((item, i) => (
                  <div key={i}
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <span style={{ fontSize: "14px" }}>{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "#64748b",
                          fontSize: "14px",
                          fontFamily: "'Space Grotesk', sans-serif",
                          textDecoration: "none",
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#06b6d4")}
                        onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{
                        color: "#64748b", fontSize: "14px",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), rgba(6,182,212,0.3), transparent)",
            marginBottom: "28px",
          }} />

          {/* Bottom Row */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            {/* Copyright */}
            <p style={{
              color: "#475569",
              fontSize: "14px",
              fontFamily: "'Space Grotesk', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexWrap: "wrap",
            }}>
              <span>© 2026</span>
              <span style={{
                background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700,
              }}>
                Vijay Singh Parihar
              </span>
              <span>· Built with</span>
              <span
                style={{
                  display: "inline-block",
                  animation: "heartbeat 1.2s ease-in-out infinite",
                  color: "#ec4899",
                }}
              >
                ❤️
              </span>
              <span>using</span>
              <span style={{ color: "#06b6d4", fontWeight: 600 }}>React.js</span>
            </p>

            {/* Status badge */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.25)",
              borderRadius: "20px",
            }}>
              <span style={{
                width: "7px", height: "7px",
                borderRadius: "50%",
                background: "#10b981",
                animation: "pulse 1.5s ease-in-out infinite",
                display: "inline-block",
              }} />
              <span style={{
                color: "#10b981",
                fontSize: "12px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}>
                Open to Work
              </span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
            50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(16,185,129,0); }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;