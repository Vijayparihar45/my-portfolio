import { useEffect, useRef, useState } from "react";
import { skills } from "../constants";

const skillIcons = {
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "⚡",
  "React.js": "⚛️",
  PHP: "🐘",
  "Node.js": "🟢",
  MySQL: "🗄️",
  Git: "🔀",
  GitHub: "🐙",
  "Google Apps Script": "📊",
};

const skillLevels = {
  HTML: 100,
  CSS: 100,
  JavaScript: 100,
  "React.js": 100,
  PHP: 100,
  java:100,
  "Node.js": 100,
  MySQL: 100,
  Git: 100,
  GitHub: 100,
  "Google Apps Script": 100,
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : "168,85,247";
}

const SkillBadge = ({ skill, color, gradient, delay, sectionVisible }) => {
  const [hover, setHover] = useState(false);
  const [appeared, setAppeared] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const level = skillLevels[skill] || 70;
  const rgb = hexToRgb(color);

  useEffect(() => {
    if (sectionVisible) {
      const t1 = setTimeout(() => setAppeared(true), delay);
      const t2 = setTimeout(() => setBarWidth(level), delay + 300);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [sectionVisible, delay, level]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "14px 16px",
        background: hover
          ? `rgba(${rgb},0.12)`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hover ? color : "rgba(255,255,255,0.07)"}`,
        borderRadius: "14px",
        cursor: "default",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        transform: appeared
          ? hover ? "translateY(-6px) scale(1.03)" : "translateY(0) scale(1)"
          : "translateY(25px) scale(0.9)",
        opacity: appeared ? 1 : 0,
        boxShadow: hover ? `0 12px 32px rgba(${rgb},0.25), inset 0 1px 0 rgba(255,255,255,0.05)` : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shine effect on hover */}
      <div style={{
        position: "absolute",
        top: "-50%", left: hover ? "120%" : "-60%",
        width: "40%", height: "200%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        transform: "skewX(-20deg)",
        transition: "left 0.5s ease",
        pointerEvents: "none",
      }} />

      {/* Top row: icon + name + percentage */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
      }}>
        <div style={{
          width: "36px", height: "36px",
          background: hover ? `rgba(${rgb},0.2)` : "rgba(255,255,255,0.05)",
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "18px",
          transition: "all 0.3s ease",
          transform: hover ? "rotate(10deg) scale(1.15)" : "rotate(0) scale(1)",
          flexShrink: 0,
        }}>
          {skillIcons[skill] || "💡"}
        </div>

        <span style={{
          flex: 1,
          fontSize: "14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          color: hover ? "#fff" : "#cbd5e1",
          transition: "color 0.3s",
          letterSpacing: "0.3px",
        }}>
          {skill}
        </span>

        <span style={{
          fontSize: "12px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          color: hover ? color : "#475569",
          transition: "color 0.3s",
        }}>
          {level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div style={{
        height: "4px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "2px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${barWidth}%`,
          background: gradient,
          borderRadius: "2px",
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: hover ? `0 0 8px rgba(${rgb},0.8)` : "none",
          position: "relative",
        }}>
          {/* Shimmer on bar */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            animation: "shimmer 2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category, index, sectionVisible }) => {
  const [hover, setHover] = useState(false);
  const rgb = hexToRgb(category.color);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover
          ? `rgba(${rgb},0.06)`
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${hover ? `rgba(${rgb},0.5)` : "rgba(255,255,255,0.07)"}`,
        borderRadius: "22px",
        padding: "28px",
        position: "relative",
        overflow: "hidden",
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? "translateY(0)" : "translateY(50px)",
        transition: `all 0.6s cubic-bezier(0.34,1.2,0.64,1) ${index * 0.12}s`,
        boxShadow: hover ? `0 20px 50px rgba(${rgb},0.15)` : "none",
      }}
    >
      {/* Animated top border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "2px",
        background: category.gradient,
        transform: `scaleX(${hover ? 1 : 0.3})`,
        transformOrigin: "left",
        transition: "transform 0.4s ease",
        borderRadius: "1px 1px 0 0",
      }} />

      {/* Glow blob inside card */}
      <div style={{
        position: "absolute", bottom: "-40px", right: "-40px",
        width: "120px", height: "120px",
        background: `radial-gradient(circle, rgba(${rgb},0.15) 0%, transparent 70%)`,
        borderRadius: "50%",
        opacity: hover ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />

      {/* Category Header */}
      <div style={{
        display: "flex", alignItems: "center",
        gap: "12px", marginBottom: "22px",
      }}>
        <div style={{
          width: "42px", height: "42px",
          background: category.gradient,
          borderRadius: "12px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "20px",
          boxShadow: hover ? `0 6px 20px rgba(${rgb},0.5)` : "none",
          transition: "all 0.3s ease",
          transform: hover ? "scale(1.1) rotate(-5deg)" : "scale(1)",
          flexShrink: 0,
        }}>
          {category.category === "Frontend" && "🖥️"}
          {category.category === "Backend" && "⚙️"}
          {category.category === "Database" && "🗄️"}
          {category.category === "Tools" && "🛠️"}
        </div>
        <div>
          <h3 style={{
            fontSize: "18px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            background: category.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "2px",
          }}>
            {category.category}
          </h3>
          <p style={{
            fontSize: "12px",
            color: "#475569",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            {category.items.length} skills
          </p>
        </div>
      </div>

      {/* Skills */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {category.items.map((skill, i) => (
          <SkillBadge
            key={i}
            skill={skill}
            color={category.color}
            gradient={category.gradient}
            delay={sectionVisible ? index * 120 + i * 80 : 9999}
            sectionVisible={sectionVisible}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Count-up for total skills
  const totalSkills = skills.reduce((a, b) => a + b.items.length, 0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= totalSkills) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, [visible, totalSkills]);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "100px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", top: "20%", left: "-10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animation: "floatBlob 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "-5%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animation: "floatBlob 10s ease-in-out infinite reverse",
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
            What I Know
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, color: "#fff", marginBottom: "16px",
          }}>
            My{" "}
            <span style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Skills</span>
          </h2>
          <div style={{
            width: "60px", height: "4px", margin: "0 auto 20px",
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            borderRadius: "2px",
          }} />

          {/* Animated counter */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 24px",
            background: "rgba(168,85,247,0.08)",
            border: "1px solid rgba(168,85,247,0.2)",
            borderRadius: "30px",
          }}>
            <span style={{
              fontSize: "26px", fontWeight: 800,
              fontFamily: "'Space Grotesk', sans-serif",
              background: "linear-gradient(135deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              {count}+
            </span>
            <span style={{
              fontSize: "14px", color: "#64748b",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
            }}>
              Technologies Learned
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "22px",
        }}>
          {skills.map((category, i) => (
            <CategoryCard
              key={i}
              category={category}
              index={i}
              sectionVisible={visible}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) }
          100% { transform: translateX(200%) }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-30px) }
        }
      `}</style>
    </section>
  );
};

export default Skills;