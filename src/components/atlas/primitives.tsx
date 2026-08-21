import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({
  title,
  meta,
  action,
  className,
  bodyClassName,
  children,
}: {
  title?: string;
  meta?: string;
  action?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("panel rise flex flex-col overflow-hidden", className)}>
      {(title || action) && (
        <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="min-w-0">
            {title && <h2 className="label-mono truncate">{title}</h2>}
            {meta && <p className="mt-1 truncate text-sm text-foreground">{meta}</p>}
          </div>
          {action}
        </header>
      )}
      <div className={cn("flex-1 p-4", bodyClassName)}>{children}</div>
    </section>
  );
}

export function Metric({
  label,
  value,
  unit,
  delta,
  tone = "default",
}: {
  label: string;
  value: string;
  unit?: string;
  delta?: string;
  tone?: "default" | "signal" | "caution" | "danger" | "verdant";
}) {
  const toneClass = {
    default: "text-foreground",
    signal: "text-signal",
    caution: "text-caution",
    danger: "text-destructive",
    verdant: "text-verdant",
  }[tone];

  return (
    <div className="flex flex-col gap-1">
      <span className="label-mono">{label}</span>
      <span className={cn("font-mono text-2xl leading-none tracking-tight", toneClass)}>
        {value}
        {unit && <span className="ml-1 text-sm text-muted-foreground">{unit}</span>}
      </span>
      {delta && <span className="text-xs text-muted-foreground">{delta}</span>}
    </div>
  );
}

export function Bar({
  label,
  value,
  max = 100,
  tone,
  suffix,
}: {
  label: string;
  value: number;
  max?: number;
  tone?: "primary" | "signal" | "verdant" | "caution" | "danger";
  suffix?: string;
}) {
  const pct = Math.max(2, Math.min(100, (value / max) * 100));
  const bg = {
    primary: "bg-primary",
    signal: "bg-signal",
    verdant: "bg-verdant",
    caution: "bg-caution",
    danger: "bg-destructive",
  }[tone ?? autoTone(value)];

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="font-mono text-xs text-foreground">
          {value}
          {suffix ?? ""}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div className={cn("h-full rounded-full transition-all", bg)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function autoTone(v: number): "verdant" | "caution" | "danger" | "signal" {
  if (v >= 70) return "verdant";
  if (v >= 50) return "signal";
  if (v >= 35) return "caution";
  return "danger";
}

export function StatusDot({
  tone,
  pulse = true,
}: {
  tone: "critical" | "elevated" | "watch" | "stable" | "info";
  pulse?: boolean;
}) {
  const bg = {
    critical: "bg-destructive",
    elevated: "bg-caution",
    watch: "bg-signal",
    stable: "bg-verdant",
    info: "bg-muted-foreground",
  }[tone];
  return (
    <span className="relative inline-flex h-2 w-2 shrink-0 items-center justify-center">
      {pulse && <span className={cn("pulse-dot absolute h-2 w-2 rounded-full", bg)} />}
      <span className={cn("h-1.5 w-1.5 rounded-full", bg)} />
    </span>
  );
}

export function Tag({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "primary" | "signal" | "verdant" | "caution" | "danger";
}) {
  const cls = {
    muted: "border-border text-muted-foreground",
    primary: "border-primary/40 text-primary",
    signal: "border-signal/40 text-signal",
    verdant: "border-verdant/40 text-verdant",
    caution: "border-caution/40 text-caution",
    danger: "border-destructive/40 text-destructive",
  }[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-1.5 py-0.5 font-mono text-[10px] tracking-wider uppercase",
        cls,
      )}
    >
      {children}
    </span>
  );
}

export function ScoreRing({ value, label }: { value: number; label?: string }) {
  const tone =
    value >= 70
      ? "var(--verdant)"
      : value >= 50
        ? "var(--signal)"
        : value >= 35
          ? "var(--caution)"
          : "var(--destructive)";
  return (
    <div className="relative grid h-20 w-20 place-items-center">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(${tone} ${value * 3.6}deg, var(--muted) 0deg)`,
        }}
      />
      <div className="absolute inset-[6px] rounded-full bg-card" />
      <div className="relative text-center">
        <div className="font-mono text-lg leading-none">{value}</div>
        {label && <div className="label-mono mt-0.5 text-[9px]">{label}</div>}
      </div>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intent,
  children,
}: {
  eyebrow: string;
  title: string;
  intent: string;
  children?: ReactNode;
}) {
  return (
    <header className="rise flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
      <div className="max-w-2xl">
        <span className="label-mono text-primary">{eyebrow}</span>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{intent}</p>
      </div>
      {children}
    </header>
  );
}
