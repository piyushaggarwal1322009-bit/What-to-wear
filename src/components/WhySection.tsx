import { Lightbulb } from "lucide-react";

interface WhySectionProps {
  reasons: string[];
}

export function WhySection({ reasons }: WhySectionProps) {
  return (
    <div className="bg-slate-800 text-slate-100 p-5 rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="text-yellow-400" size={18} />
        <h3 className="font-semibold text-white">Why?</h3>
      </div>
      <div className="space-y-2 text-sm text-slate-300">
        {reasons.map((reason, i) => (
          <p key={i}>{reason}</p>
        ))}
      </div>
    </div>
  );
}
