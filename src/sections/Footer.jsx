import { useState, useEffect } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Certificates", id: "certificates" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <style>{`
        @keyframes heartbeat { 0%,100%{transform:scale(1)}50%{transform:scale(1.3)} }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(16,185,129,0.4)}50%{opacity:0.8;box-shadow:0 0 0 6px rgba(16,185,129,0)} }
        @keyframes scrollBounce { 0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)} }
        .f-link { background:none;border:none;color:#64748b;font-size:14px;font-family:'Space Grotesk',sans-serif;font-weight:500;cursor:pointer;text-align:left;padding:0;transition:all 0.3s;display:flex;align-items:center;gap:8px; }
        .f-link:hover { color:#a855f7 !important; transform:translateX(5px); }
        .f-social { width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;color:#64748b;text-decoration:none;transition:all 0.3s; }
        .f-social:hover { border-color:#a855f7 !important;background:rgba(168,85,247,0.1) !important;color:#fff !important;transform:translateY(-3px); }
        .f-contact-a { color:#64748b;font-size:13px;font-family:'Space Grotesk',sans-serif;text-decoration:none;transition:color 0.3s; }
        .f-contact-a:hover { color:#06b6d4 !important; }
        @media (max-width:768px) {
          .f-grid { flex-direction:column !important; gap:32px !important; }
          .f-bottom { flex-direction:column !important; align-items:flex-start !important; gap:12px !important; }
          footer { padding:40px 20px 24px !important; }
          .scroll-top-btn { bottom:80px !important; right:16px !important; }
        }
      `}</style>

      {/* Scroll To Top */}
      <button className="scroll-top-btn" onClick={scrollToTop} style={{
        position:"fixed", bottom:"30px", right:"30px",
        width:"46px", height:"46px", borderRadius:"50%",
        background:"linear-gradient(135deg,#a855f7,#06b6d4)",
        border:"none", cursor:"pointer", fontSize:"18px", color:"#fff",
        display:"flex", alignItems:"center", justifyContent:"center",
        zIndex:999,
        opacity: showTop ? 1 : 0,
        transform: showTop ? "scale(1)" : "scale(0.5)",
        transition:"all 0.3s ease",
        boxShadow:"0 4px 20px rgba(168,85,247,0.5)",
        pointerEvents: showTop ? "all" : "none",
        animation: showTop ? "scrollBounce 2s ease-in-out infinite" : "none",
      }}>↑</button>

      <footer style={{
        position:"relative", overflow:"hidden",
        padding:"70px 60px 32px", marginTop:"20px",
      }}>
        {/* Top glow line */}
        <div style={{
          position:"absolute", top:0, left:0, right:0, height:"1px",
          background:"linear-gradient(90deg,transparent,#a855f7,#06b6d4,#ec4899,transparent)",
        }}/>

        {/* BG glows */}
        <div style={{
          position:"absolute", top:"-60px", left:"50%", transform:"translateX(-50%)",
          width:"700px", height:"250px",
          background:"radial-gradient(ellipse,rgba(168,85,247,0.07) 0%,transparent 70%)",
          pointerEvents:"none",
        }}/>
        <div style={{
          position:"absolute", bottom:0, left:"10%",
          width:"300px", height:"200px",
          background:"radial-gradient(ellipse,rgba(6,182,212,0.05) 0%,transparent 70%)",
          pointerEvents:"none",
        }}/>

        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

          {/* Main Grid */}
          <div className="f-grid" style={{
            display:"flex", justifyContent:"space-between",
            alignItems:"flex-start", flexWrap:"wrap",
            gap:"48px", marginBottom:"52px",
          }}>

            {/* Brand */}
            <div style={{ flex:"1 1 260px", maxWidth:"300px" }}>
              <div onClick={scrollToTop} style={{
                fontSize:"26px", fontWeight:800,
                fontFamily:"'Space Grotesk',sans-serif",
                cursor:"pointer", marginBottom:"16px", display:"inline-block",
              }}>
                <span style={{color:"#a855f7"}}>&lt;</span>
                <span style={{color:"#fff"}}>Vijay</span>
                <span style={{color:"#06b6d4"}}>.dev</span>
                <span style={{color:"#a855f7"}}>&gt;</span>
              </div>
              <p style={{
                color:"#64748b", fontSize:"14px",
                fontFamily:"'DM Sans',sans-serif",
                lineHeight:1.8, marginBottom:"24px",
              }}>
                BCA Student & Full Stack Web Developer passionate about building modern, responsive digital experiences. 🚀
              </p>

              {/* Socials */}
              <div style={{ display:"flex", gap:"10px" }}>
                {[
                  { href:"https://github.com/Vijayparihar45", svg:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
                  { href:"https://linkedin.com/in/vijayparihar45", svg:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { href:"https://wa.me/917310687409", svg:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="f-social">{s.svg}</a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ flex:"0 0 auto" }}>
              <p style={{
                fontSize:"13px", fontFamily:"'Space Grotesk',sans-serif",
                fontWeight:700, letterSpacing:"3px",
                textTransform:"uppercase", marginBottom:"22px",
                background:"linear-gradient(135deg,#a855f7,#06b6d4)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>Quick Links</p>
              <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
                {navLinks.map((link) => (
                  <button key={link.id} className="f-link"
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior:"smooth" })}>
                    <span style={{ color:"#a855f7", fontSize:"10px" }}>▸</span>
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div style={{ flex:"0 0 auto" }}>
              <p style={{
                fontSize:"13px", fontFamily:"'Space Grotesk',sans-serif",
                fontWeight:700, letterSpacing:"3px",
                textTransform:"uppercase", marginBottom:"22px",
                background:"linear-gradient(135deg,#06b6d4,#10b981)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>Get In Touch</p>
              <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
                {[
                  { icon:"📧", value:"vijaysp2021@gmail.com", href:"mailto:vijaysp2021@gmail.com" },
                  { icon:"📱", value:"+91 7310687409", href:"tel:+917310687409" },
                  { icon:"📍", value:"Uttarakhand, India", href:null },
                  { icon:"🎓", value:"PAL College, BCA", href:null },
                ].map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{
                      width:"32px", height:"32px",
                      background:"rgba(255,255,255,0.04)",
                      border:"1px solid rgba(255,255,255,0.08)",
                      borderRadius:"8px", display:"flex",
                      alignItems:"center", justifyContent:"center",
                      fontSize:"14px", flexShrink:0,
                    }}>{item.icon}</div>
                    {item.href
                      ? <a href={item.href} className="f-contact-a">{item.value}</a>
                      : <span style={{ color:"#64748b", fontSize:"13px", fontFamily:"'Space Grotesk',sans-serif" }}>{item.value}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height:"1px", marginBottom:"28px",
            background:"linear-gradient(90deg,transparent,rgba(168,85,247,0.4),rgba(6,182,212,0.4),transparent)",
          }}/>

          {/* Bottom */}
          <div className="f-bottom" style={{
            display:"flex", justifyContent:"space-between",
            alignItems:"center", flexWrap:"wrap", gap:"14px",
          }}>
            <p style={{
              color:"#475569", fontSize:"13px",
              fontFamily:"'Space Grotesk',sans-serif",
              display:"flex", alignItems:"center", gap:"6px", flexWrap:"wrap",
            }}>
              <span>© 2026</span>
              <span style={{
                background:"linear-gradient(135deg,#a855f7,#06b6d4)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                backgroundClip:"text", fontWeight:700,
              }}>Vijay Singh Parihar</span>
              <span>· Built with</span>
              <span style={{ animation:"heartbeat 1.2s ease-in-out infinite", color:"#ec4899", display:"inline-block" }}>❤️</span>
              <span>using</span>
              <span style={{ color:"#06b6d4", fontWeight:600 }}>React.js</span>
            </p>

            <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
              <div style={{
                display:"flex", alignItems:"center", gap:"7px",
                padding:"6px 14px",
                background:"rgba(16,185,129,0.08)",
                border:"1px solid rgba(16,185,129,0.25)",
                borderRadius:"20px",
              }}>
                <span style={{
                  width:"7px", height:"7px", borderRadius:"50%",
                  background:"#10b981", display:"inline-block",
                  animation:"pulse 1.5s ease-in-out infinite",
                }}/>
                <span style={{ color:"#10b981", fontSize:"12px", fontFamily:"'Space Grotesk',sans-serif", fontWeight:600 }}>
                  Open to Work
                </span>
              </div>
              <div style={{
                padding:"6px 14px",
                background:"rgba(255,153,51,0.08)",
                border:"1px solid rgba(255,153,51,0.2)",
                borderRadius:"20px", fontSize:"12px", color:"#ff9933",
                fontFamily:"'Space Grotesk',sans-serif", fontWeight:600,
              }}>
                🇮🇳 Made in India
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;