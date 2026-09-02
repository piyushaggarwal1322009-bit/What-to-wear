import { Lightbulb } from "lucide-react";

interface WhySectionProps {
  reasons: string[];
}

export function WhySection({ reasons }: WhySectionProps) {
  return (
    <div className="bg-slate-800 text-slate-100 p-6 rounded-3xl relative overflow-hidden group shadow-lg">
      <div className="absolute -right-6 -top-6 text-yellow-400/10 group-hover:text-yellow-400/20 transition-colors duration-500">
        <Lightbulb size={120} strokeWidth={1} />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="text-yellow-400" size={20} />
          <h3 className="font-bold tracking-tight text-white">WHY?</h3>
        </div>
        
        <div className="space-y-3 text-slate-300 font-medium leading-relaxed">
          {reasons.map((reason, i) => (
            <p key={i}>{reason}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
