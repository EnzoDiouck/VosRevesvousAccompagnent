import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WatercolorBackdrop } from "@/components/WatercolorBackdrop";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Vos Rêves vous Accompagnent" },
      { name: "description", content: "Mentions légales du site Vos Rêves vous Accompagnent, salon de tatouage aquarelle d'Élodie." },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <div className="min-h-screen relative">
      <WatercolorBackdrop />
      <SiteHeader />

      <section className="relative px-6 pt-20 pb-12 max-w-3xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-4">Informations légales</p>
        <h1 className="font-serif text-5xl md:text-6xl italic mb-6">Mentions légales</h1>
        <p className="text-ink/60 text-sm">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}</p>
      </section>

      <section className="relative px-6 pb-24 max-w-3xl mx-auto space-y-10 text-ink/80 leading-relaxed">
        <Block title="Éditeur du site">
          <p><strong>Vos Rêves vous Accompagnent</strong> — Élodie, artiste tatoueuse (entreprise individuelle).</p>
          <p>Adresse professionnelle : à compléter</p>
          <p>Email : <a className="underline" href="mailto:contact@vosrevesvousaccompagnent.fr">contact@vosrevesvousaccompagnent.fr</a></p>
          <p>Téléphone : +33 6 00 00 00 00</p>
          <p>SIRET : à compléter — N° TVA intracommunautaire : à compléter</p>
        </Block>

        <Block title="Directrice de la publication">
          <p>Élodie, en qualité de responsable de l'activité.</p>
        </Block>

        <Block title="Hébergement">
          <p>Le site est hébergé par Lovable Cloud. Pour toute demande relative à l'hébergement, contactez l'éditeur qui transmettra la demande.</p>
        </Block>

        <Block title="Propriété intellectuelle">
          <p>
            L'ensemble des éléments présents sur ce site (textes, illustrations,
            photographies, logo, flashes, dessins, marques) sont la propriété
            exclusive d'Élodie ou de leurs auteurs respectifs. Toute reproduction,
            représentation, modification ou utilisation, totale ou partielle,
            sans autorisation écrite préalable est strictement interdite et
            constitue une contrefaçon sanctionnée par les articles L.335-2
            et suivants du Code de la propriété intellectuelle.
          </p>
          <p>
            Les flashes proposés sont dessinés à un seul exemplaire et ne
            peuvent être reproduits ni tatoués par un tiers.
          </p>
        </Block>

        <Block title="Données personnelles">
          <p>
            Les informations recueillies via le formulaire de prise de rendez-vous
            (nom, email, description du projet) sont utilisées uniquement pour
            traiter votre demande. Elles ne sont ni cédées ni vendues à des tiers.
          </p>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous
            disposez d'un droit d'accès, de rectification, d'opposition et de
            suppression de vos données. Pour l'exercer, écrivez à{" "}
            <a className="underline" href="mailto:contact@vosrevesvousaccompagnent.fr">contact@vosrevesvousaccompagnent.fr</a>.
          </p>
        </Block>

        <Block title="Cookies">
          <p>
            Ce site n'utilise pas de cookies de suivi publicitaire. Seuls des
            cookies techniques strictement nécessaires au bon fonctionnement
            peuvent être déposés.
          </p>
        </Block>

        <Block title="Crédits">
          <p>Photographies et illustrations : © Élodie — Vos Rêves vous Accompagnent.</p>
          <p>Conception & réalisation du site : Lovable.</p>
        </Block>
      </section>

      <SiteFooter />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl italic mb-3 text-ink">{title}</h2>
      <div className="space-y-3 text-[15px]">{children}</div>
    </div>
  );
}
