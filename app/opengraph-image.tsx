import { ImageResponse } from "next/og";

export const alt = "Mriganka Debnath — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      background: "#fdfbf7",
      color: "#171717",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "64px",
      width: "100%",
      backgroundImage: "radial-gradient(#17171718 1px, transparent 1px)",
      backgroundSize: "12px 12px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ background: "#facc15", border: "3px solid #171717", display: "flex", height: "56px", width: "56px", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 700 }}>MD</div>
        <div style={{ display: "flex", fontFamily: "monospace", fontSize: "20px", fontWeight: 700 }}>MRIGANKA.DEV / ENGINEERING PORTFOLIO</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "940px" }}>
        <div style={{ alignSelf: "flex-start", background: "#22c55e", border: "3px solid #171717", display: "flex", fontFamily: "monospace", fontSize: "18px", fontWeight: 700, padding: "10px 16px" }}>SOFTWARE ENGINEER · INDIA</div>
        <div style={{ fontSize: "76px", fontWeight: 700, letterSpacing: "0", lineHeight: 1.03 }}>Backend systems.<br />Cloud architecture.<br />Developer tooling.</div>
      </div>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <div style={{ background: "#fffefa", border: "3px solid #171717", boxShadow: "8px 8px 0 #171717", display: "flex", fontFamily: "monospace", fontSize: "18px", fontWeight: 700, padding: "14px 20px" }}>LABCORP / IIT MADRAS / SAMSUNG R&amp;D</div>
        <div style={{ background: "#fb7185", border: "3px solid #171717", height: "56px", transform: "rotate(10deg)", width: "56px" }} />
      </div>
    </div>,
    { ...size },
  );
}
