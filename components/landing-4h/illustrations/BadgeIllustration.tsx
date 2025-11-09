export function QualioplBadge() {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="badge-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A9EFF" />
          <stop offset="100%" stopColor="#357ABD" />
        </linearGradient>
        <linearGradient id="badge-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
      </defs>
      
      {/* Ribbon top */}
      <path d="M35 0 L85 0 L85 30 L60 45 L35 30 Z" fill="url(#badge-primary)" opacity="0.8"/>
      
      {/* Main badge circle */}
      <circle cx="60" cy="70" r="45" fill="url(#badge-gold)" opacity="0.9"/>
      <circle cx="60" cy="70" r="38" fill="white"/>
      <circle cx="60" cy="70" r="32" stroke="url(#badge-gold)" strokeWidth="2" fill="none"/>
      
      {/* Check/Star symbol */}
      <g transform="translate(60, 70)">
        <path d="M0 -15 L4 -5 L15 -3 L7 5 L9 16 L0 11 L-9 16 L-7 5 L-15 -3 L-4 -5 Z" 
              fill="url(#badge-gold)"/>
      </g>
      
      {/* Ribbon bottom */}
      <path d="M35 110 L35 140 L47 132 L60 140 L73 132 L85 140 L85 110 Z" fill="url(#badge-primary)" opacity="0.7"/>
    </svg>
  );
}

export function OPCOBadge() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="opco-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#52D97F" />
          <stop offset="100%" stopColor="#40C368" />
        </linearGradient>
      </defs>
      
      {/* Hexagon */}
      <path d="M60 10 L100 35 L100 85 L60 110 L20 85 L20 35 Z" 
            fill="url(#opco-gradient)" opacity="0.9"/>
      <path d="M60 20 L90 40 L90 80 L60 100 L30 80 L30 40 Z" 
            fill="white"/>
      
      {/* Euro symbol */}
      <g transform="translate(60, 60)">
        <path d="M10 -15 Q-15 -15 -15 0 Q-15 15 10 15" 
              stroke="url(#opco-gradient)" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <line x1="-20" y1="-5" x2="5" y2="-5" stroke="url(#opco-gradient)" strokeWidth="4" strokeLinecap="round"/>
        <line x1="-20" y1="5" x2="5" y2="5" stroke="url(#opco-gradient)" strokeWidth="4" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

export function GroupBadge() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="group-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B197FC" />
          <stop offset="100%" stopColor="#9775FA" />
        </linearGradient>
      </defs>
      
      {/* Shield */}
      <path d="M60 10 L100 30 L100 60 Q100 90 60 110 Q20 90 20 60 L20 30 Z" 
            fill="url(#group-gradient)" opacity="0.9"/>
      <path d="M60 20 L90 35 L90 60 Q90 85 60 100 Q30 85 30 60 L30 35 Z" 
            fill="white"/>
      
      {/* People icons */}
      <g transform="translate(40, 55)">
        <circle cx="0" cy="-5" r="6" fill="url(#group-gradient)"/>
        <path d="M-8 10 Q-8 0 0 0 Q8 0 8 10 L8 15 L-8 15 Z" fill="url(#group-gradient)"/>
      </g>
      
      <g transform="translate(60, 55)">
        <circle cx="0" cy="-5" r="6" fill="url(#group-gradient)"/>
        <path d="M-8 10 Q-8 0 0 0 Q8 0 8 10 L8 15 L-8 15 Z" fill="url(#group-gradient)"/>
      </g>
      
      <g transform="translate(80, 55)">
        <circle cx="0" cy="-5" r="6" fill="url(#group-gradient)"/>
        <path d="M-8 10 Q-8 0 0 0 Q8 0 8 10 L8 15 L-8 15 Z" fill="url(#group-gradient)"/>
      </g>
    </svg>
  );
}
