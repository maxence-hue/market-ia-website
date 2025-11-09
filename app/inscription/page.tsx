"use client";

import { UrgencyBanner } from "@/components/landing-4h/UrgencyBanner";
import { Hero } from "@/components/landing-4h/Hero";
import { Benefits } from "@/components/landing-4h/Benefits";
import { LearningObjectives } from "@/components/landing-4h/LearningObjectives";
import { Program } from "@/components/landing-4h/Program";
import { Proof } from "@/components/landing-4h/Proof";
import { PracticalInfo } from "@/components/landing-4h/PracticalInfo";
import { ConversionBlock } from "@/components/landing-4h/ConversionBlock";
import { WhoWeAre } from "@/components/landing-4h/WhoWeAre";
import { FAQ } from "@/components/landing-4h/FAQ";
import { Footer } from "@/components/landing-4h/Footer";
import { StickyBar } from "@/components/landing-4h/StickyBar";

export default function Inscription() {
  return (
    <>
      <UrgencyBanner />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <LearningObjectives />
        <Program />
        <Proof />
        <PracticalInfo />
        <ConversionBlock />
        <WhoWeAre />
        <Benefits />
        <FAQ />
        <Footer />
      </main>
      <StickyBar />
    </>
  );
}
