import { useEffect, useRef } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height;

    // Stars array
    const stars = [];
    const shootingStars = [];
    const nebulas = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Create stars
    const createStars = () => {
      stars.length = 0;
      const count = Math.floor((width * height) / 3000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 0.2,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
          color: getStarColor(),
        });
      }
    };

    const getStarColor = () => {
      const colors = [
        "255,255,255",   // white
        "200,180,255",   // purple tint
        "180,230,255",   // cyan tint
        "255,210,210",   // pink tint
        "210,255,240",   // green tint
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Create nebula blobs
    const createNebulas = () => {
      nebulas.length = 0;
      const nebulaData = [
        { x: width * 0.1, y: height * 0.2, r: 300, color: "168,85,247" },
        { x: width * 0.8, y: height * 0.5, r: 250, color: "6,182,212" },
        { x: width * 0.5, y: height * 0.8, r: 200, color: "236,72,153" },
        { x: width * 0.3, y: height * 0.6, r: 180, color: "16,185,129" },
      ];
      nebulas.push(...nebulaData);
    };

    // Shooting star
    const addShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        length: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() * 0.3 - 0.15),
        width: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "168,85,247" : "6,182,212",
      });
    };

    // Draw nebulas
    const drawNebulas = () => {
      nebulas.forEach((n) => {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        grad.addColorStop(0, `rgba(${n.color},0.10)`);
        grad.addColorStop(0.5, `rgba(${n.color},0.05)`);
        grad.addColorStop(1, `rgba(${n.color},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Draw stars with twinkle
    const drawStars = () => {
      stars.forEach((star) => {
        // Twinkle
        star.opacity += star.twinkleSpeed * star.twinkleDir;
        if (star.opacity >= 1) { star.opacity = 1; star.twinkleDir = -1; }
        if (star.opacity <= 0.1) { star.opacity = 0.1; star.twinkleDir = 1; }

        // Glow effect for bigger stars
        if (star.radius > 1.2) {
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 4
          );
          glow.addColorStop(0, `rgba(${star.color},${star.opacity})`);
          glow.addColorStop(1, `rgba(${star.color},0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Star dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color},${star.opacity})`;
        ctx.fill();
      });
    };

    // Draw shooting stars
    const drawShootingStars = () => {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(${s.color},0)`);
        grad.addColorStop(0.7, `rgba(${s.color},${s.opacity * 0.6})`);
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.lineCap = "round";
        ctx.stroke();

        // Head glow
        const headGlow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 6);
        headGlow.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
        headGlow.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Move
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (s.opacity <= 0 || s.x > width + 100 || s.y > height + 100) {
          shootingStars.splice(i, 1);
        }
      }
    };

    // Shooting star interval
    const shootInterval = setInterval(() => {
      if (Math.random() > 0.4) addShootingStar();
    }, 2500);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep space background — lighter
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#0d0d1f");
      bgGrad.addColorStop(0.5, "#0a0a1a");
      bgGrad.addColorStop(1, "#0f0f22");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      drawNebulas();
      drawStars();
      drawShootingStars();

      animationId = requestAnimationFrame(animate);
    };

    // Init
    resize();
    createStars();
    createNebulas();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createStars();
      createNebulas();
    });

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(shootInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default GalaxyBackground;