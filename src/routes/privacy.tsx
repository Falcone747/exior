import { createFileRoute } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | EXIOR" },
      {
        name: "description",
        content: "How the EXIOR site handles the business profile you prepare on this device.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Shell>
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <Kicker>LEGAL</Kicker>
        <h1 className="mt-4 text-4xl font-medium tracking-tight">Privacy Policy</h1>
        <div className="mt-8 space-y-4 leading-relaxed text-muted">
          <p>The business profile you prepare on this site stays on this device until you choose to submit it.</p>
          <p>Saving a draft stores it in your browser. It is not sent from this page, and no payment is taken here.</p>
          <p>Do not include personal data about your customers in the draft. Share only the business information needed to describe how your company operates.</p>
          <p>When a dossier is later transmitted as part of an engagement, it is used to design your transformation plan and EXIOR Space. It is not used to train a public model.</p>
        </div>
      </main>
    </Shell>
  );
}
