import {
  Baby,
  DraftingCompass,
  GraduationCap,
  HardHat,
  Landmark,
  LucideIcon,
  Shield,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  baby: Baby,
  "drafting-compass": DraftingCompass,
  "graduation-cap": GraduationCap,
  "hard-hat": HardHat,
  landmark: Landmark,
  shield: Shield,
};

type IconBadgeProps = {
  name: string;
  label: string;
  tone?: "mint" | "saffron" | "sky" | "clay";
};

const toneClasses = {
  mint: "bg-mint/10 text-mint ring-mint/20",
  saffron: "bg-saffron/10 text-saffron ring-saffron/25",
  sky: "bg-sky/10 text-sky ring-sky/20",
  clay: "bg-clay/10 text-clay ring-clay/20",
};

export function IconBadge({ name, label, tone = "mint" }: IconBadgeProps) {
  const Icon = icons[name] ?? Landmark;

  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ring-1 ${toneClasses[tone]}`}
      aria-label={label}
      title={label}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </div>
  );
}
