"use client";

import { Button } from "@/components/landing-4h/ui/button";
import { Card } from "@/components/landing-4h/ui/card";
import { Rocket, Sparkles, Zap, Target } from "lucide-react";
import { trackCalendlyClick } from "./MetaPixel";

export function ConversionBlock() {
  const scrollToForm = () => {
    const formElement = document.querySelector('[data-registration-form]');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="relative overflow-hidden p-12 md:p-16 bg-gradient-to-br from-primary via-primary to-accent border-0 text-center shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          {/* Decorative icons */}
          <div className="absolute top-10 left-10 opacity-20">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <div className="absolute top-20 right-20 opacity-20">
            <Zap className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-40 opacity-20">
            <Target className="w-14 h-14 text-white" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-20">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-8">
              <Rocket className="w-4 h-4" />
              <span className="text-sm">Dernières places</span>
            </div>
            
            <h2 className="mb-6 text-4xl md:text-5xl text-white">
              Prêt à passer à l&apos;action ?
            </h2>
            <p className="mb-10 text-white/90 max-w-2xl mx-auto text-xl">
              Rejoignez la formation du 24 novembre et transformez votre manière de travailler dès demain
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90 shadow-xl"
                onClick={scrollToForm}
                data-cta="conversion-inscription"
              >
                S&apos;inscrire maintenant
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-lg bg-transparent text-white border-white hover:bg-white/10"
                onClick={() => {
                  trackCalendlyClick();
                  window.open("https://calendly.com/maxence-marketia/30min", "_blank", "noopener,noreferrer");
                }}
                data-cta="conversion-calendly"
              >
                Prendre RDV (15 min)
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
