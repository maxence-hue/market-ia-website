import { Mail, Phone, Award } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-b from-white to-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:maxence@market-ia.fr" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                maxence@market-ia.fr
              </a>
              <a 
                href="tel:+33618180598" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                06 18 18 05 98
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg mb-6">Légal</h3>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Conditions générales de vente
              </a>
              <a 
                href="#" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Market-IA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
