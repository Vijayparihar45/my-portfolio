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
    <>
      <style>{`
        .navbar {
          position: fixed; top: 0; width: 100%; z-index: 1000;
          padding: 16px 60px;
          display: flex; justify-content: space-between; align-items: center;
          transition: all 0.4s ease; box-sizing: border-box;
        }
        .navbar.scrolled {
          background: rgba(10,10,20,0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(168,85,247,0.2);
        }
        .nav-logo {
          font-size: 22px; font-weight: 700;
          font-family: 'Space Grotesk', sans-serif;
          cursor: pointer; flex-shrink: 0;
        }
        .nav-desktop { display: flex; gap: 24px; align-items: center; }
        .nav-link-btn {
          background: none; border: none; color: #c4b5fd;
          font-size: 14px; font-family: 'Space Grotesk', sans-serif;
          font-weight: 500; cursor: pointer; transition: color 0.3s; white-space: nowrap;
        }
        .nav-link-btn:hover { color: #fff; }
        .hire-btn {
          padding: 8px 18px;
          background: linear-gradient(135deg, #a855f7, #06b6d4);
          border-radius: 20px; color: #fff; text-decoration: none;
          font-size: 13px; font-weight: 600;
          font-family: 'Space Grotesk', sans-serif;
          transition: transform 0.2s, box-shadow 0.2s; white-space: nowrap;
        }
        .hire-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(168,85,247,0.5); }
        .nav-social {
          width: 36px; height: 36px; display: flex;
          align-items: center; justify-content: center;
          border-radius: 9px; text-decoration: none; transition: all 0.3s; flex-shrink: 0;
        }
        .nav-gh { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; }
        .nav-gh:hover { background: rgba(255,255,255,0.12); color: #fff; transform: translateY(-3px); }
        .nav-li { background: rgba(10,102,194,0.08); border: 1px solid rgba(10,102,194,0.25); color: #0a66c2; }
        .nav-li:hover { background: rgba(10,102,194,0.2); border-color: #0a66c2; transform: translateY(-3px); }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px; flex-shrink: 0;
        }
        .hamburger span {
          display: block; width: 25px; height: 2px;
          background: #a855f7; border-radius: 2px;
        }
        .mobile-overlay {
          position: fixed; inset: 0;
          background: rgba(10,10,20,0.99); z-index: 999;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 6px;
          padding: 20px;
        }
        .mobile-close {
          position: absolute; top: 20px; right: 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff; font-size: 18px;
          width: 42px; height: 42px; border-radius: 10px;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
        }
        .mobile-nav-btn {
          background: none; border: none; color: #c4b5fd;
          font-size: 22px; font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; cursor: pointer; padding: 14px 40px;
          border-radius: 12px; transition: all 0.3s;
          width: 100%; text-align: center; max-width: 280px;
        }
        .mobile-nav-btn:hover, .mobile-nav-btn:active {
          background: rgba(168,85,247,0.1); color: #fff;
        }
        .mobile-socials { display: flex; gap: 14px; margin-top: 16px; flex-wrap: wrap; justify-content: center; }

        @media (max-width: 900px) {
          .navbar { padding: 14px 20px !important; }
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ color: "#a855f7" }}>&lt;</span>
          <span style={{ color: "#fff" }}>Vijay</span>
          <span style={{ color: "#06b6d4" }}>.dev</span>
          <span style={{ color: "#a855f7" }}>&gt;</span>
        </div>

        {/* Desktop */}
        <div className="nav-desktop">
          {navLinks.map((link) => (
            <button key={link.id} className="nav-link-btn" onClick={() => scrollToSection(link.id)}>
              {link.title}
            </button>
          ))}
          <a href="mailto:vijaysp2021@gmail.com" className="hire-btn">Hire Me</a>
          <a href="https://github.com/Vijayparihar45" target="_blank" rel="noopener noreferrer" className="nav-social nav-gh">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/vijayparihar45" target="_blank" rel="noopener noreferrer" className="nav-social nav-li">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-overlay">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>

          <div style={{ marginBottom: "16px" }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "22px", fontWeight: 800 }}>
              <span style={{ color: "#a855f7" }}>&lt;</span>
              <span style={{ color: "#fff" }}>Vijay</span>
              <span style={{ color: "#06b6d4" }}>.dev</span>
              <span style={{ color: "#a855f7" }}>&gt;</span>
            </span>
          </div>

          {navLinks.map((link) => (
            <button key={link.id} className="mobile-nav-btn" onClick={() => scrollToSection(link.id)}>
              {link.title}
            </button>
          ))}

          <a href="mailto:vijaysp2021@gmail.com" style={{
            marginTop: "10px", padding: "13px 36px",
            background: "linear-gradient(135deg, #a855f7, #06b6d4)",
            borderRadius: "12px", color: "#fff", textDecoration: "none",
            fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "16px",
          }}>
            ✉️ Hire Me
          </a>

          <div className="mobile-socials">
            <a href="https://github.com/Vijayparihar45" target="_blank" rel="noopener noreferrer"
              style={{ padding: "10px 20px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "#fff", textDecoration: "none", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "14px" }}>
              🐙 GitHub
            </a>
            <a href="https://linkedin.com/in/vijayparihar45" target="_blank" rel="noopener noreferrer"
              style={{ padding: "10px 20px", background: "rgba(10,102,194,0.15)", border: "1px solid rgba(10,102,194,0.3)", borderRadius: "10px", color: "#67b0ff", textDecoration: "none", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "14px" }}>
              💼 LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;