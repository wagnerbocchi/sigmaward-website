export default function GridOverlay({ size = 52 }: { size?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
