import { useRef, useEffect, useState } from "react";
import logo from '/assets/img/WTM_Logo_Stacked.png'

const WTMLogo = () => (
  <img src={logo} alt="" />
);

export default function OGCard() {
  const cardRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [capturing, setCapturing] = useState(false);

  useEffect(() => {
    const existing = document.querySelector('script[data-html2canvas]');
    if (existing) { setReady(true); return; }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    script.setAttribute("data-html2canvas", "true");
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, []);

  const handleDownload = async () => {
    if (!window.html2canvas || !cardRef.current) return;
    setCapturing(true);
    await new Promise(r => setTimeout(r, 100));
    try {
      const canvas = await window.html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = "wtm-nsukka-iwd2026-og.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setCapturing(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0f1a",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "32px",
      padding: "40px 20px",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* OG Card */}
      <div
        ref={cardRef}
        style={{
          width: "1200px",
          height: "630px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0f1e8a 0%, #0d1a3a 40%, #1a0a3a 70%, #0f1e8a 100%)",
          borderRadius: capturing ? "0" : "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {/* Glow blobs — matching the hero section */}
        <div style={{
          position: "absolute",
          top: "-80px", left: "-60px",
          width: "480px", height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,53,197,0.55) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-100px", right: "-80px",
          width: "520px", height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(90,20,130,0.45) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          top: "60px", right: "200px",
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,138,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }} />

        {/* Subtle grid overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 80px",
          gap: "0",
        }}>
          {/* Logo */}
          <div style={{ marginBottom: "32px"}}>
            <img src={logo} alt="Women Techmakers Nsukka Logo" style={{width: "10rem", height: "10rem" }} />
          </div>

          {/* IWD badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,212,138,0.12)",
            border: "1px solid rgba(0,212,138,0.35)",
            borderRadius: "999px",
            padding: "6px 20px",
            marginBottom: "28px",
          }}>
            <span style={{
              width: "7px", height: "7px",
              borderRadius: "50%",
              background: "#00d48a",
              display: "inline-block",
              boxShadow: "0 0 8px #00d48a",
            }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              color: "#00d48a",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}>
              International Women's Day 2026
            </span>
          </div>

          {/* Main title */}
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "72px",
            fontWeight: "900",
            lineHeight: "1.05",
            margin: "0 0 24px 0",
            color: "white",
          }}>
            From the{" "}
            <span style={{ color: "#00d48a" }}>Margins</span>
            <br />
            to the{" "}
            <span style={{ color: "#00d48a" }}>Mainstream</span>
          </h1>

          {/* Date + Location pill */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "4px",
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255, 255, 255, 0.75)",
              fontSize: "17px",
              fontWeight: "800",
              letterSpacing: "0.3px",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              28th March, 2026
            </div>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "18px" }}>·</span>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.65)",
              fontSize: "17px",
              fontWeight: "400",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
              </svg>
              Nsukka, Enugu State
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #1a35c5, #00d48a, #1a35c5)",
        }} />
      </div>

      {/* Scale down preview note */}
      <p style={{
        color: "rgba(255,255,255,0.35)",
        fontSize: "13px",
        margin: 0,
        letterSpacing: "0.3px",
      }}>
        Card renders at 1200 × 630px — scaled down for preview
      </p>

      {/* Download button */}
      <button
        onClick={handleDownload}
        disabled={!ready || capturing}
        style={{
          background: capturing ? "rgba(0,212,138,0.3)" : "linear-gradient(135deg, #00d48a, #00b876)",
          color: capturing ? "rgba(255,255,255,0.6)" : "#0d1a3a",
          border: "none",
          borderRadius: "10px",
          padding: "14px 36px",
          fontSize: "15px",
          fontWeight: "700",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.5px",
          cursor: ready && !capturing ? "pointer" : "not-allowed",
          transition: "all 0.2s ease",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {capturing ? (
          <>
            <span style={{ display: "inline-block", width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "white", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
            Capturing…
          </>
        ) : !ready ? (
          "Loading…"
        ) : (
          <>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download OG Image
          </>
        )}
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}