import { MapPin, Loader2 } from "lucide-react";

interface LocationInputProps {
  location: string;
  setLocation: (loc: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

export function LocationInput({ location, setLocation, onSubmit, loading }: LocationInputProps) {
  return (
    <div className="space-y-2 mt-6">
      <h2 className="text-sm font-semibold text-slate-700">Location</h2>
      
      <form 
        onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
        className="flex flex-col sm:flex-row gap-2"
      >
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <MapPin size={16} />
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your city..."
            className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors shadow-sm text-sm"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading || !location.trim()}
          className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors disabled:opacity-70 flex items-center justify-center gap-2 shadow-sm"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              <span>Checking...</span>
            </>
          ) : (
            <span>Get Recommendation</span>
          )}
        </button>
      </form>
    </div>
  );
}
