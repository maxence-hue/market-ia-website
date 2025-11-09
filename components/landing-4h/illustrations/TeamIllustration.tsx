export function TeamIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="team-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A9EFF" />
          <stop offset="100%" stopColor="#357ABD" />
        </linearGradient>
        <linearGradient id="team-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B197FC" />
          <stop offset="100%" stopColor="#9775FA" />
        </linearGradient>
        <linearGradient id="team-success" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#52D97F" />
          <stop offset="100%" stopColor="#40C368" />
        </linearGradient>
      </defs>
      
      {/* People silhouettes */}
      <g transform="translate(80, 150)">
        {/* Person 1 */}
        <circle cx="0" cy="-30" r="25" fill="url(#team-primary)" opacity="0.8"/>
        <path d="M-30 20 Q-30 -10 0 -10 Q30 -10 30 20 L30 60 L-30 60 Z" fill="url(#team-primary)" opacity="0.8"/>
      </g>
      
      <g transform="translate(200, 130)">
        {/* Person 2 - Center (taller) */}
        <circle cx="0" cy="-40" r="30" fill="url(#team-accent)" opacity="0.9"/>
        <path d="M-35 30 Q-35 -15 0 -15 Q35 -15 35 30 L35 80 L-35 80 Z" fill="url(#team-accent)" opacity="0.9"/>
        
        {/* Laptop in front */}
        <rect x="-40" y="70" width="80" height="50" rx="4" fill="white" opacity="0.9"/>
        <rect x="-35" y="75" width="70" height="35" rx="2" fill="url(#team-primary)" opacity="0.3"/>
        <rect x="-50" y="120" width="100" height="8" rx="4" fill="white" opacity="0.9"/>
      </g>
      
      <g transform="translate(320, 150)">
        {/* Person 3 */}
        <circle cx="0" cy="-30" r="25" fill="url(#team-success)" opacity="0.8"/>
        <path d="M-30 20 Q-30 -10 0 -10 Q30 -10 30 20 L30 60 L-30 60 Z" fill="url(#team-success)" opacity="0.8"/>
      </g>
      
      {/* Floating icons around */}
      <g opacity="0.6">
        {/* Ideas/lightbulbs */}
        <circle cx="50" cy="80" r="15" fill="#FFF9C4"/>
        <path d="M50 60 L52 70 M50 60 L48 70" stroke="#FFF176" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Chart/growth */}
        <g transform="translate(330, 60)">
          <rect x="0" y="20" width="8" height="20" rx="2" fill="url(#team-success)"/>
          <rect x="12" y="15" width="8" height="25" rx="2" fill="url(#team-success)"/>
          <rect x="24" y="8" width="8" height="32" rx="2" fill="url(#team-success)"/>
        </g>
        
        {/* Target/goal */}
        <circle cx="340" cy="220" r="20" stroke="url(#team-accent)" strokeWidth="3" fill="none"/>
        <circle cx="340" cy="220" r="12" stroke="url(#team-accent)" strokeWidth="3" fill="none"/>
        <circle cx="340" cy="220" r="4" fill="url(#team-accent)"/>
      </g>
      
      {/* Connection lines between people */}
      <g opacity="0.3" stroke="url(#team-primary)" strokeWidth="2" strokeDasharray="4 4">
        <path d="M110 150 Q150 140 170 140"/>
        <path d="M230 140 Q270 140 290 150"/>
      </g>
      
      {/* Stars/sparkles */}
      <g fill="url(#team-accent)" opacity="0.5">
        <path d="M150 50 L152 56 L158 56 L153 60 L155 66 L150 62 L145 66 L147 60 L142 56 L148 56 Z"/>
        <path d="M250 40 L252 46 L258 46 L253 50 L255 56 L250 52 L245 56 L247 50 L242 46 L248 46 Z"/>
      </g>
    </svg>
  );
}
