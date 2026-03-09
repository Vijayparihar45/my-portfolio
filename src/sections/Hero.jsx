import { useState, useEffect } from "react";

const roles = ["Web Developer", "BCA Student", "Frontend Developer", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 60px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "-10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "-5%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "40%",
        width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Grid dots background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(168,85,247,0.15) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.4,
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "40px",
        flexWrap: "wrap",
      }}>
        {/* LEFT — Text */}
        <div
          className="hero-text"
          style={{
            flex: "1 1 500px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-50px)",
            transition: "all 0.8s ease",
          }}
        >
          <p style={{
            color: "#a855f7",
            fontSize: "16px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            
          </p>

          <h1 style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: "16px",
          }}>
            Hi, I'm <br />
            <span style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Vijay Singh
            </span>
            <br />
            <span style={{ color: "#fff" }}>Parihar</span>
          </h1>

          <h2 style={{
            fontSize: "clamp(18px, 2.5vw, 26px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            color: "#94a3b8",
            marginBottom: "24px",
            minHeight: "40px",
          }}>
            I am a{" "}
            <span style={{
              color: "#a855f7",
              fontWeight: 700,
              borderRight: "2px solid #a855f7",
              paddingRight: "3px",
              animation: "blink 0.8s step-end infinite",
            }}>
              {displayed}
            </span>
          </h2>

          <p style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#94a3b8",
            maxWidth: "520px",
            marginBottom: "40px",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            I build modern and responsive websites using technologies like{" "}
            <span style={{ color: "#c4b5fd" }}>HTML, CSS, JavaScript, PHP</span> and{" "}
            <span style={{ color: "#06b6d4" }}>React</span>. Passionate about web development
            and continuously learning new technologies.
          </p>

          {/* Buttons Row */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "28px" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                padding: "14px 32px",
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                border: "none",
                borderRadius: "30px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(168,85,247,0.4)",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 30px rgba(168,85,247,0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 20px rgba(168,85,247,0.4)";
              }}
            >
              🚀 View Projects
            </button>

            <button
              onClick={() => scrollTo("contact")}
              style={{
                padding: "14px 32px",
                background: "transparent",
                border: "2px solid #06b6d4",
                borderRadius: "30px",
                color: "#06b6d4",
                fontSize: "15px",
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#06b6d4";
                e.target.style.color = "#0a0a14";
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 30px rgba(6,182,212,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#06b6d4";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              📬 Contact Me
            </button>

            {/* Download Resume Button */}
            <a
              href="/VijayResume1.pdf"
              download="/VijayResume1.pdf"
              style={{
                padding: "14px 32px",
                background: "transparent",
                border: "2px solid rgba(168,85,247,0.5)",
                borderRadius: "30px",
                color: "#c4b5fd",
                fontSize: "15px",
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "0.5px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(168,85,247,0.15)";
                e.currentTarget.style.borderColor = "#a855f7";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(168,85,247,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)";
                e.currentTarget.style.color = "#c4b5fd";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "16px" }}>⬇</span>
              Download Resume
            </a>
          </div>

          {/* Divider */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            <span style={{
              color: "#475569",
              fontSize: "12px",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "2px",
            }}>FIND ME ON</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* Social Icons Row */}
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            {/* GitHub */}
            <a
              href="https://github.com/Vijayparihar45"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "14px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* GitHub SVG icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/vijayparihar45"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                background: "rgba(10,102,194,0.08)",
                border: "1px solid rgba(10,102,194,0.25)",
                borderRadius: "12px",
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "14px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(10,102,194,0.2)";
                e.currentTarget.style.borderColor = "#0a66c2";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,102,194,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(10,102,194,0.08)";
                e.currentTarget.style.borderColor = "rgba(10,102,194,0.25)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* LinkedIn SVG icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — Photo Circle */}
        <div
          className="hero-photo"
          style={{
            flex: "0 0 auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(50px)",
            transition: "all 0.8s ease 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Spinning ring */}
            <div style={{
              position: "absolute",
              inset: "-8px",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #a855f7, #ec4899, #06b6d4, #a855f7)",
              animation: "spin 4s linear infinite",
              zIndex: 0,
            }} />
            {/* Inner white border */}
            <div style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              background: "#0a0a14",
              zIndex: 1,
            }} />
            {/* Photo */}
            <div style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              zIndex: 2,
              background: "linear-gradient(135deg, #1e1040, #0f2040)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* Replace src with your actual photo path: src="/your-photo.jpg" */}
              <img
                src="/profile.jpg"
                alt="Vijay Singh Parihar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `
                    <div style="
                      width:100%; height:100%; display:flex; flex-direction:column;
                      align-items:center; justify-content:center;
                      background: linear-gradient(135deg, #1e1040, #0f2040);
                      color:#a855f7; font-family:'Space Grotesk',sans-serif;
                    ">
                      <div style="font-size:80px">👨‍💻</div>
                      <div style="font-size:13px; color:#c4b5fd; margin-top:8px">Add your photo</div>
                    </div>
                  `;
                }}
              />
            </div>
            {/* Floating badges */}
            <div style={{
              position: "absolute",
              bottom: "20px",
              left: "-30px",
              zIndex: 3,
              background: "rgba(15,15,30,0.9)",
              border: "1px solid rgba(168,85,247,0.4)",
              borderRadius: "12px",
              padding: "8px 14px",
              fontSize: "13px",
              color: "#c4b5fd",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              animation: "float 3s ease-in-out infinite",
            }}>
              ⚡ React.js
            </div>
            <div style={{
              position: "absolute",
              top: "20px",
              right: "-30px",
              zIndex: 3,
              background: "rgba(15,15,30,0.9)",
              border: "1px solid rgba(6,182,212,0.4)",
              borderRadius: "12px",
              padding: "8px 14px",
              fontSize: "13px",
              color: "#67e8f9",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              animation: "float 3s ease-in-out infinite 1s",
            }}>
              🌐 PHP
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        animation: "bounce 2s ease-in-out infinite",
        cursor: "pointer",
      }}
        onClick={() => scrollTo("about")}
      >
        <span style={{ color: "#64748b", fontSize: "12px", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "2px" }}>SCROLL</span>
        <div style={{
          width: "24px", height: "40px",
          border: "2px solid rgba(168,85,247,0.4)",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "6px",
        }}>
          <div style={{
            width: "4px", height: "8px",
            background: "#a855f7",
            borderRadius: "2px",
            animation: "scrollDot 1.5s ease-in-out infinite",
          }} />
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0) } 50% { transform: translateX(-50%) translateY(-8px) } }
        @keyframes scrollDot { 0% { transform: translateY(0); opacity: 1 } 100% { transform: translateY(14px); opacity: 0 } }
      `}</style>
    </section>
  );
};

export default Hero;
