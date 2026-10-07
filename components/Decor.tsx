"use client";

const particleSlots = [
  { left: "8%", top: "18%", delay: "0s", size: 4 },
  { left: "18%", top: "72%", delay: "1.1s", size: 3 },
  { left: "28%", top: "34%", delay: "2.4s", size: 5 },
  { left: "42%", top: "12%", delay: "0.6s", size: 3 },
  { left: "55%", top: "80%", delay: "1.8s", size: 4 },
  { left: "67%", top: "28%", delay: "2.9s", size: 3 },
  { left: "76%", top: "62%", delay: "0.3s", size: 5 },
  { left: "88%", top: "20%", delay: "2.1s", size: 3 },
  { left: "91%", top: "78%", delay: "1.4s", size: 4 },
  { left: "12%", top: "50%", delay: "3.2s", size: 2 },
  { left: "49%", top: "46%", delay: "0.9s", size: 3 },
  { left: "33%", top: "88%", delay: "2.6s", size: 2 },
];

const noteSlots = [
  { left: "10%", delay: "0s", char: "♪" },
  { left: "26%", delay: "3s", char: "♫" },
  { left: "48%", delay: "6s", char: "♩" },
  { left: "68%", delay: "2s", char: "♬" },
  { left: "86%", delay: "8s", char: "♪" },
];

export function GoldParticles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particleSlots.map((p) => (
        <span
          key={`${p.left}-${p.top}`}
          className="absolute rounded-full bg-gold-light animate-sparkle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            boxShadow: "0 0 8px 2px rgba(232, 196, 106, 0.65)",
          }}
        />
      ))}
    </div>
  );
}

export function FloatingNotes({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {noteSlots.map((n) => (
        <span
          key={`${n.left}-${n.char}`}
          className="absolute bottom-4 font-heading text-2xl text-gold-light/40 animate-drift-note"
          style={{ left: n.left, animationDelay: n.delay }}
        >
          {n.char}
        </span>
      ))}
    </div>
  );
}

export function KolamCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 8h28M8 8v28M8 22h14V8"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="22" cy="22" r="3" stroke="currentColor" />
      <circle cx="8" cy="8" r="2" fill="currentColor" />
      <path d="M36 8c0 10-8 18-18 18" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function VeenaSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 420" className={className} fill="none" aria-hidden="true">
      <ellipse cx="110" cy="328" rx="62" ry="48" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="110" cy="328" rx="38" ry="28" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="110" cy="188" rx="28" ry="22" stroke="currentColor" strokeWidth="1.4" />
      <path d="M110 166V42" stroke="currentColor" strokeWidth="2" />
      <path d="M98 58h24M96 78h28M96 98h28M98 118h24" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="110" cy="30" r="12" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="110" cy="30" r="4" fill="currentColor" />
      <path d="M86 328c-22 8-38 28-22 46 18 20 62 18 80 0 16-16 4-38-18-46" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function TempleArch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 210 V90 Q20 20 200 20 Q380 20 380 90 V210"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M48 210 V100 Q48 48 200 48 Q352 48 352 100 V210"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <circle cx="200" cy="20" r="6" fill="currentColor" />
      <path d="M200 26 v22" stroke="currentColor" />
    </svg>
  );
}

export function DiyaGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute inset-0 diya-halo animate-pulse-glow" />
      <svg viewBox="0 0 120 90" className="relative mx-auto h-16 w-20 text-gold-light">
        <path
          d="M60 8 C54 22 52 32 60 42 C68 32 66 22 60 8 Z"
          fill="currentColor"
          opacity="0.9"
        />
        <ellipse cx="60" cy="18" rx="4" ry="8" fill="#f3e3a8" />
        <path
          d="M18 58 C30 48 90 48 102 58 C88 78 32 78 18 58 Z"
          fill="currentColor"
        />
        <path d="M28 58h64" stroke="#7a1f2b" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
}

export function MandalaMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="36" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="8" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 100 + Math.cos(a) * 16;
        const y1 = 100 + Math.sin(a) * 16;
        const x2 = 100 + Math.cos(a) * 88;
        const y2 = 100 + Math.sin(a) * 88;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.6" />;
      })}
    </svg>
  );
}
