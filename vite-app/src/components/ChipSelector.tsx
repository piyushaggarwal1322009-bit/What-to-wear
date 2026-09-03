import React from 'react';

const SITUATIONS = ['College', 'Interview', 'Wedding', 'Gym', 'Outdoor Event'];

interface ChipSelectorProps {
  selected: string;
  onSelect: (situation: string) => void;
}

export function ChipSelector({ selected, onSelect }: ChipSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {SITUATIONS.map((sit) => {
        const isSelected = selected === sit;
        return (
          <button
            key={sit}
            onClick={() => onSelect(sit)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
              focus-visible:ring-2 focus-visible:ring-periwinkle focus-visible:ring-offset-2
              ${isSelected 
                ? 'bg-periwinkle text-white shadow-md transform scale-[1.03] motion-reduce:transform-none' 
                : 'bg-white/50 text-dusk-ink hover:bg-white/80'
              }
            `}
            aria-pressed={isSelected}
          >
            {sit}
          </button>
        );
      })}
    </div>
  );
}
