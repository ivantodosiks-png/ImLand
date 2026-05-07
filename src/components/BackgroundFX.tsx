import ParticlesCanvas from "./ParticlesCanvas";

export default function BackgroundFX() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-ink-900" />
        <div className="absolute inset-0 bg-aurora opacity-90 blur-3xl" />
        <div className="absolute inset-0 bg-radial-fade opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_120%,rgba(168,85,247,.14),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22400%22%20height=%22400%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%222%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22400%22%20height=%22400%22%20filter=%22url(%23n)%22%20opacity=%220.35%22/%3E%3C/svg%3E')]" />
      </div>
      <ParticlesCanvas />
    </>
  );
}

