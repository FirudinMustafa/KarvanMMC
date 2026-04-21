export default function GradientWaves() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-60 dark:opacity-40"
      style={{
        background:
          "linear-gradient(120deg, #4EA3FF15 0%, #1E6FE025 25%, #0A3B8C20 50%, #1E6FE025 75%, #4EA3FF15 100%)",
        backgroundSize: "300% 300%",
        animation: "gradient-shift 22s ease-in-out infinite",
      }}
    />
  );
}
