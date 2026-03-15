interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}
export default function SectionHeader({ tag, title, subtitle, center = true }: Props) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-[#FF6820]/30">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
