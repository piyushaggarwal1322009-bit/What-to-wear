import { Situation } from "../types/weather";

interface SituationSelectorProps {
  selected: Situation;
  onSelect: (situation: Situation) => void;
}

const SITUATIONS: { label: string; value: Situation; icon: string }[] = [
  { label: 'College', value: 'College', icon: '🎓' },
  { label: 'Interview', value: 'Interview', icon: '💼' },
  { label: 'Wedding', value: 'Wedding', icon: '💍' },
  { label: 'Gym', value: 'Gym', icon: '🏋️' },
  { label: 'Outdoor Event', value: 'Outdoor Event', icon: '🌳' },
];

export function SituationSelector({ selected, onSelect }: SituationSelectorProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-700">Situation</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {SITUATIONS.map((s) => {
          const isSelected = selected === s.value;
          return (
            <button
              key={s.value}
              onClick={() => onSelect(s.value)}
              className={`text-left p-3 rounded-xl border transition-colors flex items-center gap-2 ${
                isSelected
                  ? 'bg-blue-50 border-blue-200 shadow-sm'
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="text-lg">{s.icon}</span>
              <span className={`text-sm font-medium ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                {s.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
