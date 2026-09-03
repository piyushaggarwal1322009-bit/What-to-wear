import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";

interface RecommendationCardsProps {
  wear: string[];
  carry: string[];
  avoid: string[];
}

export function RecommendationCards({ wear, carry, avoid }: RecommendationCardsProps) {
  return (
    <div className="space-y-3">
      {/* Wear Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="text-emerald-500" size={20} />
          <h3 className="font-semibold text-slate-800">What to Wear</h3>
        </div>
        <ul className="space-y-2">
          {wear.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">•</span>
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Carry Card */}
      {carry.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="text-amber-500" size={20} />
            <h3 className="font-semibold text-slate-800">What to Carry</h3>
          </div>
          <ul className="space-y-2">
            {carry.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Avoid Card */}
      {avoid.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="text-rose-500" size={20} />
            <h3 className="font-semibold text-slate-800">What to Avoid</h3>
          </div>
          <ul className="space-y-2">
            {avoid.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
