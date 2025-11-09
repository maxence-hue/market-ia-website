import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-center">
          <ImageWithFallback
            src="https://www.market-ia.fr/wp-content/uploads/2024/04/logo-marketIA-1.svg"
            alt="Market-IA"
            className="h-12"
          />
        </div>
      </div>
    </header>
  );
}
