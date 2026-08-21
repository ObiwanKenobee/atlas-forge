import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link2, MessageSquareQuote } from "lucide-react";
import { AtlasShell } from "@/components/atlas/shell";
import { Panel, PageHeader, Bar, Tag, ScoreRing } from "@/components/atlas/primitives";
import { opportunities, proposals } from "@/data/atlas";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Opportunity Radar — Atlas Resilience OS" },
      {
        name: "description",
        content:
          "The Atlas Opportunity Engine continuously searches for unmet demand, infrastructure weakness, latent resource and economic viability, then scores every hypothesis.",
      },
      { property: "og:title", content: "Opportunity Radar — Atlas Resilience OS" },
      {
        property: "og:description",
        content: "Automatically generated, evidence-linked infrastructure opportunity hypotheses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Discover,
});

function Discover() {
  const [activeId, setActiveId] = useState(opportunities[0]!.id);
  const active = opportunities.find((o) => o.id === activeId)!;

  return (
    <AtlasShell>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
        <PageHeader
          eyebrow="Discover · Opportunity engine"
          title="Opportunity Radar"
          intent="Every hypothesis is generated from observed conditions, not from a pipeline someone typed in. Scores decompose into named drivers, and each driver links back to evidence."
        >
          <div className="flex gap-6">
            <div>
              <div className="label-mono">Hypotheses live</div>
              <div className="font-mono text-2xl">4</div>
            </div>
            <div>
              <div className="label-mono">Pool value</div>
              <div className="font-mono text-2xl text-primary">$53.7M</div>
            </div>
          </div>
        </PageHeader>

        <div className="grid gap-5 xl:grid-cols-[1fr_1.35fr]">
          <div className="flex flex-col gap-3">
            {opportunities.map((o) => (
              <button
                key={o.id}
                onClick={() => setActiveId(o.id)}
                className={`panel rise flex gap-4 p-4 text-left transition-colors ${
                  o.id === activeId ? "border-primary/50 bg-accent/40" : "hover:border-border-strong"
                }`}
              >
                <ScoreRing value={o.score} label="score" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Tag tone={o.stage === "Financing" ? "verdant" : "signal"}>{o.stage}</Tag>
                    <span className="label-mono">{o.region}</span>
                  </div>
                  <h2 className="mt-1.5 text-sm leading-snug font-medium">{o.title}</h2>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                    <span>{o.capex}</span>
                    <span className="text-verdant">{o.irr} IRR</span>
                    <span>+{o.resilienceLift} index</span>
                    <span>{o.payback}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <Panel title="Hypothesis" meta={active.title}>
              <p className="text-sm leading-relaxed text-muted-foreground">{active.hypothesis}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {active.drivers.map((d) => (
                  <Bar key={d.label} label={d.label} value={d.value} />
                ))}
              </div>
            </Panel>

            <Panel title="Evidence chain" meta="Every score is traceable">
              <ul className="flex flex-col gap-2.5">
                {active.evidence.map((e) => (
                  <li key={e} className="flex items-start gap-2.5 text-sm">
                    <Link2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2} />
                    <span className="text-muted-foreground">{e}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 sm:grid-cols-4">
                <div>
                  <div className="label-mono">CAPEX</div>
                  <div className="font-mono text-lg">{active.capex}</div>
                </div>
                <div>
                  <div className="label-mono">IRR</div>
                  <div className="font-mono text-lg text-verdant">{active.irr}</div>
                </div>
                <div>
                  <div className="label-mono">Payback</div>
                  <div className="font-mono text-lg">{active.payback}</div>
                </div>
                <div>
                  <div className="label-mono">Resilience lift</div>
                  <div className="font-mono text-lg text-primary">+{active.resilienceLift}</div>
                </div>
              </div>
            </Panel>
          </div>
        </div>

        <Panel
          title="Community signals → structured opportunity"
          meta="Residents are sensors, not beneficiaries"
        >
          <div className="grid gap-3 lg:grid-cols-3">
            {proposals.map((p) => (
              <article key={p.id} className="rounded-md border border-border bg-surface p-4">
                <div className="flex items-center gap-2">
                  <MessageSquareQuote className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
                  <span className="label-mono">{p.ward}</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    ×{p.signals}
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-foreground italic">“{p.text}”</p>
                <div className="mt-3 border-t border-border pt-2.5 text-xs text-muted-foreground">
                  <span className="label-mono block">Converted to</span>
                  <span className="mt-1 block text-foreground">{p.converted}</span>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </AtlasShell>
  );
}
