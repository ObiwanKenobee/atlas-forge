import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Radar,
  Compass,
  DraftingCompass,
  Factory,
  Activity,
  Landmark,
  Gauge,
  Leaf,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { signals } from "@/data/atlas";
import { StatusDot } from "./primitives";

const nav = [
  { to: "/", label: "Observe", icon: Radar },
  { to: "/discover", label: "Discover", icon: Compass },
  { to: "/design", label: "Design", icon: DraftingCompass },
  { to: "/build", label: "Build", icon: Factory },
  { to: "/operate", label: "Operate", icon: Activity },
  { to: "/finance", label: "Finance", icon: Landmark },
  { to: "/measure", label: "Measure", icon: Gauge },
  { to: "/regenerate", label: "Regenerate", icon: Leaf },
] as const;

export function AtlasShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-[188px] shrink-0 flex-col border-r border-border bg-sidebar md:flex">
          <div className="flex items-center gap-2.5 border-b border-sidebar-border px-4 py-4">
            <div className="grid h-8 w-8 place-items-center rounded-sm border border-primary/50 bg-primary/10">
              <span className="font-mono text-xs font-bold text-primary">AT</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">ATLAS</div>
              <div className="label-mono text-[9px]">Resilience OS</div>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-0.5 p-2">
            {nav.map(({ to, label, icon: Icon }) => {
              const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "group flex items-center gap-2.5 rounded-sm px-2.5 py-2 text-sm transition-colors",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                  )}
                >
                  <Icon
                    className={cn("h-4 w-4", active ? "text-primary" : "text-muted-foreground")}
                    strokeWidth={1.7}
                  />
                  <span>{label}</span>
                  {active && <span className="ml-auto h-3.5 w-0.5 rounded-full bg-primary" />}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-sidebar-border p-3">
            <div className="label-mono">Theatre</div>
            <div className="mt-1 flex items-center gap-2 text-sm">
              <StatusDot tone="watch" />
              East Africa
            </div>
            <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
              Real-world resilience laboratory · 8 regions instrumented
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
            <div className="flex items-center gap-4 px-4 py-2.5 sm:px-6">
              <div className="flex items-center gap-2 md:hidden">
                <span className="font-mono text-sm font-bold text-primary">ATLAS</span>
              </div>
              <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
                <StatusDot tone="stable" />
                <span className="font-mono">ALL FEEDS NOMINAL</span>
                <span className="text-border">|</span>
                <span className="font-mono">1.2M readings/day</span>
                <span className="text-border">|</span>
                <span className="font-mono">11 agents online</span>
              </div>
              <Link
                to="/command"
                className="ml-auto inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <Terminal className="h-3.5 w-3.5" strokeWidth={2} />
                AI Command
                <span className="hidden font-mono text-[10px] text-primary/70 sm:inline">⌘K</span>
              </Link>
            </div>
            <div className="relative h-px overflow-hidden bg-border">
              <div className="ticker-line sweep absolute inset-y-0 w-1/3" />
            </div>
            <div className="flex gap-6 overflow-x-auto border-b border-border px-4 py-1.5 sm:px-6 md:hidden">
              {nav.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="label-mono shrink-0 py-0.5 whitespace-nowrap data-[active]:text-primary"
                  data-active={
                    (to === "/" ? pathname === "/" : pathname.startsWith(to)) ? "" : undefined
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          </header>

          <main className="grid-field flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>

          <footer className="border-t border-border px-4 py-3 sm:px-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="label-mono">Live feed</span>
              {signals.slice(0, 3).map((s) => (
                <span key={s.id} className="text-[11px] text-muted-foreground">
                  <span className="font-mono text-foreground/70">{s.time}</span> · {s.source} ·{" "}
                  {s.text}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
