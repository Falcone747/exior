import { createFileRoute } from "@tanstack/react-router";
import { Shell, Kicker } from "@/components/site/chrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | EXIOR" },
      {
        name: "description",
        content: "What the EXIOR Transformation Plan includes, and what remains a separate engagement.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <Shell>
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <Kicker>LEGAL</Kicker>
        <h1 className="mt-4 text-4xl font-medium tracking-tight">Terms of Service</h1>
        <div className="mt-8 space-y-4 leading-relaxed text-muted">
          <p>
            The EXIOR Transformation Plan is a one-time engagement at $499. It covers enterprise analysis, target architecture, AI specifications where relevant, a prioritized roadmap, and your personalized EXIOR Space.
          </p>
          <p>Delivery is 14 days after your complete business dossier is received. The period does not start on an incomplete profile.</p>
          <p>
            Technical development, system integration, data migration, and ongoing operation are separate engagements. Buying the plan does not require you to take them.
          </p>
          <p>You decide which initiatives to execute, when to begin, and who will deliver them.</p>
        </div>
      </main>
    </Shell>
  );
}
