import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import { AtlasShell } from "@/components/atlas/shell";
import { ResilienceMap } from "@/components/atlas/resilience-map";
import { Panel, Metric, StatusDot, Tag, Bar } from "@/components/atlas/primitives";
import { signals, opportunities, recommendations, projects } from "@/data/atlas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Resilience OS — Infrastructure Intelligence Command" },
      {
        name: "description",
        content:
          "Atlas Resilience OS is the intelligence layer between physical infrastructure, industry, capital and communities: observe pressure, discover opportunity, design modular systems, finance and operate them.",
      },
      { property: "og:title", content: "Atlas Resilience OS — Infrastructure Intelligence" },
      {
        property: "og:description",
        content:
          "Detect, decide, build, deploy, monitor, optimize, finance and regenerate — one integrated operating system for resilient infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const severityTone = {
  critical: "critical",
  elevated: "elevated",
  watch: "watch",
  info: "info",
} as const;

function Home() {
  return (
    <AtlasShell>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
        <section className="rise panel relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--gradient-horizon)" }}
          />
          <div className="relative flex flex-wrap items-end justify-between gap-6 p-6">
            <div className="max-w-xl">
              <span className="label-mono text-primary">Situation · 05:44 EAT · East Africa</span>
              <h1 className="mt-2 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Two regions are entering compound failure.
                <br />
                <span className="text-muted-foreground">
                  Four opportunities can absorb the shock.
                </span>
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Atlas is watching 8 instrumented regions, 6 deployed asset classes and 11 agents.
                Everything below is traceable to underlying evidence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <Metric label="Regional index" value="54" unit="/100" delta="−2 vs last week" />
              <Metric
                label="Under pressure"
                value="2"
                unit="regions"
                tone="danger"
                delta="Turkana, Hargeisa"
              />
              <Metric
                label="Opportunity pool"
                value="$53.7M"
                tone="signal"
                delta="4 live hypotheses"
              />
              <Metric label="Assets live" value="187" tone="verdant" delta="94.2% uptime" />
            </div>
          </div>
        </section>

        <div className="grid gap-5 xl:grid-cols-[1.55fr_1fr]">
          <Panel
            title="Where is the pressure? · Global resilience map"
            meta="Vulnerability, infrastructure gap and latent resource in one spatial field"
            action={
              <Link to="/measure" className="label-mono text-primary hover:underline">
                Index method
              </Link>
            }
          >
            <ResilienceMap />
          </Panel>

          <Panel
            title="What is happening? · Signal stream"
            meta="Satellite, grid, market, IoT and community feeds"
            bodyClassName="p-0"
          >
            <ul className="divide-y divide-border">
              {signals.map((s) => (
                <li key={s.id} className="flex gap-3 px-4 py-3">
                  <StatusDot tone={severityTone[s.severity]} pulse={s.severity === "critical"} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                        {s.source}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">{s.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <Panel
          title="What should we do? · Executive synthesis"
          meta="AI recommendation → human review → approval → execution"
          action={<Tag tone="primary">3 pending</Tag>}
        >
          <div className="grid gap-3 lg:grid-cols-3">
            {recommendations.map((r) => (
              <article
                key={r.id}
                className="flex flex-col rounded-md border border-border bg-surface p-4"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                  <span className="label-mono">{r.agent}</span>
                  <span className="ml-auto font-mono text-xs text-signal">
                    {(r.confidence * 100).toFixed(0)}%
                  </span>
                </div>
                <h3 className="mt-2 text-sm leading-snug font-medium">{r.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {r.rationale}
                </p>
                <div className="mt-3 flex items-center justify-between gap-2 border-t border-border pt-3">
                  <span className="font-mono text-xs text-foreground">{r.impact}</span>
                  {r.requiresApproval ? (
                    <span className="inline-flex items-center gap-1.5 rounded-sm border border-caution/40 px-2 py-1 font-mono text-[10px] tracking-wider text-caution uppercase">
                      <ShieldCheck className="h-3 w-3" /> Human review
                    </span>
                  ) : (
                    <Tag tone="verdant">auto-eligible</Tag>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 xl:grid-cols-2">
          <Panel
            title="Where is the opportunity? · Radar"
            meta="Unmet demand × infrastructure weakness × latent resource × viability"
            action={
              <Link to="/discover" className="label-mono text-primary hover:underline">
                Open radar
              </Link>
            }
            bodyClassName="p-0"
          >
            <ul className="divide-y divide-border">
              {opportunities.map((o) => (
                <li key={o.id} className="flex items-center gap-4 px-4 py-3.5">
                  <div className="w-10 shrink-0 text-center">
                    <div className="font-mono text-xl leading-none text-primary">{o.score}</div>
                    <div className="label-mono text-[9px]">score</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium">{o.title}</h3>
                    <p className="truncate text-xs text-muted-foreground">
                      {o.region} · {o.capex} CAPEX · {o.irr} IRR · +{o.resilienceLift} index
                    </p>
                  </div>
                  <Tag tone={o.stage === "Financing" ? "verdant" : "signal"}>{o.stage}</Tag>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel
            title="What are we building? · Mission control"
            meta="Active deployments and their live performance"
            action={
              <Link to="/build" className="label-mono text-primary hover:underline">
                All projects
              </Link>
            }
          >
            <div className="flex flex-col gap-3.5">
              {projects.map((p) => (
                <div key={p.id} className="rounded-md border border-border bg-surface px-3.5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-muted-foreground">{p.id}</span>
                    <span className="text-sm font-medium">{p.name}</span>
                    <span className="ml-auto">
                      <Tag
                        tone={
                          p.health === "on track"
                            ? "verdant"
                            : p.health === "at risk"
                              ? "caution"
                              : "danger"
                        }
                      >
                        {p.health}
                      </Tag>
                    </span>
                  </div>
                  <div className="mt-2.5">
                    <Bar label={`${p.phase} · ${p.location}`} value={p.progress} suffix="%" />
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ArrowUpRight className="h-3 w-3" /> {p.next}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AtlasShell>
  );
}
