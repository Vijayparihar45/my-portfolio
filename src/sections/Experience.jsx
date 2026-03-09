import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Web Developer Intern",
    company: "Educology Solutions",
    companyUrl: "https://www.educologysolutions.com/",
    duration: "October 2025 – May 2026",
    period: "6 Months",
    type: "Internship",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    icon: "💼",
    works: [
      "Developed a responsive corporate website for Educology Solutions with modern UI design",
      "Built a dynamic E-Commerce web application with authentication system and product management",
      "Created a Google Apps Script web application to automate workflows and manage data",
      "Used AI tools to enhance development speed and code quality",
      "Worked with HTML, CSS, JavaScript, PHP, MySQL and React.js in real-world projects",
    ],
    techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "React.js", "Google Apps Script", "AI Tools"],
  },
];

const Experience = () => {
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
      id="experience"
      ref={ref}
      style={{
        padding: "100px 60px",
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%",
        width: "450px", height: "450px",
        background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%",
        width: "350px", height: "350px",
        background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
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
            Work History
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, color: "#fff",
          }}>
            My{" "}
            <span style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Experience
            </span>
          </h2>
          <div style={{
            width: "60px", height: "4px", margin: "16px auto 0",
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            borderRadius: "2px",
          }} />
        </div>

        {/* Timeline */}
        <div style={{
          position: "relative",
          maxWidth: "860px",
          margin: "0 auto",
        }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "28px",
            top: 0, bottom: 0,
            width: "2px",
            background: "linear-gradient(180deg, #a855f7, #ec4899, transparent)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.3s",
          }} />

          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index, visible }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        gap: "32px",
        marginBottom: "40px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-40px)",
        transition: `all 0.7s ease ${index * 0.2}s`,
      }}
    >
      {/* Timeline dot */}
      <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
        <div style={{
          width: "58px", height: "58px",
          background: exp.gradient,
          borderRadius: "16px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "24px",
          boxShadow: `0 8px 24px rgba(168,85,247,0.4)`,
          transition: "transform 0.3s ease",
          transform: hover ? "scale(1.1) rotate(-5deg)" : "scale(1)",
        }}>
          {exp.icon}
        </div>
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          flex: 1,
          background: hover ? "rgba(168,85,247,0.06)" : "rgba(255,255,255,0.02)",
          border: `1px solid ${hover ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: "20px",
          padding: "28px 32px",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: hover ? "0 20px 50px rgba(168,85,247,0.15)" : "none",
        }}
      >
        {/* Top border */}
        <div style={{
          position: "absolute", top: 0, left: "10%", right: "10%",
          height: "2px",
          background: exp.gradient,
          transform: `scaleX(${hover ? 1 : 0.3})`,
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }} />

        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "8px",
        }}>
          <div>
            <h3 style={{
              fontSize: "20px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "4px",
            }}>
              {exp.role}
            </h3>
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "15px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                background: exp.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textDecoration: "none",
              }}
            >
              🏢 {exp.company} ↗
            </a>
          </div>

          {/* Badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
            <span style={{
              padding: "5px 14px",
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.3)",
              borderRadius: "20px",
              fontSize: "12px",
              color: "#c4b5fd",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
            }}>
              {exp.type}
            </span>
            <span style={{
              padding: "5px 14px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "20px",
              fontSize: "12px",
              color: "#10b981",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
            }}>
              ⏱ {exp.period}
            </span>
          </div>
        </div>

        {/* Duration */}
        <p style={{
          fontSize: "13px",
          color: "#475569",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          <span>📅</span> {exp.duration}
        </p>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "rgba(255,255,255,0.06)",
          marginBottom: "20px",
        }} />

        {/* Work done list */}
        <div style={{ marginBottom: "22px" }}>
          <p style={{
            fontSize: "12px",
            color: "#475569",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}>
            What I Did
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {exp.works.map((work, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
              }}>
                <span style={{
                  color: "#a855f7",
                  fontSize: "16px",
                  marginTop: "1px",
                  flexShrink: 0,
                }}>▸</span>
                <p style={{
                  fontSize: "14px",
                  color: "#94a3b8",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.6,
                }}>
                  {work}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech badges */}
        <div>
          <p style={{
            fontSize: "12px",
            color: "#475569",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            Technologies Used
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {exp.techs.map((tech, i) => (
              <span key={i} style={{
                padding: "4px 12px",
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.25)",
                borderRadius: "20px",
                fontSize: "12px",
                color: "#c4b5fd",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;