"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/landing-4h/ui/button";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.querySelector('[data-registration-form]');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg animate-in slide-in-from-bottom">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <div>
            <p>24 nov • 13h–17h</p>
            <p className="text-xs text-muted-foreground">La Garde | 295 €</p>
          </div>
        </div>

        <Button 
          size="sm" 
          onClick={scrollToForm}
          className="shrink-0"
        >
          S&apos;inscrire
        </Button>
      </div>
    </div>
  );
}
