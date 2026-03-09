import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../constants";

const SERVICE_ID = "service_h8up4zd";
const TEMPLATE_ID = "template_usto12h";
const PUBLIC_KEY = "kucTytkglz7eJKbMC";

const ContactInfo = ({ icon, label, value, href, color, delay, visible }) => {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "div";

  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "20px 24px",
        background: hover ? `rgba(${color},0.08)` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hover ? `rgba(${color},0.6)` : "rgba(255,255,255,0.08)"}`,
        borderRadius: "16px",
        textDecoration: "none",
        transition: "all 0.3s ease",
        cursor: href ? "pointer" : "default",
        transform: visible ? (hover ? "translateX(6px)" : "translateX(0)") : "translateX(-30px)",
        opacity: visible ? 1 : 0,
        transitionDelay: delay,
        boxShadow: hover ? `0 8px 25px rgba(${color},0.15)` : "none",
      }}
    >
      <div style={{
        width: "46px", height: "46px",
        background: `rgba(${color},0.15)`,
        borderRadius: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "20px", flexShrink: 0,
        transition: "transform 0.3s",
        transform: hover ? "scale(1.1) rotate(5deg)" : "scale(1)",
      }}>
        {icon}
      </div>
      <div>
        <p style={{
          fontSize: "12px", color: "#64748b",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500, letterSpacing: "1px",
          textTransform: "uppercase", marginBottom: "4px",
        }}>{label}</p>
        <p style={{
          fontSize: "15px", color: "#e2e8f0",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          transition: "color 0.3s",
          ...(hover && { color: `rgb(${color})` }),
        }}>{value}</p>
      </div>
    </Tag>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      PUBLIC_KEY
    ).then(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }).catch(() => {
      setSending(false);
      alert("Something went wrong! Please try again.");
    });
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "14px 18px",
    background: focusedField === field ? "rgba(168,85,247,0.08)" : "rgba(255,255,255,0.04)",
    border: `1px solid ${focusedField === field ? "#a855f7" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "12px",
    color: "#fff",
    fontSize: "15px",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
    boxShadow: focusedField === field ? "0 0 20px rgba(168,85,247,0.15)" : "none",
  });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "100px 60px",
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      <div style={{
        position: "absolute", top: "20%", left: "-10%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "-5%",
        width: "350px", height: "350px",
        background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
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
            Let's Talk
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, color: "#fff",
          }}>
            Get In <span style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Touch</span>
          </h2>
          <div style={{
            width: "60px", height: "4px", margin: "16px auto 0",
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            borderRadius: "2px",
          }} />
        </div>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "48px",
          alignItems: "start",
        }}
          className="contact-grid"
        >
          {/* LEFT — Contact Info */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.7s ease 0.2s",
          }}>
            <h3 style={{
              fontSize: "22px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, color: "#fff", marginBottom: "8px",
            }}>
              Contact Information
            </h3>
            <p style={{
              color: "#64748b", fontSize: "14px",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "32px", lineHeight: 1.6,
            }}>
              Feel free to reach out — I'm always open to new opportunities and collaborations! 🚀
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <ContactInfo
                icon="📧"
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
                color="168,85,247"
                delay="0.1s"
                visible={visible}
              />
              <ContactInfo
                icon="📱"
                label="Phone"
                value={contact.phone}
                href={`tel:${contact.phone}`}
                color="6,182,212"
                delay="0.2s"
                visible={visible}
              />
              <ContactInfo
                icon="📍"
                label="Location"
                value={contact.location}
                color="16,185,129"
                delay="0.3s"
                visible={visible}
              />
            </div>

            {/* Social Links */}
            <div style={{ marginTop: "32px" }}>
              <p style={{
                color: "#64748b", fontSize: "13px",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "2px", textTransform: "uppercase",
                marginBottom: "16px",
              }}>Connect With Me</p>
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { label: "GitHub", href: "https://github.com", icon: "🐙" },
                  { label: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "10px 20px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      display: "flex", gap: "8px", alignItems: "center",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#a855f7";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.background = "rgba(168,85,247,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    <span>{social.icon}</span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.7s ease 0.3s",
          }}>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(168,85,247,0.15)",
              borderRadius: "20px",
              padding: "40px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: "20%", right: "20%",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)",
              }} />

              <h3 style={{
                fontSize: "20px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, color: "#fff", marginBottom: "28px",
              }}>
                Send Me a Message 💬
              </h3>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label style={{
                    display: "block", marginBottom: "8px",
                    color: "#94a3b8", fontSize: "13px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600, letterSpacing: "0.5px",
                  }}>Your Name</label>
                  <input
                    type="text"
                    placeholder="Vijay Singh"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle("name")}
                  />
                </div>

                <div>
                  <label style={{
                    display: "block", marginBottom: "8px",
                    color: "#94a3b8", fontSize: "13px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600, letterSpacing: "0.5px",
                  }}>Your Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle("email")}
                  />
                </div>

                <div>
                  <label style={{
                    display: "block", marginBottom: "8px",
                    color: "#94a3b8", fontSize: "13px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600, letterSpacing: "0.5px",
                  }}>Your Message</label>
                  <textarea
                    placeholder="Hello Vijay, I'd like to..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    padding: "15px 32px",
                    background: sent
                      ? "linear-gradient(135deg, #10b981, #06b6d4)"
                      : "linear-gradient(135deg, #a855f7, #ec4899)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    cursor: sending ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    opacity: sending ? 0.7 : 1,
                    letterSpacing: "0.5px",
                    boxShadow: "0 4px 20px rgba(168,85,247,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow = "0 12px 30px rgba(168,85,247,0.6)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 20px rgba(168,85,247,0.4)";
                  }}
                >
                  {sending ? "Sending... ⏳" : sent ? "✅ Message Sent!" : "Send Message 🚀"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;