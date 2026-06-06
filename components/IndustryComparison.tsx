"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { IndustryBlueprint } from "@/lib/types";

type IndustryComparisonProps = {
  blueprints: IndustryBlueprint[];
};

export function IndustryComparison({ blueprints }: IndustryComparisonProps) {
  const data = blueprints.map((item) => ({
    industry: item.industry,
    champions: item.dashboardStats.championCandidates,
    evidence: item.dashboardStats.behaviourEvidenceLogged,
    readiness: item.dashboardStats.scalingReadiness,
  }));

  return (
    <section className="rounded-md border border-line bg-white p-5 shadow-panel">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-ink">Industry gap map</h2>
          <p className="text-sm text-slate">
            Champion candidates and behaviour evidence by blueprint.
          </p>
        </div>
      </div>
      <div className="mt-5 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5dfd2" />
            <XAxis dataKey="industry" tickLine={false} axisLine={false} fontSize={12} />
            <YAxis tickLine={false} axisLine={false} fontSize={12} />
            <Tooltip
              cursor={{ fill: "rgba(15, 118, 110, 0.08)" }}
              contentStyle={{
                border: "1px solid #d8d2c4",
                borderRadius: 6,
                boxShadow: "0 10px 25px rgba(23,33,31,0.08)",
              }}
            />
            <Bar dataKey="champions" name="Champion candidates" fill="#0f766e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="evidence" name="Behaviour evidence" fill="#b7791f" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
