import { useState } from "react";
import { regions, type Region } from "@/data/atlas";
import { cn } from "@/lib/utils";
import { StatusDot, Tag } from "./primitives";

const toneFor = (p: Region["pressure"]) =>
  ({
    critical: "bg-destructive",
    elevated: "bg-caution",
    watch: "bg-signal",
    stable: "bg-verdant",
  })[p];

export function ResilienceMap({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<Region>(regions[0]!);

  return (
    <div className={cn("grid gap-4", compact ? "lg:grid-cols-1" : "lg:grid-cols-[1.6fr_1fr]")}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface">
        <div className="grid-field absolute inset-0 opacity-90" />
        {/* stylized landmass */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
          <defs>
            <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.16" />
              <stop offset="100%" stopColor="var(--signal)" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path
            d="M22 18 L48 8 L74 14 L90 32 L84 56 L72 84 L48 94 L28 82 L16 58 Z"
            fill="url(#land)"
            stroke="var(--border-strong)"
            strokeWidth="0.4"
          />
          {regions.slice(0, 6).map((r, i) => {
            const next = regions[(i + 1) % 6]!;
            return (
              <line
                key={r.id}
                x1={r.x}
                y1={r.y}
                x2={next.x}
                y2={next.y}
                stroke="var(--signal)"
                strokeOpacity="0.18"
                strokeWidth="0.25"
                strokeDasharray="1.5 1.5"
              />
            );
          })}
        </svg>

        {regions.map((r) => (
          <button
            key={r.id}
            onClick={() => setSelected(r)}
            style={{ left: `${r.x}%`, top: `${r.y}%` }}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            aria-label={r.name}
          >
            <span
              className={cn(
                "pulse-dot absolute inset-0 -m-1.5 rounded-full opacity-40",
                toneFor(r.pressure),
              )}
            />
            <span
              className={cn(
                "relative block h-2.5 w-2.5 rounded-full ring-2 transition-all",
                toneFor(r.pressure),
                selected.id === r.id ? "ring-foreground scale-125" : "ring-background",
              )}
            />
            <span
              className={cn(
                "pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 rounded-sm border border-border bg-popover px-1.5 py-0.5 font-mono text-[10px] whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100",
                selected.id === r.id && "opacity-100",
              )}
            >
              {r.name} · {r.resilience}
            </span>
          </button>
        ))}

        <div className="absolute bottom-3 left-3 flex flex-wrap gap-3 rounded-sm border border-border bg-background/80 px-2.5 py-1.5 backdrop-blur">
          {(["critical", "elevated", "watch", "stable"] as const).map((t) => (
            <span key={t} className="flex items-center gap-1.5 font-mono text-[10px] uppercase">
              <span className={cn("h-1.5 w-1.5 rounded-full", toneFor(t))} />
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="rounded-md border border-border bg-surface p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="label-mono">{selected.country}</div>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">{selected.name}</h3>
            </div>
            <div className="text-right">
              <div className="font-mono text-3xl leading-none">{selected.resilience}</div>
              <div className="label-mono mt-1 text-[9px]">Index</div>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{selected.headline}</p>
          <div className="mt-3 flex items-center gap-2">
            <StatusDot tone={selected.pressure} />
            <Tag tone={selected.pressure === "stable" ? "verdant" : "caution"}>
              {selected.pressure}
            </Tag>
            <Tag>pop {selected.population}</Tag>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {Object.entries(selected.scores).map(([domain, v]) => (
            <div key={domain} className="rounded-sm border border-border bg-card px-2 py-2">
              <div className="label-mono text-[9px]">{domain.slice(0, 6)}</div>
              <div className="mt-1 font-mono text-sm">{v}</div>
              <div className="mt-1 h-1 w-full rounded-full bg-muted">
                <div
                  className={cn(
                    "h-full rounded-full",
                    v >= 70
                      ? "bg-verdant"
                      : v >= 50
                        ? "bg-signal"
                        : v >= 35
                          ? "bg-caution"
                          : "bg-destructive",
                  )}
                  style={{ width: `${v}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
