import "./styles.css";
import { MetaPixel } from "@/components/landing-4h/MetaPixel";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#7B61FF",
};

export const metadata: Metadata = {
  title: "Formation IA 4h - Maîtrisez l'IA en 4 heures",
  description: "Atelier pratique pour gagner du temps, automatiser et produire mieux",
};

export default function LandingFormationLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="landing-formation-body">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
