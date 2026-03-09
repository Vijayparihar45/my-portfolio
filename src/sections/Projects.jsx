import { useEffect, useRef, useState } from "react";
import { projects } from "../constants";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : "168,85,247";
}

const ProjectCard = ({ project, index, visible }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => window.open(project.liveUrl, "_blank")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover
          ? `rgba(${hexToRgb(project.color)},0.08)`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hover ? project.color : "rgba(255,255,255,0.08)"}`,
        borderRadius: "20px",
        padding: "32px",
        cursor: "pointer",
        transition: "all 0.4s ease",
        transform: visible
          ? hover ? "translateY(-8px) scale(1.01)" : "translateY(0)"
          : "translateY(50px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.15}s`,
        position: "relative",
        overflow: "hidden",
        boxShadow: hover ? `0 20px 50px rgba(${hexToRgb(project.color)},0.2)` : "none",
      }}
    >
      {/* Top glow line */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%",
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        opacity: hover ? 1 : 0.3,
        transition: "opacity 0.3s",
      }} />

      {/* Project number badge */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "20px",
      }}>
        <div style={{
          width: "48px", height: "48px",
          background: `rgba(${hexToRgb(project.color)},0.15)`,
          border: `1px solid rgba(${hexToRgb(project.color)},0.3)`,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          color: project.color,
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Live button */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 14px",
          background: hover ? project.color : `rgba(${hexToRgb(project.color)},0.1)`,
          border: `1px solid ${project.color}`,
          borderRadius: "20px",
          color: hover ? "#fff" : project.color,
          fontSize: "12px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          transition: "all 0.3s",
          letterSpacing: "0.5px",
        }}>
          <span style={{
            width: "6px", height: "6px",
            borderRadius: "50%",
            background: hover ? "#fff" : project.color,
            animation: "pulse 1.5s ease-in-out infinite",
          }} />
          LIVE ↗
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: "18px",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        color: hover ? "#fff" : "#e2e8f0",
        marginBottom: "12px",
        lineHeight: 1.3,
        transition: "color 0.3s",
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: "14px",
        lineHeight: 1.7,
        color: "#64748b",
        marginBottom: "24px",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {project.description}
      </p>

      {/* Tech badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {project.tech.map((tech, i) => (
          <span
            key={i}
            style={{
              padding: "4px 12px",
              background: `rgba(${hexToRgb(project.color)},0.1)`,
              border: `1px solid rgba(${hexToRgb(project.color)},0.25)`,
              borderRadius: "20px",
              fontSize: "12px",
              color: project.color,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover CTA */}
      <div style={{
        position: "absolute",
        bottom: "20px",
        right: "24px",
        opacity: hover ? 1 : 0,
        transform: hover ? "translateX(0)" : "translateX(10px)",
        transition: "all 0.3s ease",
        color: project.color,
        fontSize: "13px",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
      }}>
        Click to visit →
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.5 } }
      `}</style>
    </div>
  );
};

const Projects = () => {
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
      id="projects"
      ref={ref}
      style={{
        padding: "100px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", bottom: "10%", right: "-10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Title */}
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
            My Work
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, color: "#fff",
          }}>
            Featured <span style={{
              background: "linear-gradient(135deg, #06b6d4, #10b981)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Projects</span>
          </h2>
          <div style={{
            width: "60px", height: "4px", margin: "16px auto 0",
            background: "linear-gradient(135deg, #06b6d4, #10b981)",
            borderRadius: "2px",
          }} />
          <p style={{
            marginTop: "16px", color: "#64748b",
            fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
          }}>
            Click any card to visit the live project ↗
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "24px",
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
