import { Sparkles } from "lucide-react";

export function EmptyState() {
  return (
    <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-3xl border-dashed">
      <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <Sparkles size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">Your outfit plan will appear here.</h3>
      <p className="text-slate-500 max-w-sm mx-auto">
        Choose your situation and location to get a personalized, weather-ready recommendation.
      </p>
    </div>
  );
}
