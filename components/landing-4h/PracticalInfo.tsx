import { MapPin, Clock, Euro, Users, Laptop } from "lucide-react";
import { Card } from "./ui/card";
import { InfoIcon } from "./illustrations/InfoIcon";

const infos = [
  {
    icon: MapPin,
    title: "Lieu",
    description: "La Garde (Var)",
    detail: "Adresse exacte communiquée après inscription",
    gradient: "primary" as const
  },
  {
    icon: Clock,
    title: "Durée",
    description: "4 heures",
    detail: "13h–17h avec pauses",
    gradient: "accent" as const
  },
  {
    icon: Euro,
    title: "Tarif",
    description: "295 € HT",
    detail: "Par participant",
    gradient: "success" as const
  },
  {
    icon: Users,
    title: "Public",
    description: "Pros & particuliers",
    detail: "Débutants bienvenus",
    gradient: "primary" as const
  },
  {
    icon: Laptop,
    title: "Matériel",
    description: "Ordinateur portable",
    detail: "À apporter avec vous",
    gradient: "accent" as const
  }
];

export function PracticalInfo() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Informations pratiques</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl">
            Informations pratiques
          </h2>
          <p className="text-xl text-muted-foreground">
            Tout ce que vous devez savoir avant de vous inscrire
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {infos.map((info, index) => (
            <Card 
              key={index} 
              className="p-10 bg-white border-border text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-8 flex justify-center">
                <InfoIcon icon={info.icon} gradient={info.gradient} />
              </div>
              <h3 className="mb-4 text-2xl text-foreground">
                {info.title}
              </h3>
              <p className="mb-3 text-xl text-foreground">
                {info.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {info.detail}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
