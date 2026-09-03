import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FitPreference, GenderPreference } from '../data/recommendations';

interface PersonalizeFitProps {
  heightCm: number | null;
  setHeightCm: (h: number | null) => void;
  fitPref: FitPreference;
  setFitPref: (f: FitPreference) => void;
  genderPref: GenderPreference;
  setGenderPref: (g: GenderPreference) => void;
}

const GENDER_OPTIONS: GenderPreference[] = [
  "Women's styles",
  "Men's styles",
  "Unisex / no preference",
  "Let me choose per item"
];

const FIT_OPTIONS: FitPreference[] = [
  'Relaxed / oversized',
  'Fitted / tailored',
  'Balanced',
  'No preference'
];

export function PersonalizeFit({ heightCm, setHeightCm, fitPref, setFitPref, genderPref, setGenderPref }: PersonalizeFitProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [unit, setUnit] = useState<'cm' | 'ft'>('cm');
  const [heightInput, setHeightInput] = useState(heightCm ? heightCm.toString() : '');

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setHeightInput(val);
    if (!val) {
      setHeightCm(null);
      return;
    }
    
    if (unit === 'cm') {
      setHeightCm(parseInt(val, 10));
    } else {
      const feet = parseFloat(val);
      if (!isNaN(feet)) {
        setHeightCm(Math.round(feet * 30.48));
      }
    }
  };

  return (
    <div className="mt-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-periwinkle hover:text-dusk-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle rounded-md px-1 py-0.5"
      >
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        <span>+ Personalize for your fit</span>
      </button>

      {!isOpen && (
        <p className="text-xs text-dusk-ink/50 ml-6 mt-1">
          Add your height, gender, and fit style for a closer match
        </p>
      )}

      {isOpen && (
        <div className="mt-4 p-5 bg-white/60 border border-white rounded-2xl shadow-sm space-y-6 animate-fade-in">
          
          <div>
            <label className="block text-sm font-semibold text-dusk-ink mb-2">
              Gender <span className="text-dusk-ink/40 font-normal text-xs ml-1">(Skip if you'd rather not)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {GENDER_OPTIONS.map((opt) => {
                const isSelected = genderPref === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setGenderPref(opt)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle focus-visible:ring-offset-2
                      ${isSelected 
                        ? 'bg-periwinkle text-white shadow-md transform scale-[1.03] motion-reduce:transform-none' 
                        : 'bg-white text-dusk-ink border border-dusk-ink/10 hover:bg-white/80'
                      }
                    `}
                    aria-pressed={isSelected}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-dusk-ink mb-2">
              Height <span className="text-dusk-ink/40 font-normal text-xs ml-1">(Optional)</span>
            </label>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                value={heightInput}
                onChange={handleHeightChange}
                placeholder={unit === 'cm' ? '170' : '5.9'}
                className="w-24 px-3 py-2 rounded-lg border border-dusk-ink/10 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle shadow-sm"
              />
              <button 
                onClick={() => setUnit(unit === 'cm' ? 'ft' : 'cm')}
                className="px-3 py-2 text-sm font-medium text-dusk-ink/70 hover:text-dusk-ink bg-white rounded-lg border border-dusk-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle"
              >
                {unit}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-dusk-ink mb-2">
              How do you like clothes to sit? <span className="text-dusk-ink/40 font-normal text-xs ml-1">(Optional)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {FIT_OPTIONS.map((opt) => {
                const isSelected = fitPref === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setFitPref(opt)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle focus-visible:ring-offset-2
                      ${isSelected 
                        ? 'bg-periwinkle text-white shadow-md transform scale-[1.03] motion-reduce:transform-none' 
                        : 'bg-white text-dusk-ink border border-dusk-ink/10 hover:bg-white/80'
                      }
                    `}
                    aria-pressed={isSelected}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
