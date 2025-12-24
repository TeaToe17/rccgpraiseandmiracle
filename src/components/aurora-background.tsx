"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Aurora layers */}
      <div className="absolute inset-0">
        {/* Layer 1 */}
        <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] opacity-30 blur-3xl animate-aurora-1">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-400 to-transparent" />
        </div>

        {/* Layer 2 */}
        <div className="absolute -top-1/4 left-1/4 w-[150%] h-[150%] opacity-25 blur-3xl animate-aurora-2">
          <div className="absolute inset-0 bg-gradient-to-l from-blue-600 via-sky-500 to-transparent" />
        </div>

        {/* Layer 3 */}
        <div className="absolute top-1/4 -right-1/4 w-[150%] h-[150%] opacity-20 blur-3xl animate-aurora-3">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-pink-400 to-transparent" />
        </div>
      </div>

      {/* Subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  );
}
