export default function ConfidentialitePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-display font-bold mb-8">
          Politique de <span className="gradient-text">Confidentialité</span>
        </h1>

        <div className="card-glass p-8 space-y-6 text-light/80">
          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">1. Collecte des données</h2>
            <p>
              Nous collectons les données personnelles suivantes lorsque vous utilisez notre site :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Informations d&apos;identification (nom, prénom, email, téléphone)</li>
              <li>Informations professionnelles (entreprise, secteur d&apos;activité)</li>
              <li>Données de navigation (cookies, adresse IP)</li>
              <li>Informations de communication (messages envoyés via formulaires)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">2. Utilisation des données</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Répondre à vos demandes de contact et devis</li>
              <li>Gérer votre abonnement et vous fournir nos services</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
              <li>Améliorer notre site et nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">3. Base légale du traitement</h2>
            <p>
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Votre consentement (formulaires, cookies non essentiels)</li>
              <li>L&apos;exécution du contrat (abonnements, services)</li>
              <li>Notre intérêt légitime (amélioration des services, sécurité)</li>
              <li>Le respect d&apos;obligations légales (facturation, comptabilité)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">4. Partage des données</h2>
            <p>
              Nous ne vendons jamais vos données. Nous pouvons les partager avec :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nos prestataires techniques (hébergement, emailing, CRM)</li>
              <li>Nos partenaires d&apos;automatisation (Zapier, Make.com) si vous utilisez ces services</li>
              <li>Les autorités légales si requis par la loi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">5. Cookies</h2>
            <p>
              Nous utilisons les cookies suivants :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> pour comprendre l&apos;utilisation du site (avec votre consentement)</li>
              <li><strong>Cookies marketing :</strong> pour personnaliser votre expérience (avec votre consentement)</li>
            </ul>
            <p className="mt-2">
              Vous pouvez gérer vos préférences cookies à tout moment via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">6. Conservation des données</h2>
            <p>
              Nous conservons vos données :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Données de contact : durée de la relation commerciale + 3 ans</li>
              <li>Données de facturation : 10 ans (obligation légale)</li>
              <li>Données marketing : jusqu&apos;à retrait du consentement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">7. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p className="mt-3">
              Pour exercer vos droits, contactez-nous à : <strong>contact@market-ia.fr</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">8. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger 
              vos données contre tout accès non autorisé, perte ou divulgation :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Chiffrement SSL/TLS</li>
              <li>Hébergement sécurisé (Netlify)</li>
              <li>Accès restreint aux données</li>
              <li>Sauvegardes régulières</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">9. Transferts internationaux</h2>
            <p>
              Certains de nos prestataires sont situés hors de l&apos;Union Européenne (notamment Netlify aux États-Unis). 
              Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">10. Modifications</h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité. La version actuelle est toujours 
              disponible sur cette page avec la date de dernière mise à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">11. Contact</h2>
            <p>
              Pour toute question concernant cette politique ou vos données personnelles :
            </p>
            <p className="mt-2">
              <strong>Email :</strong> contact@market-ia.fr<br />
              <strong>Adresse :</strong> Market-IA, Toulon, France
            </p>
            <p className="mt-3">
              Vous avez également le droit de déposer une réclamation auprès de la CNIL 
              (Commission Nationale de l&apos;Informatique et des Libertés).
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
