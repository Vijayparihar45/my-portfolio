import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        padding: "16px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled
          ? "rgba(10,10,20,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.2)" : "none",
        transition: "all 0.4s ease",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: 700,
          fontFamily: "'Space Grotesk', sans-serif",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span style={{ color: "#a855f7" }}>&lt;</span>
        <span style={{ color: "#ffffff" }}>Vijay</span>
        <span style={{ color: "#06b6d4" }}>.dev</span>
        <span style={{ color: "#a855f7" }}>/&gt;</span>
      </div>

      {/* Desktop Nav */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "36px",
          alignItems: "center",
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            style={{
              background: "none",
              border: "none",
              color: "#c4b5fd",
              fontSize: "15px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              cursor: "pointer",
              padding: "4px 0",
              position: "relative",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.target.style.color = "#c4b5fd")}
          >
            {link.title}
          </button>
        ))}
        <a
          href="mailto:vijaysp2021@gmail.com"
          style={{
            padding: "8px 20px",
            background: "linear-gradient(135deg, #a855f7, #06b6d4)",
            borderRadius: "20px",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "'Space Grotesk', sans-serif",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 25px rgba(168,85,247,0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          Hire Me
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Vijayparihar45"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "38px", height: "38px",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            color: "#94a3b8",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.color = "#94a3b8";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/vijayparihar45"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "38px", height: "38px",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(10,102,194,0.08)",
            border: "1px solid rgba(10,102,194,0.25)",
            borderRadius: "10px",
            color: "#0a66c2",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(10,102,194,0.2)";
            e.currentTarget.style.borderColor = "#0a66c2";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,102,194,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(10,102,194,0.08)";
            e.currentTarget.style.borderColor = "rgba(10,102,194,0.25)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "25px",
              height: "2px",
              background: "#a855f7",
              transition: "all 0.3s",
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10,10,20,0.98)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderBottom: "1px solid rgba(168,85,247,0.3)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: "none",
                border: "none",
                color: "#c4b5fd",
                fontSize: "16px",
                fontFamily: "'Space Grotesk', sans-serif",
                cursor: "pointer",
                textAlign: "left",
                padding: "8px 0",
              }}
            >
              {link.title}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
