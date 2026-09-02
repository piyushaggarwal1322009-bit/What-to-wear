import { MapPin, Loader2 } from "lucide-react";

interface LocationInputProps {
  location: string;
  setLocation: (loc: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

export function LocationInput({ location, setLocation, onSubmit, loading }: LocationInputProps) {
  return (
    <div className="space-y-3 mt-8">
      <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Where are you?</h2>
      
      <form 
        onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <MapPin size={18} />
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your city... (e.g. Delhi)"
            className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading || !location.trim()}
          className="relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-lg group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex items-center justify-center gap-2">
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Checking...</span>
              </>
            ) : (
              <span>Get Recommendation →</span>
            )}
          </div>
        </button>
      </form>
    </div>
  );
}
