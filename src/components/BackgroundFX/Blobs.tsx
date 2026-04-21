const BLOBS = [
  { top: "-10%", left: "-8%", size: 520, color: "#4EA3FF", opacity: 0.25, delay: 0 },
  { top: "40%", left: "70%", size: 620, color: "#1E6FE0", opacity: 0.22, delay: -6 },
  { top: "75%", left: "10%", size: 440, color: "#0A3B8C", opacity: 0.18, delay: -12 },
  { top: "5%", left: "55%", size: 360, color: "#4EA3FF", opacity: 0.2, delay: -18 },
];

export default function Blobs() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-screen dark:mix-blend-lighten"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 30% 30%, ${b.color}${Math.round(b.opacity * 255).toString(16).padStart(2, "0")}, transparent 70%)`,
            filter: "blur(80px)",
            animation: `blob-drift 24s ease-in-out ${b.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
