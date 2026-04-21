export default function CaravanPath() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full opacity-30 dark:opacity-25"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="caravanLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4EA3FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#4EA3FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#1E6FE0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M -50 600 C 200 450, 400 750, 650 550 S 1000 300, 1250 500 S 1500 700, 1700 480"
        fill="none"
        stroke="url(#caravanLine)"
        strokeWidth="2"
        strokeDasharray="6 10"
        style={{
          strokeDashoffset: 1000,
          animation: "draw-path 14s linear infinite",
        }}
      />
      <path
        d="M -50 300 C 300 200, 500 450, 800 280 S 1200 120, 1700 260"
        fill="none"
        stroke="url(#caravanLine)"
        strokeWidth="1.5"
        strokeDasharray="4 14"
        style={{
          strokeDashoffset: 1000,
          animation: "draw-path 20s linear 4s infinite",
        }}
      />
    </svg>
  );
}
