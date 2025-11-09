export function DecorativePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}

export function WavePattern() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z" 
          fill="currentColor" 
          className="text-white opacity-10"
        />
        <path 
          d="M0,20 C150,100 350,100 600,60 C850,20 1050,20 1200,60 L1200,120 L0,120 Z" 
          fill="currentColor" 
          className="text-white opacity-5"
        />
      </svg>
    </div>
  );
}

export function CirclePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
    </div>
  );
}
