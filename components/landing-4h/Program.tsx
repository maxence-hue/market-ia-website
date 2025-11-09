import { Card } from "./ui/card";
import { Clock } from "lucide-react";
import { CirclePattern } from "./illustrations/DecorativePattern";

const schedule = [
  {
    time: "13:00–13:30",
    title: "Intro & cartographie des usages",
    description: "Tour d'horizon des possibilités et identification de vos besoins",
    step: "01"
  },
  {
    time: "13:30–14:30",
    title: "Prompting & ateliers",
    description: "Techniques avancées et exercices pratiques",
    step: "02"
  },
  {
    time: "14:30–15:30",
    title: "Automatisations pragmatiques",
    description: "Créer vos premiers workflows efficaces",
    step: "03"
  },
  {
    time: "15:30–16:30",
    title: "Outils FR (MistralAI Pro, Upmeet), RGPD",
    description: "Solutions conformes et sécurisées pour l'entreprise",
    step: "04"
  },
  {
    time: "16:30–17:00",
    title: "Plan d'action personnalisé",
    description: "Feuille de route pour mettre en œuvre dans votre contexte",
    step: "05"
  }
];

export function Program() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/30 to-white">
      <CirclePattern />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Programme</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl">
            Programme de la journée
          </h2>
          <p className="text-xl text-muted-foreground">
            4 heures intensives pour maîtriser les fondamentaux
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {schedule.map((item, index) => (
            <Card 
              key={index} 
              className="p-8 bg-white border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Step number */}
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className="text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary font-mono text-sm">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
