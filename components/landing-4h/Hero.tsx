"use client";

import { Calendar, MapPin, Euro, Sparkles } from "lucide-react";
import { Button } from "@/components/landing-4h/ui/button";
import { Badge } from "@/components/landing-4h/ui/badge";
import { RegistrationFormContent } from "./RegistrationFormContent";
import { trackCalendlyClick } from "./MetaPixel";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="text-center md:text-left space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Formation IA – 4h
              </Badge>
              <Badge variant="outline" className="px-4 py-2 border-primary/20">
                À La Garde (Var)
              </Badge>
            </div>
            
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
                Maîtrisez l&apos;IA en <span className="text-primary">4 heures</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground">
                Inscrivez-vous pour comprendre l&apos;IA et passer du niveau débutant à utilisateur autonome
              </p>
            </div>
            
            {/* Key Info */}
            <div className="flex flex-col gap-4 text-muted-foreground bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Date</div>
                  <div className="text-foreground">24 novembre – 13h–17h</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Lieu</div>
                  <div className="text-foreground">La Garde</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Euro className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Tarif</div>
                  <div className="text-foreground">295 € HT / participant</div>
                </div>
              </div>
            </div>
            
            {/* Registration Form */}
            <div className="pt-4">
              <RegistrationFormContent />
            </div>
            
            {/* Proof */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Organisme Qualiopi, éligible OPCO</span>
            </div>
            
            {/* CTA */}
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all w-full sm:w-auto"
                onClick={() => {
                  trackCalendlyClick();
                  window.open("https://calendly.com/maxence-marketia/30min", "_blank", "noopener,noreferrer");
                }}
                data-cta="hero-calendly"
              >
                Prendre RDV (15 min)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
