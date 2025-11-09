export default function MentionsLegalesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-display font-bold mb-8">
          Mentions <span className="gradient-text">Légales</span>
        </h1>

        <div className="card-glass p-8 space-y-6 text-light/80">
          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">Éditeur du site</h2>
            <p>
              <strong>Market-IA</strong><br />
              Entreprise individuelle<br />
              SIRET : [À compléter]<br />
              Adresse : Toulon, France<br />
              Email : contact@market-ia.fr<br />
              Téléphone : 06 18 18 05 98
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">Directeur de publication</h2>
            <p>Maxence Alehause</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>Netlify, Inc.</strong><br />
              2325 3rd Street, Suite 296<br />
              San Francisco, California 94107<br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur 
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
              documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. 
              Pour plus d&apos;informations, consultez notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-light mb-4">Données personnelles</h2>
            <p>
              Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
              Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification 
              et de suppression des données vous concernant.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
