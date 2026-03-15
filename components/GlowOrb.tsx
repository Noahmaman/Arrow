interface Props {
  color?: string;
  size?: number;
  className?: string;
}
export default function GlowOrb({ color = "#FF6820", size = 400, className = "" }: Props) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
    />
  );
}
