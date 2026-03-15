export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 75 Q20 30 50 20 Q80 10 80 50 Q80 70 60 75 Q40 80 35 65 Q30 50 45 45 Q60 40 58 55"
          stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <div>
        <span className="text-white font-bold text-xl tracking-tight">arrow</span>
        <span className="text-[#FF6820] font-bold text-xl tracking-tight"> AI</span>
      </div>
    </div>
  );
}
