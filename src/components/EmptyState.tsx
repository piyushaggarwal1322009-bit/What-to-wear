import { Sparkles } from "lucide-react";

export function EmptyState() {
  return (
    <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-white/50 border border-slate-200/50 rounded-xl border-dashed">
      <div className="text-blue-500 mb-4">
        <Sparkles size={28} />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-1">Your outfit plan</h3>
      <p className="text-sm text-slate-500 max-w-xs mx-auto">
        Choose your situation and location to get a personalized recommendation.
      </p>
    </div>
  );
}
