import { Situation } from "../types/weather";

interface SituationSelectorProps {
  selected: Situation;
  onSelect: (situation: Situation) => void;
}

const SITUATIONS: { label: string; value: Situation; icon: string; desc: string }[] = [
  { label: 'College', value: 'College', icon: '🎓', desc: 'Casual & comfortable' },
  { label: 'Interview', value: 'Interview', icon: '💼', desc: 'Smart & formal' },
  { label: 'Wedding', value: 'Wedding', icon: '💍', desc: 'Dressy & polished' },
  { label: 'Gym', value: 'Gym', icon: '🏋️', desc: 'Active & breathable' },
  { label: 'Outdoor Event', value: 'Outdoor Event', icon: '🌳', desc: 'Weather-ready' },
];

export function SituationSelector({ selected, onSelect }: SituationSelectorProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">What are you doing?</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
        {SITUATIONS.map((s) => {
          const isSelected = selected === s.value;
          return (
            <button
              key={s.value}
              onClick={() => onSelect(s.value)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                isSelected
                  ? 'bg-white border-blue-200 shadow-md scale-[1.02]'
                  : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300 hover:-translate-y-1'
              }`}
            >
              {isSelected && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 pointer-events-none" />
              )}
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-2xl block mb-2">{s.icon}</span>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                </div>
                <div className={`font-semibold ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                  {s.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
