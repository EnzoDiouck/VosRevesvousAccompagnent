import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WatercolorBackdrop } from "@/components/WatercolorBackdrop";

export const Route = createFileRoute("/conditions-utilisation")({
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation — Vos Rêves vous Accompagnent" },
      { name: "description", content: "Conditions générales d'utilisation du site et de prise de rendez-vous chez Élodie, tatoueuse aquarelle." },
    ],
  }),
  component: CGU,
});

function CGU() {
  return (
    <div className="min-h-screen relative">
      <WatercolorBackdrop />
      <SiteHeader />

      <section className="relative px-6 pt-20 pb-12 max-w-3xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-4">Cadre & engagements</p>
        <h1 className="font-serif text-5xl md:text-6xl italic mb-6">Conditions d'utilisation</h1>
        <p className="text-ink/60 text-sm">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}</p>
      </section>

      <section className="relative px-6 pb-24 max-w-3xl mx-auto space-y-10 text-ink/80 leading-relaxed">
        <Block title="1. Objet">
          <p>
            Les présentes conditions régissent l'utilisation du site
            vosrevesvousaccompagnent.fr et la prise de rendez-vous auprès
            d'Élodie, artiste tatoueuse. La navigation sur le site implique
            l'acceptation pleine et entière de ces conditions.
          </p>
        </Block>

        <Block title="2. Prise de rendez-vous">
          <p>
            La demande de rendez-vous se fait exclusivement via le formulaire
            en ligne. Toute demande fait l'objet d'une réponse par email dans
            un délai de quelques jours. Une demande n'a valeur de rendez-vous
            confirmé qu'après validation écrite d'Élodie.
          </p>
          <p>
            Un acompte peut être demandé pour bloquer la date. Le montant
            précis vous sera communiqué lors de la confirmation. L'acompte est
            déduit du prix final du tatouage.
          </p>
        </Block>

        <Block title="3. Conditions pour se faire tatouer">
          <ul className="list-disc pl-5 space-y-2">
            <li>Être majeur·e (18 ans révolus) et présenter une pièce d'identité valide le jour du rendez-vous.</li>
            <li>Ne pas être sous l'influence d'alcool ou de stupéfiants.</li>
            <li>Signaler tout problème de santé (grossesse, allergies, traitement en cours, problème de peau, etc.) avant la séance.</li>
            <li>Se présenter dans un état d'hygiène correct, avoir mangé et être reposé·e.</li>
          </ul>
          <p>
            Élodie se réserve le droit de refuser ou d'interrompre une prestation
            si l'une de ces conditions n'est pas respectée, sans remboursement
            de l'acompte.
          </p>
        </Block>

        <Block title="4. Annulation & report">
          <p>
            Toute annulation ou report doit être signalé au minimum 72 heures
            avant le rendez-vous. Passé ce délai, l'acompte reste acquis à
            l'artiste. En cas d'absence non prévenue, un nouveau rendez-vous
            pourra être refusé.
          </p>
          <p>
            L'artiste se réserve la possibilité de reporter un rendez-vous en
            cas d'imprévu (maladie, force majeure). Un nouveau créneau sera
            alors proposé sans frais supplémentaires.
          </p>
        </Block>

        <Block title="5. Création artistique">
          <p>
            Chaque projet est unique. Les dessins et flashes proposés sont
            protégés par le droit d'auteur : ils ne peuvent être copiés, reproduits
            ou tatoués par un autre artiste. Un flash ne sera tatoué qu'une
            seule fois. Les projets sur mesure ne sont pas reproduits sur d'autres
            clients.
          </p>
        </Block>

        <Block title="6. Cicatrisation & responsabilité">
          <p>
            Un protocole de soins vous sera remis à la fin de la séance. Le
            bon rendu du tatouage dépend directement du respect de ces consignes.
            L'artiste ne peut être tenue responsable d'une mauvaise cicatrisation
            liée à un non-respect des soins, à une exposition au soleil, à la
            baignade ou à toute pratique déconseillée pendant la période de
            cicatrisation.
          </p>
          <p>
            Une retouche gratuite peut être proposée dans les 3 mois suivant
            la séance, sous réserve du respect des soins et sur appréciation
            de l'artiste.
          </p>
        </Block>

        <Block title="7. Tarifs & paiement">
          <p>
            Les tarifs sont communiqués sur devis, en fonction de la taille,
            de la complexité et de la durée estimée. Le paiement s'effectue
            en fin de séance, en espèces ou par virement. Aucun remboursement
            n'est possible une fois la prestation réalisée.
          </p>
        </Block>

        <Block title="8. Propriété intellectuelle du site">
          <p>
            Les contenus du site (photos, textes, dessins, logo) sont la
            propriété exclusive d'Élodie. Toute reproduction sans autorisation
            écrite est interdite.
          </p>
        </Block>

        <Block title="9. Modifications">
          <p>
            Les présentes conditions peuvent évoluer à tout moment. La version
            applicable est celle en vigueur au moment de votre demande de
            rendez-vous.
          </p>
        </Block>

        <Block title="10. Contact">
          <p>
            Pour toute question, écrivez à{" "}
            <a className="underline" href="mailto:contact@vosrevesvousaccompagnent.fr">contact@vosrevesvousaccompagnent.fr</a>.
          </p>
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
