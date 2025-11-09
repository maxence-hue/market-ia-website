"use client";

import { AlertCircle } from "lucide-react";

export function UrgencyBanner() {
  return (
    <div className="bg-red-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-center">
          <AlertCircle className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <p className="text-sm sm:text-base md:text-lg font-bold">
            ⚠️ ATTENTION : Plus que <span className="text-yellow-300 text-lg sm:text-xl md:text-2xl mx-1">6 places restantes</span> pour la formation du 24 novembre !
          </p>
          <AlertCircle className="w-5 h-5 flex-shrink-0 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
