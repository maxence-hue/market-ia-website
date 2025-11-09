import { CheckCircle2, Target } from "lucide-react";
import { Card } from "./ui/card";
import { LearningIllustration } from "./illustrations/LearningIllustration";

const objectives = [
  "Comprendre l'IA générative & ses limites",
  "Rédiger des prompts efficaces",
  "Créer un agent personnalisé",
  "Utiliser Upmeet pour transcrire vos réunions",
  "Cadre légal : RGPD / AI Act (bonnes pratiques)"
];

export function LearningObjectives() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm">Objectifs pédagogiques</span>
              </div>
              <h2 className="mb-6 text-4xl md:text-5xl">
                Ce que vous allez apprendre
              </h2>
              <p className="text-xl text-muted-foreground">
                Un programme dense et pratique en 4 heures
              </p>
            </div>
            
            <div className="space-y-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                  <div className="p-1 bg-primary/10 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-lg pt-1">{objective}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-white p-12">
              <LearningIllustration />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
