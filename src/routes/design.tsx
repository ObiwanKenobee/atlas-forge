import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Boxes, Layers } from "lucide-react";
import { AtlasShell } from "@/components/atlas/shell";
import { Panel, PageHeader, Tag, Bar, Metric } from "@/components/atlas/primitives";
import { catalog } from "@/data/atlas";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Configuration Engine — Atlas Resilience OS" },
      {
        name: "description",
        content:
          "Compose standardized infrastructure modules into a full community blueprint: housing, water, energy, food, health, logistics — with CAPEX, OPEX and resilience output.",
      },
      { property: "og:title", content: "Configuration Engine — Atlas Resilience OS" },
      {
        property: "og:description",
        content: "Modular infrastructure catalog and community blueprint generator.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Design,
});

const categories = ["All", "Housing", "Energy", "Water", "Food", "Health", "Industry", "Digital"];

function Design() {
  const [cat, setCat] = useState("All");
  const [people, setPeople] = useState(1000);

  const filtered = useMemo(
    () => (cat === "All" ? catalog : catalog.filter((m) => m.category === cat)),
    [cat],
  );

  const b = useMemo(() => {
    const households = Math.round(people / 4);
    const capex = people * 4820;
    return {
      households,
      pods: households,
      solarKwp: Math.round(people * 0.62),
      storageKwh: Math.round(people * 1.1),
      waterM3: Math.round(people * 0.06 * 10) / 10,
      coldT: Math.round(people * 0.03),
      clinics: Math.max(1, Math.round(people / 2500)),
      classrooms: Math.max(2, Math.round(people / 120)),
      capex,
      opex: Math.round(capex * 0.061),
      output: Math.round(capex * 0.28),
      jobs: Math.round(people * 0.11),
      resilience: Math.min(94, 63 + Math.round(Math.log10(people) * 6)),
      months: Math.max(5, Math.round(people / 190)),
    };
  }, [people]);

  const money = (n: number) =>
    n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${Math.round(n / 1000)}k`;

  return (
    <AtlasShell>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
        <PageHeader
          eyebrow="Design · Configuration engine"
          title="Compose infrastructure, not documents"
          intent="Specify an outcome — “a resilient community for 1,000 people” — and the engine sizes every subsystem, prices it, phases it and scores its resilience contribution."
        />

        <Panel
          title="Community blueprint generator"
          meta={`Resilient settlement · ${people.toLocaleString()} people`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <input
              type="range"
              min={200}
              max={20000}
              step={100}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="h-1.5 w-full max-w-md cursor-pointer appearance-none rounded-full bg-muted accent-primary"
              aria-label="Population"
            />
            <span className="font-mono text-lg text-primary">{people.toLocaleString()} people</span>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["LifePod units", b.pods.toLocaleString()],
                ["Solar", `${b.solarKwp.toLocaleString()} kWp`],
                ["Storage", `${b.storageKwh.toLocaleString()} kWh`],
                ["Water", `${b.waterM3} k m³/yr`],
                ["Cold storage", `${b.coldT} t`],
                ["Clinics", String(b.clinics)],
                ["Classrooms", String(b.classrooms)],
                ["Local jobs", b.jobs.toLocaleString()],
              ].map(([k, v]) => (
                <div key={k} className="rounded-sm border border-border bg-surface px-3 py-2.5">
                  <div className="label-mono text-[9px]">{k}</div>
                  <div className="mt-1 font-mono text-base">{v}</div>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-border bg-surface p-4">
              <div className="grid grid-cols-2 gap-4">
                <Metric label="CAPEX" value={money(b.capex)} />
                <Metric label="OPEX / yr" value={money(b.opex)} tone="caution" />
                <Metric label="Economic output / yr" value={money(b.output)} tone="verdant" />
                <Metric label="Deployment" value={`${b.months} mo`} tone="signal" />
              </div>
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                <Bar label="Projected resilience index" value={b.resilience} />
                <Bar label="Local content of build" value={68} tone="signal" />
                <Bar label="Emissions vs conventional baseline" value={41} tone="verdant" />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
            {["Site & topology", "Manufacture", "Deploy phase 1", "Commission", "Operate"].map(
              (phase, i) => (
                <span key={phase} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-2.5 py-1.5 text-xs">
                    <span className="font-mono text-[10px] text-primary">0{i + 1}</span>
                    {phase}
                  </span>
                  {i < 4 && <span className="text-border">→</span>}
                </span>
              ),
            )}
          </div>
        </Panel>

        <Panel
          title="Modular infrastructure catalog"
          meta="Standardized, priced, manufacturable units"
          action={
            <div className="flex flex-wrap gap-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-sm border px-2 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors ${
                    c === cat
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          }
        >
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {filtered.map((m) => (
              <article
                key={m.id}
                className="flex flex-col rounded-md border border-border bg-surface p-4 transition-colors hover:border-border-strong"
              >
                <div className="flex items-center gap-2">
                  <Boxes className="h-4 w-4 text-primary" strokeWidth={1.7} />
                  <Tag>{m.category}</Tag>
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                    {m.id}
                  </span>
                </div>
                <h3 className="mt-2.5 text-sm font-medium">{m.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.capacity}</p>
                <dl className="mt-3 flex flex-1 flex-col gap-1.5 border-t border-border pt-3 text-xs">
                  {[
                    ["Unit cost", m.cost],
                    ["Deploy", m.deploy],
                    ["Design life", m.life],
                    ["Energy", m.energy],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-mono text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Layers className="h-3.5 w-3.5" /> Every module exposes cost, capacity, materials,
            energy, deployment time, maintenance regime, expected life, qualified suppliers and
            financing options.
          </p>
        </Panel>
      </div>
    </AtlasShell>
  );
}
