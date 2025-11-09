export function SuccessIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="success-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#52D97F" />
          <stop offset="100%" stopColor="#40C368" />
        </linearGradient>
        <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#52D97F" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#40C368" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Glow effect */}
      <circle cx="100" cy="100" r="80" fill="url(#glow-gradient)"/>
      <circle cx="100" cy="100" r="60" fill="url(#glow-gradient)"/>
      
      {/* Main circle */}
      <circle cx="100" cy="100" r="50" fill="url(#success-gradient)"/>
      
      {/* Check mark */}
      <path 
        d="M75 100 L90 115 L125 80" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Confetti */}
      <g opacity="0.6">
        <rect x="40" y="30" width="8" height="8" fill="#4A9EFF" rx="2" transform="rotate(45 44 34)"/>
        <rect x="150" y="40" width="6" height="6" fill="#B197FC" rx="1" transform="rotate(30 153 43)"/>
        <circle cx="60" cy="160" r="4" fill="#FFF176"/>
        <rect x="140" y="150" width="8" height="8" fill="#52D97F" rx="2" transform="rotate(60 144 154)"/>
        <circle cx="160" cy="90" r="3" fill="#4A9EFF"/>
        <rect x="30" y="90" width="6" height="6" fill="#B197FC" rx="1" transform="rotate(20 33 93)"/>
      </g>
      
      {/* Sparkles */}
      <g fill="white" opacity="0.8">
        <path d="M100 40 L102 46 L108 46 L103 50 L105 56 L100 52 L95 56 L97 50 L92 46 L98 46 Z"/>
        <path d="M140 120 L141 123 L144 123 L141 125 L142 128 L140 126 L138 128 L139 125 L136 123 L139 123 Z"/>
      </g>
    </svg>
  );
}
