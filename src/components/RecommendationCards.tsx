import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";

interface RecommendationCardsProps {
  wear: string[];
  carry: string[];
  avoid: string[];
}

export function RecommendationCards({ wear, carry, avoid }: RecommendationCardsProps) {
  return (
    <div className="space-y-4">
      {/* Wear Card */}
      <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500" />
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-100 text-emerald-600 p-2 rounded-xl">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 tracking-tight">WHAT TO WEAR</h3>
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">✓ Recommended</span>
          </div>
        </div>
        <ul className="space-y-3 relative z-10">
          {wear.map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-white">
              <span className="text-emerald-500 mt-0.5">•</span>
              <span className="font-medium text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Carry Card */}
      {carry.length > 0 && (
        <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500" />
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-100 text-amber-600 p-2 rounded-xl">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 tracking-tight">WHAT TO CARRY</h3>
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">! Important</span>
            </div>
          </div>
          <ul className="space-y-3 relative z-10">
            {carry.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-white">
                <span className="text-amber-500 mt-0.5">•</span>
                <span className="font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Avoid Card */}
      {avoid.length > 0 && (
        <div className="bg-rose-50/50 border border-rose-100 rounded-3xl p-6 relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500" />
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-rose-100 text-rose-600 p-2 rounded-xl">
              <XCircle size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 tracking-tight">WHAT TO AVOID</h3>
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Avoid if possible</span>
            </div>
          </div>
          <ul className="space-y-3 relative z-10">
            {avoid.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-white">
                <span className="text-rose-500 mt-0.5">•</span>
                <span className="font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
