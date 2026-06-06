type ProgressBarProps = {
  label: string;
  value: number;
  target?: number;
};

export function ProgressBar({ label, value, target }: ProgressBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-ink">{label}</span>
        <span className="tabular-nums text-slate">
          {value}%{target ? ` / ${target}% target` : ""}
        </span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-line">
        <div
          className="h-2 rounded-full bg-mint"
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </div>
  );
}
