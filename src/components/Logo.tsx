type LogoProps = {
  size?: number;
  variant?: 'full' | 'icon';
  className?: string;
};

function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer rounded shield */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#logoGrad)" />
      <rect
        x="2.75"
        y="2.75"
        width="42.5"
        height="42.5"
        rx="11.25"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.5"
      />

      {/* Left half — flame (heating) */}
      <path
        d="M16 11C16 11 13 16 13 21C13 25.5 15.5 28 18.5 28C21 28 23 26 23 23C23 19 20 17 20 13C20 13 19 15.5 17.5 16.5C17.5 16.5 18 14 16 11Z"
        fill="#FBBF24"
        opacity="0.95"
      />
      <path
        d="M18.5 24C18.5 24 17 26 17 28C17 29.5 18 30.5 19.5 30.5C20.8 30.5 21.8 29.5 21.8 28C21.8 26.2 20.3 25.5 20.3 24.2C20.3 24.2 19.5 25 18.5 24Z"
        fill="#F59E0B"
        opacity="0.9"
      />

      {/* Center divider */}
      <line
        x1="24"
        y1="12"
        x2="24"
        y2="36"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Right half — snowflake (cooling) */}
      <g stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round">
        {/* Vertical stem */}
        <line x1="33" y1="12" x2="33" y2="36" />
        {/* Horizontal arms */}
        <line x1="26" y1="24" x2="40" y2="24" />
        {/* Diagonal arms */}
        <line x1="28.5" y1="19.5" x2="37.5" y2="28.5" />
        <line x1="28.5" y1="28.5" x2="37.5" y2="19.5" />
        {/* End caps — small arrow-like branches */}
        <line x1="33" y1="12" x2="31" y2="14.5" />
        <line x1="33" y1="12" x2="35" y2="14.5" />
        <line x1="33" y1="36" x2="31" y2="33.5" />
        <line x1="33" y1="36" x2="35" y2="33.5" />
        <line x1="26" y1="24" x2="28.5" y2="22.5" />
        <line x1="26" y1="24" x2="28.5" y2="25.5" />
        <line x1="40" y1="24" x2="37.5" y2="22.5" />
        <line x1="40" y1="24" x2="37.5" y2="25.5" />
      </g>

      {/* Small center dot */}
      <circle cx="33" cy="24" r="2.2" fill="#38BDF8" />

      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E3A5F" />
          <stop offset="1" stopColor="#0F2540" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({ size = 40, variant = 'full', className = '' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <div className={className}>
        <LogoIcon size={size} />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon size={size} />
      <div className="flex flex-col leading-tight">
        <span className="text-white font-extrabold text-sm md:text-base tracking-tight">
          Grant Heating &amp; Air
        </span>
        <span className="text-sky-400 text-[10px] md:text-xs font-medium tracking-wide uppercase">
          Conditioning Inc. · Columbia, MO
        </span>
      </div>
    </div>
  );
}

export { LogoIcon };
