import { Clock, Zap, Cog, Shield, Briefcase, FileCheck } from "lucide-react";
import { Card } from "./ui/card";
import { CirclePattern } from "./illustrations/DecorativePattern";

const benefits = [
  {
    icon: Clock,
    title: "Gagnez du temps dès la 1ère semaine",
    description: "Triplez votre productivité avec des automatisations simples"
  },
  {
    icon: Zap,
    title: "Prompts efficaces : passer d'idées à livrables",
    description: "Maîtrisez l'art du prompting pour des résultats concrets"
  },
  {
    icon: Cog,
    title: "Automatisations simples & pragmatiques",
    description: "Des workflows applicables immédiatement dans votre quotidien"
  },
  {
    icon: Shield,
    title: "Outils français & respect RGPD",
    description: "Solutions conformes pour vos données sensibles"
  },
  {
    icon: Briefcase,
    title: "Cas d'usage concrets métiers",
    description: "Des exemples réels adaptés à votre secteur"
  },
  {
    icon: FileCheck,
    title: "Ressources & checklists incluses",
    description: "Kit complet pour passer à l'action immédiatement"
  }
];

export function Benefits() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-muted/30">
      <CirclePattern />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Les bénéfices</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl">
            Pourquoi cette formation ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un atelier conçu pour des résultats immédiats et mesurables
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-white border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
