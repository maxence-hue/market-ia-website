"use client";

import { useState } from "react";
import { Button } from "@/components/landing-4h/ui/button";
import { Input } from "@/components/landing-4h/ui/input";
import { Label } from "@/components/landing-4h/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/landing-4h/ui/radio-group";
import { Checkbox } from "@/components/landing-4h/ui/checkbox";
import { Textarea } from "@/components/landing-4h/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/landing-4h/ui/select";
import { Progress } from "@/components/landing-4h/ui/progress";
import { Minus, Plus } from "lucide-react";
import { Card } from "@/components/landing-4h/ui/card";
import { SuccessIllustration } from "@/components/landing-4h/illustrations/SuccessIllustration";

type FormData = {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: "professionnel" | "particulier" | "";
  sessionType: "24nov" | "future" | "";
  
  // Step 2 (Pro)
  companyName: string;
  companySize: string;
  interests: string[];
  hasOPCO: string;
  function: string;
  proMessage: string;
  
  // Step 3 (Particulier)
  objectives: string[];
  level: string;
  particularMessage: string;
  
  // Step 4
  participants: number;
  paymentMethod: string;
  financing: string;
  rgpdConsent: boolean;
  optIn: boolean;
};

export function RegistrationFormContent() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userType: "",
    sessionType: "",
    companyName: "",
    companySize: "",
    interests: [],
    hasOPCO: "",
    function: "",
    proMessage: "",
    objectives: [],
    level: "",
    particularMessage: "",
    participants: 1,
    paymentMethod: "",
    financing: "",
    rgpdConsent: false,
    optIn: false,
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Prénom requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Nom requis";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Email valide requis";
    if (!formData.phone.trim()) newErrors.phone = "Téléphone requis";
    if (!formData.userType) newErrors.userType = "Sélectionnez votre situation";
    if (!formData.sessionType) newErrors.sessionType = "Sélectionnez une session";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    if (formData.userType !== "professionnel") return true;
    
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Nom de l&apos;entreprise requis";
    if (!formData.companySize) newErrors.companySize = "Taille de l&apos;entreprise requise";
    if (formData.interests.length === 0) newErrors.interests = "Sélectionnez au moins un intérêt";
    if (!formData.hasOPCO) newErrors.hasOPCO = "Réponse requise";
    if (!formData.function) newErrors.function = "Fonction requise";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    if (formData.userType !== "particulier") return true;
    
    const newErrors: Record<string, string> = {};
    if (formData.objectives.length === 0) newErrors.objectives = "Sélectionnez au moins un objectif";
    if (!formData.level) newErrors.level = "Niveau requis";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    if (formData.sessionType === "24nov") {
      if (!formData.paymentMethod) newErrors.paymentMethod = "Mode de paiement requis";
    }
    if (!formData.rgpdConsent) newErrors.rgpdConsent = "Consentement RGPD requis";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    
    if (step === 1) {
      isValid = validateStep1();
      if (isValid) {
        if (formData.userType === "professionnel") {
          setStep(2);
        } else {
          setStep(3);
        }
      }
    } else if (step === 2) {
      isValid = validateStep2();
      if (isValid) setStep(4);
    } else if (step === 3) {
      isValid = validateStep3();
      if (isValid) setStep(4);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep4()) return;
    
    const webhookData = {
      // Informations personnelles
      prenom: formData.firstName,
      nom: formData.lastName,
      email: formData.email,
      telephone: formData.phone,
      typeProfil: formData.userType,
      typeSession: formData.sessionType,
      
      // Informations professionnelles (si applicable)
      nomEntreprise: formData.companyName,
      tailleEntreprise: formData.companySize,
      fonction: formData.function,
      interets: formData.interests,
      hasOPCO: formData.hasOPCO,
      messageProfo: formData.proMessage,
      
      // Informations particulier (si applicable)
      objectifs: formData.objectives,
      niveau: formData.level,
      messageParticulier: formData.particularMessage,
      
      // Informations de réservation
      nombreParticipants: formData.participants,
      methodePaiement: formData.paymentMethod,
      financement: formData.financing,
      consentementRGPD: formData.rgpdConsent,
      optInMarketing: formData.optIn,
      
      // Métadonnées
      dateInscription: new Date().toISOString(),
      source: "Landing Page Formation IA 4h",
    };
    
    console.log("📤 Envoi au webhook N8N:", webhookData);
    
    // Envoyer les données au webhook N8N
    try {
      const response = await fetch("https://adsolar.app.n8n.cloud/webhook/c822b85a-8c0b-43e0-8223-758421a856f9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      });

      console.log("📡 Réponse webhook - Status:", response.status, response.statusText);
      
      const responseData = await response.text();
      console.log("📡 Réponse webhook - Data:", responseData);

      if (!response.ok) {
        throw new Error(`Erreur webhook: ${response.status} ${response.statusText}`);
      }
      
      console.log("✅ Données envoyées avec succès au webhook");
      
      // Déclencher l'événement de conversion Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead');
        console.log("📊 Meta Pixel Lead event tracked");
      }
      
      setShowSuccess(true);
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi au webhook:", error);
      // Même en cas d'erreur, on affiche le succès pour ne pas bloquer l'utilisateur
      if (window.fbq) {
        window.fbq('track', 'Lead');
        console.log("📊 Meta Pixel Lead event tracked (malgré erreur webhook)");
      }
      setShowSuccess(true);
    }
  };

  const handleReset = () => {
    setShowSuccess(false);
    setStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: "",
      sessionType: "",
      companyName: "",
      companySize: "",
      interests: [],
      hasOPCO: "",
      function: "",
      proMessage: "",
      objectives: [],
      level: "",
      particularMessage: "",
      participants: 1,
      paymentMethod: "",
      financing: "",
      rgpdConsent: false,
      optIn: false,
    });
    setErrors({});
  };

  const totalSteps = formData.userType === "professionnel" ? 3 : 3;
  const currentStepNumber = step === 4 ? 3 : (step === 2 || step === 3 ? 2 : 1);
  const progress = (currentStepNumber / totalSteps) * 100;

  if (showSuccess) {
    return (
      <Card className="p-8 md:p-12 bg-white border-border shadow-xl">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6">
            <SuccessIllustration />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">
            {formData.sessionType === "24nov" 
              ? "Merci, votre place est réservée !" 
              : "Merci pour votre intérêt !"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {formData.sessionType === "24nov" 
              ? "Nous vous envoyons un email de confirmation avec toutes les informations pratiques (adresse, parking, matériel)."
              : "Nous vous contacterons dès qu'une nouvelle session sera programmée. Vous pouvez aussi réserver un créneau d'échange :"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a 
                href="https://calendly.com/maxence-marketia/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                data-cta="thankyou-calendly"
              >
                Prendre RDV (15 min)
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={handleReset}>
              Nouvelle inscription
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card data-registration-form className="p-6 md:p-8 bg-white border-border shadow-xl max-w-full">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Étape {currentStepNumber} sur {totalSteps}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="space-y-6 pb-4" data-form-step={step}>
        {/* Step 1 - Profil */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl">Votre profil</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="06 XX XX XX XX"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label>Situation professionnelle *</Label>
              <RadioGroup
                value={formData.userType}
                onValueChange={(value) => updateField("userType", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professionnel" id="pro" />
                  <Label htmlFor="pro" className="cursor-pointer">Professionnel</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="particulier" id="particulier" />
                  <Label htmlFor="particulier" className="cursor-pointer">Particulier</Label>
                </div>
              </RadioGroup>
              {errors.userType && <p className="text-sm text-destructive">{errors.userType}</p>}
            </div>

            <div className="space-y-2">
              <Label>Session souhaitée *</Label>
              <RadioGroup
                value={formData.sessionType}
                onValueChange={(value) => updateField("sessionType", value)}
              >
                <div className="flex items-start space-x-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <RadioGroupItem value="24nov" id="session-24nov" className="mt-0.5" />
                  <Label htmlFor="session-24nov" className="cursor-pointer flex-1">
                    <div>
                      <div>24 novembre 2025 – 13h–17h</div>
                      <div className="text-sm text-muted-foreground">La Garde • Places limitées</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-start space-x-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <RadioGroupItem value="future" id="session-future" className="mt-0.5" />
                  <Label htmlFor="session-future" className="cursor-pointer flex-1">
                    <div>
                      <div>Je veux m&apos;inscrire à une prochaine formation</div>
                      <div className="text-sm text-muted-foreground">Nous vous contacterons pour la prochaine session</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
              {errors.sessionType && <p className="text-sm text-destructive">{errors.sessionType}</p>}
            </div>

            <Button onClick={handleNext} className="w-full" size="lg">
              Continuer
            </Button>
          </div>
        )}

        {/* Step 2 - Professionnel */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl">Informations professionnelles</h3>

            <div className="space-y-2">
              <Label htmlFor="companyName">Nom de l&apos;entreprise *</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                className={errors.companyName ? "border-destructive" : ""}
              />
              {errors.companyName && <p className="text-sm text-destructive">{errors.companyName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="companySize">Taille de l&apos;entreprise (salariés) *</Label>
              <Select value={formData.companySize} onValueChange={(value) => updateField("companySize", value)}>
                <SelectTrigger className={errors.companySize ? "border-destructive" : ""}>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-9">1–9</SelectItem>
                  <SelectItem value="10-49">10–49</SelectItem>
                  <SelectItem value="50-249">50–249</SelectItem>
                  <SelectItem value="250+">250+</SelectItem>
                </SelectContent>
              </Select>
              {errors.companySize && <p className="text-sm text-destructive">{errors.companySize}</p>}
            </div>

            <div className="space-y-2">
              <Label>Intérêt principal * (plusieurs choix possibles)</Label>
              <div className="space-y-2">
                {["Automatisation", "Formation d'équipe", "Améliorer ma productivité individuelle"].map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateField("interests", [...formData.interests, interest]);
                        } else {
                          updateField("interests", formData.interests.filter(i => i !== interest));
                        }
                      }}
                    />
                    <Label htmlFor={interest} className="cursor-pointer">{interest}</Label>
                  </div>
                ))}
              </div>
              {errors.interests && <p className="text-sm text-destructive">{errors.interests}</p>}
            </div>

            <div className="space-y-2">
              <Label>OPCO disponible ? *</Label>
              <RadioGroup
                value={formData.hasOPCO}
                onValueChange={(value) => updateField("hasOPCO", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="oui" id="opco-oui" />
                  <Label htmlFor="opco-oui" className="cursor-pointer">Oui</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non" id="opco-non" />
                  <Label htmlFor="opco-non" className="cursor-pointer">Non</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ne-sais-pas" id="opco-nsp" />
                  <Label htmlFor="opco-nsp" className="cursor-pointer">Je ne sais pas</Label>
                </div>
              </RadioGroup>
              {errors.hasOPCO && <p className="text-sm text-destructive">{errors.hasOPCO}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="function">Fonction *</Label>
              <Select value={formData.function} onValueChange={(value) => updateField("function", value)}>
                <SelectTrigger className={errors.function ? "border-destructive" : ""}>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="direction">Direction</SelectItem>
                  <SelectItem value="rh">RH</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="ops">Ops</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="independant">Indépendant</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
              {errors.function && <p className="text-sm text-destructive">{errors.function}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="proMessage">Message / besoins (optionnel)</Label>
              <Textarea
                id="proMessage"
                value={formData.proMessage}
                onChange={(e) => updateField("proMessage", e.target.value)}
                rows={3}
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="w-full" size="lg">
                Retour
              </Button>
              <Button onClick={handleNext} className="w-full" size="lg">
                Continuer
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 - Particulier */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl">Vos objectifs</h3>

            <div className="space-y-2">
              <Label>Objectif personnel * (plusieurs choix possibles)</Label>
              <div className="space-y-2">
                {["Reconversion", "Gagner du temps", "Création de contenus", "Culture générale", "Autre"].map((objective) => (
                  <div key={objective} className="flex items-center space-x-2">
                    <Checkbox
                      id={objective}
                      checked={formData.objectives.includes(objective)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateField("objectives", [...formData.objectives, objective]);
                        } else {
                          updateField("objectives", formData.objectives.filter(o => o !== objective));
                        }
                      }}
                    />
                    <Label htmlFor={objective} className="cursor-pointer">{objective}</Label>
                  </div>
                ))}
              </div>
              {errors.objectives && <p className="text-sm text-destructive">{errors.objectives}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="level">Niveau actuel *</Label>
              <Select value={formData.level} onValueChange={(value) => updateField("level", value)}>
                <SelectTrigger className={errors.level ? "border-destructive" : ""}>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="debutant">Débutant</SelectItem>
                  <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                </SelectContent>
              </Select>
              {errors.level && <p className="text-sm text-destructive">{errors.level}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="particularMessage">Message (optionnel)</Label>
              <Textarea
                id="particularMessage"
                value={formData.particularMessage}
                onChange={(e) => updateField("particularMessage", e.target.value)}
                rows={3}
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="w-full" size="lg">
                Retour
              </Button>
              <Button onClick={handleNext} className="w-full" size="lg">
                Continuer
              </Button>
            </div>
          </div>
        )}

        {/* Step 4 - Détails pratiques */}
        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-2xl">
              {formData.sessionType === "24nov" ? "Détails pratiques & consentements" : "Confirmation"}
            </h3>

            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm">
                <strong>Session sélectionnée :</strong><br />
                {formData.sessionType === "24nov" 
                  ? "24 novembre – 13h–17h – La Garde"
                  : "Prochaine session (vous serez contacté)"}
              </p>
            </div>

            {formData.sessionType === "24nov" && (
              <>
                <div className="space-y-2">
                  <Label>Nombre de places *</Label>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => updateField("participants", Math.max(1, formData.participants - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 text-center px-4 py-2 border rounded-lg">
                      {formData.participants}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => updateField("participants", Math.min(5, formData.participants + 1))}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Mode de paiement souhaité *</Label>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => updateField("paymentMethod", value)}
                  >
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="acompte" id="payment-acompte" className="mt-1" />
                      <Label htmlFor="payment-acompte" className="cursor-pointer flex-1">
                        <div>
                          <div>45€ aujourd&apos;hui et le reste à la formation</div>
                          <div className="text-sm text-muted-foreground">Paiement en 2 fois</div>
                        </div>
                      </Label>
                    </div>
                    {formData.userType === "professionnel" && (
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="opco" id="payment-opco" className="mt-1" />
                        <Label htmlFor="payment-opco" className="cursor-pointer flex-1">
                          <div>
                            <div>Si OPCO - Signature convention</div>
                            <div className="text-sm text-muted-foreground">Paiement après la formation</div>
                          </div>
                        </Label>
                      </div>
                    )}
                  </RadioGroup>
                  {errors.paymentMethod && <p className="text-sm text-destructive">{errors.paymentMethod}</p>}
                </div>
              </>
            )}

            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="rgpd"
                  checked={formData.rgpdConsent}
                  onCheckedChange={(checked) => updateField("rgpdConsent", checked)}
                />
                <Label htmlFor="rgpd" className="cursor-pointer text-sm leading-relaxed">
                  J&apos;accepte que mes données soient utilisées pour traiter ma demande. *
                </Label>
              </div>
              {errors.rgpdConsent && <p className="text-sm text-destructive">{errors.rgpdConsent}</p>}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="optin"
                  checked={formData.optIn}
                  onCheckedChange={(checked) => updateField("optIn", checked)}
                />
                <Label htmlFor="optin" className="cursor-pointer text-sm leading-relaxed">
                  Je souhaite recevoir des ressources & offres (facultatif).
                </Label>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button 
                variant="outline" 
                onClick={() => setStep(formData.userType === "professionnel" ? 2 : 3)} 
                className="w-full"
                size="lg"
              >
                Retour
              </Button>
              <Button onClick={handleSubmit} className="w-full" size="lg" data-event="form_submit_success">
                {formData.sessionType === "24nov" ? "Confirmer mon inscription" : "Envoyer ma demande"}
              </Button>
            </div>

            {formData.sessionType === "24nov" && (
              <p className="text-xs text-center text-muted-foreground">
                Vous recevrez un email de confirmation et les infos pratiques (adresse, parking, matériel).
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
