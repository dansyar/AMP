type MetricCardProps = {
  label: string;
  value: string | number;
  caption: string;
};

export function MetricCard({ label, value, caption }: MetricCardProps) {
  return (
    <section className="rounded-md border border-line bg-white p-4 shadow-panel">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-ink">{value}</p>
      <p className="mt-1 text-sm leading-6 text-slate">{caption}</p>
    </section>
  );
}
