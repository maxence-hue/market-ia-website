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
  title: "Formation IA 4h - Inscription",
  description: "Inscrivez-vous à la formation IA de 4 heures pour maîtriser l'intelligence artificielle",
};

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="landing-4h">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
