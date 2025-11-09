import { Button } from "@/components/landing-4h/ui/button";
import { Card } from "@/components/landing-4h/ui/card";
import { Users } from "lucide-react";
import { ImageWithFallback } from "@/components/landing-4h/figma/ImageWithFallback";
import { CirclePattern } from "@/components/landing-4h/illustrations/DecorativePattern";

export function WhoWeAre() {
  const team = [
    {
      name: "Maxence Alehause",
      role: "Co-fondateur • Stratégie & Management",
      description: "Issu d&apos;une école de commerce, Maxence est expert en vente, finance, stratégie d'entreprise et management. Il transforme votre vision en stratégie concrète pour maximiser la productivité et la croissance.",
      image: "https://fm7yortwrlfmgjdb.public.blob.vercel-storage.com/image-maxence-vKxVHfCCQzpRh1TXxE6kWbmoXRGPPl.jpg"
    },
    {
      name: "Hugo",
      role: "Co-fondateur • Marketing & Design",
      description: "Expert en marketing digital, photographie, montage vidéo et UI/UX design. Hugo crée des expériences visuelles captivantes qui convertissent vos visiteurs en clients fidèles.",
      image: "https://fm7yortwrlfmgjdb.public.blob.vercel-storage.com/portrait-hugo-dyxNs8VAjJQMlHGmzTnqeb44lNpjd9.jpg"
    },
    {
      name: "Benoit",
      role: "Co-fondateur • Expert IA & Formateur",
      description: "Spécialiste de l'intelligence artificielle et formateur passionné, Benoit développe des solutions IA sur-mesure et transmet son expertise pour rendre l&apos;IA accessible à tous.",
      image: "https://framerusercontent.com/images/wf7MIq4YOerrqKHiX9ybOtRHm8.jpg?width=393&height=392"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-muted/30">
      <CirclePattern />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm">Notre équipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Qui <span className="text-primary">sommes-nous</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe de 3 co-fondateurs passionnés, experts dans leurs domaines, unis pour propulser votre business avec l&apos;IA
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="group p-6 bg-white border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-colors">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-3">
                <h3 className="text-xl">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Prêt à transformer votre approche de l&apos;IA ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              asChild
            >
              <a 
                href="https://calendly.com/maxence-marketia/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                data-cta="whoweare-calendly"
              >
                Prendre RDV (15 min)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
