export function LearningIllustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="learning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A9EFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#B197FC" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="book-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A9EFF" />
          <stop offset="100%" stopColor="#357ABD" />
        </linearGradient>
        <linearGradient id="accent-learning" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B197FC" />
          <stop offset="100%" stopColor="#9775FA" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="400" fill="url(#learning-gradient)" rx="20"/>
      
      {/* Book */}
      <g transform="translate(100, 100)">
        {/* Book cover */}
        <rect x="0" y="0" width="200" height="240" rx="8" fill="url(#book-gradient)"/>
        <rect x="10" y="10" width="180" height="220" rx="4" fill="white" opacity="0.9"/>
        
        {/* Pages */}
        <rect x="20" y="30" width="160" height="4" rx="2" fill="#4A9EFF" opacity="0.3"/>
        <rect x="20" y="50" width="140" height="4" rx="2" fill="#4A9EFF" opacity="0.3"/>
        <rect x="20" y="70" width="150" height="4" rx="2" fill="#4A9EFF" opacity="0.3"/>
        <rect x="20" y="90" width="130" height="4" rx="2" fill="#4A9EFF" opacity="0.3"/>
        
        <rect x="20" y="120" width="160" height="4" rx="2" fill="#B197FC" opacity="0.3"/>
        <rect x="20" y="140" width="145" height="4" rx="2" fill="#B197FC" opacity="0.3"/>
        <rect x="20" y="160" width="155" height="4" rx="2" fill="#B197FC" opacity="0.3"/>
        <rect x="20" y="180" width="135" height="4" rx="2" fill="#B197FC" opacity="0.3"/>
        
        {/* Bookmark */}
        <rect x="160" y="0" width="20" height="100" fill="url(#accent-learning)"/>
        <path d="M160 100 L170 90 L180 100" fill="url(#accent-learning)"/>
      </g>
      
      {/* Lightbulb - idea */}
      <g transform="translate(280, 80)">
        <circle cx="30" cy="30" r="25" fill="url(#accent-learning)" opacity="0.6"/>
        <circle cx="30" cy="30" r="18" fill="#FFF9C4"/>
        <rect x="24" y="48" width="12" height="20" rx="2" fill="url(#book-gradient)" opacity="0.6"/>
        <rect x="22" y="68" width="16" height="4" rx="2" fill="url(#book-gradient)" opacity="0.6"/>
        
        {/* Light rays */}
        <g opacity="0.4" stroke="#FFF9C4" strokeWidth="3" strokeLinecap="round">
          <line x1="30" y1="5" x2="30" y2="-5"/>
          <line x1="52" y1="15" x2="60" y2="10"/>
          <line x1="52" y1="45" x2="60" y2="50"/>
          <line x1="8" y1="15" x2="0" y2="10"/>
          <line x1="8" y1="45" x2="0" y2="50"/>
        </g>
      </g>
      
      {/* Floating icons */}
      <g opacity="0.5">
        {/* Check marks */}
        <circle cx="320" cy="280" r="20" fill="url(#accent-learning)"/>
        <path d="M312 280 L317 285 L328 274" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        
        <circle cx="60" cy="320" r="20" fill="url(#book-gradient)"/>
        <path d="M52 320 L57 325 L68 314" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
      
      {/* Stars */}
      <g fill="url(#accent-learning)" opacity="0.4">
        <path d="M50 60 L52 66 L58 66 L53 70 L55 76 L50 72 L45 76 L47 70 L42 66 L48 66 Z"/>
        <path d="M340 200 L342 206 L348 206 L343 210 L345 216 L340 212 L335 216 L337 210 L332 206 L338 206 Z"/>
      </g>
    </svg>
  );
}
