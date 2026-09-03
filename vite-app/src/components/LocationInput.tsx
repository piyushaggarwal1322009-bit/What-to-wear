import React, { useState, useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const MOCK_CITIES = ['Delhi', 'London', 'New York', 'Tokyo', 'Sydney', 'Paris', 'Berlin', 'Mumbai', 'Toronto', 'Dubai'];

interface LocationInputProps {
  value: string;
  onChange: (val: string) => void;
}

export function LocationInput({ value, onChange }: LocationInputProps) {
  const [input, setInput] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = MOCK_CITIES.filter(c => c.toLowerCase().includes(input.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (city: string) => {
    setInput(city);
    onChange(city);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-dusk-ink/50" size={18} />
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Enter a city (e.g. London)"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-dusk-ink/10 bg-white/70 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle placeholder-dusk-ink/40 text-dusk-ink shadow-sm transition-colors"
        />
      </div>
      {isOpen && input && filtered.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-dusk-ink/10 max-h-48 overflow-y-auto">
          {filtered.map(city => (
            <li key={city}>
              <button
                className="w-full text-left px-4 py-2 hover:bg-sky-base focus:bg-sky-base focus:outline-none text-dusk-ink"
                onClick={() => handleSelect(city)}
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
