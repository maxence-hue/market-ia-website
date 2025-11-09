import { Award, Users, BookOpen, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { QualioplBadge, OPCOBadge, GroupBadge } from "./illustrations/BadgeIllustration";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Directrice Marketing",
    content: "Formation très concrète, j&apos;ai pu appliquer les techniques dès le lendemain. Gain de temps immédiat sur mes contenus.",
    rating: 5
  },
  {
    name: "Thomas L.",
    role: "Consultant Indépendant",
    content: "Exactement ce qu&apos;il me fallait : du pratique, du RGPD, et des outils français. Très bon ROI.",
    rating: 5
  },
  {
    name: "Marie D.",
    role: "Responsable RH",
    content: "Le formateur maîtrise son sujet et sait s&apos;adapter aux besoins de chacun. Atelier interactif et engageant.",
    rating: 5
  }
];

export function Proof() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm">Confiance & Qualité</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-muted-foreground">
            Rejoignez les professionnels qui ont accéléré leur transformation IA
          </p>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap gap-8 justify-center mb-16">
          <Card className="px-10 py-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20">
                <QualioplBadge />
              </div>
              <div>
                <p className="text-xl mb-1">Qualiopi</p>
                <p className="text-sm text-muted-foreground">Certifié qualité</p>
              </div>
            </div>
          </Card>
          
          <Card className="px-10 py-8 bg-gradient-to-br from-success/5 to-success/10 border-success/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20">
                <OPCOBadge />
              </div>
              <div>
                <p className="text-xl mb-1">Éligible OPCO</p>
                <p className="text-sm text-muted-foreground">Financement possible</p>
              </div>
            </div>
          </Card>
          
          <Card className="px-10 py-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20">
                <GroupBadge />
              </div>
              <div>
                <p className="text-xl mb-1">Groupe restreint</p>
                <p className="text-sm text-muted-foreground">Progression rapide</p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 text-lg italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
