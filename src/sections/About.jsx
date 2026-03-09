import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "3+", label: "Projects Built" },
    { number: "5+", label: "Technologies" },
    { number: "2+", label: "Years Learning" },
    { number: "BCA", label: "Current Degree" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "100px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute", top: "20%", right: "-15%",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Title */}
        <div style={{
          textAlign: "center", marginBottom: "70px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease",
        }}>
          <p style={{
            color: "#a855f7", fontSize: "14px", fontWeight: 600,
            fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "4px",
            textTransform: "uppercase", marginBottom: "10px",
          }}>
            Get To Know Me
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, color: "#fff",
          }}>
            About <span style={{
              background: "linear-gradient(135deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Me</span>
          </h2>
          <div style={{
            width: "60px", height: "4px", margin: "16px auto 0",
            background: "linear-gradient(135deg, #a855f7, #06b6d4)",
            borderRadius: "2px",
          }} />
        </div>

        {/* Content Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start",
        }}
          className="about-grid"
        >
          {/* Left - Text */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.7s ease 0.2s",
          }}>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: "20px",
              padding: "36px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: "100px", height: "3px",
                background: "linear-gradient(90deg, #a855f7, transparent)",
              }} />

              <h3 style={{
                fontSize: "22px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, color: "#fff", marginBottom: "20px",
              }}>
                Hello! I'm <span style={{ color: "#a855f7" }}>Vijay</span> 👋
              </h3>

              {[
                "I'm a BCA student at PAL College of Technology and Management, passionate about Web Development and modern technologies.",
                "I enjoy building responsive and user-friendly websites that solve real problems. I have experience working with HTML, CSS, JavaScript, PHP, MySQL and React.js.",
                "I have developed real-world projects including an e-commerce platform and a corporate website.",
                "Currently improving my skills in Node.js, React.js and modern web development tools. My goal is to become a professional full-stack web developer! 🚀",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#94a3b8",
                    marginBottom: "16px",
                    fontFamily: "'DM Sans', sans-serif",
                    opacity: visible ? 1 : 0,
                    transition: `all 0.5s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  {text}
                </p>
              ))}

              <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {["vijaysp2021@gmail.com", "Uttarakhand, India"].map((info, i) => (
                  <span key={i} style={{
                    padding: "6px 14px",
                    background: "rgba(168,85,247,0.1)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    borderRadius: "20px",
                    color: "#c4b5fd",
                    fontSize: "13px",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    {info}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Stats + College */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.7s ease 0.3s",
          }}>
            {/* Stats grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "24px",
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(168,85,247,0.2)",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)";
                    e.currentTarget.style.background = "rgba(168,85,247,0.08)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    fontSize: "36px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "6px",
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: "13px", color: "#64748b",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500, letterSpacing: "0.5px",
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* College card */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(6,182,212,0.2)",
              borderRadius: "16px",
              padding: "24px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "100px", height: "3px",
                background: "linear-gradient(90deg, transparent, #06b6d4)",
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "48px", height: "48px",
                  background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", flexShrink: 0,
                }}>🎓</div>
                <div>
                  <p style={{
                    color: "#fff", fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: "15px", marginBottom: "4px",
                  }}>PAL College of Technology & Management</p>
                  <p style={{
                    color: "#67e8f9", fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "13px", fontWeight: 500,
                  }}>Bachelor of Computer Applications (BCA)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
