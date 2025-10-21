export default function CGVPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-display font-bold mb-8">
          Conditions Générales de <span className="gradient-text">Vente</span>
        </h1>

        <div className="card-glass p-8 space-y-6 text-light/80">
          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">1. Objet</h2>
            <p>
              Les présentes conditions générales de vente régissent les relations contractuelles entre Market-IA 
              et ses clients dans le cadre de la vente de services web et d&apos;automatisation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">2. Services proposés</h2>
            <p>Market-IA propose les services suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Abonnements sites web (Essentiel, Business, E-commerce, Growth+)</li>
              <li>Développement de sites web sur mesure</li>
              <li>Automatisations et agents IA</li>
              <li>Développement de SaaS personnalisés</li>
              <li>Formations et conseil</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">3. Tarifs et paiement</h2>
            <p>
              Les tarifs sont exprimés en euros TTC. Pour les abonnements, le paiement s&apos;effectue mensuellement 
              par prélèvement automatique ou annuellement par virement bancaire.
            </p>
            <p className="mt-2">
              <strong>Frais d&apos;activation :</strong> Les frais d&apos;activation sont dus lors de la souscription et 
              peuvent être offerts en cas de paiement annuel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">4. Durée et résiliation</h2>
            <p>
              <strong>Engagement minimum :</strong> 12 mois pour tous les abonnements.
            </p>
            <p className="mt-2">
              <strong>Résiliation anticipée :</strong> En cas de résiliation avant la fin de l&apos;engagement, 
              50% des mensualités restantes seront dues.
            </p>
            <p className="mt-2">
              <strong>Renouvellement :</strong> Les abonnements se reconduisent tacitement par période de 12 mois 
              sauf résiliation avec préavis de 30 jours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">5. Modifications incluses</h2>
            <p>
              Les modifications incluses concernent les petites retouches (textes, prix, horaires, 3 visuels maximum).
            </p>
            <p className="mt-2">
              Au-delà du temps inclus : facturation à 60€/heure (minimum 30 minutes).
            </p>
            <p className="mt-2">
              Urgences sous 24h : majoration de 40%.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">6. Propriété intellectuelle</h2>
            <p>
              Dans le cadre des abonnements, Market-IA reste propriétaire du code source. Le client dispose 
              d&apos;un droit d&apos;utilisation tant que l&apos;abonnement est actif.
            </p>
            <p className="mt-2">
              <strong>Export du site :</strong> Frais de 490€ (vitrine) ou 990€ (e-commerce) en cas de demande 
              de récupération du code source.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">7. Garanties</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Mise en ligne en 10 jours ouvrés ou 1 mois offert</li>
              <li>Score PageSpeed &gt; 90 garanti</li>
              <li>Disponibilité du site : 99,9% (hors maintenance programmée)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">8. Responsabilité</h2>
            <p>
              Market-IA s&apos;engage à fournir des services de qualité professionnelle. La responsabilité est 
              limitée au montant des sommes versées au cours des 12 derniers mois.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">9. Protection des données</h2>
            <p>
              Conformément au RGPD, vos données personnelles sont traitées de manière confidentielle. 
              Consultez notre politique de confidentialité pour plus d&apos;informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">10. Litiges</h2>
            <p>
              En cas de litige, les parties s&apos;engagent à rechercher une solution amiable. À défaut, 
              les tribunaux français seront compétents.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-white/10 text-sm">
            <p>Dernière mise à jour : Octobre 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
