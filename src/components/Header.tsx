import { CloudSun } from "lucide-react";

export function Header() {
  return (
    <header className="mb-10 pt-4 flex justify-between items-center animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-br from-blue-700 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
          <CloudSun className="text-blue-600" size={28} />
          What Should I Wear?
        </h1>
        <p className="text-slate-500 text-sm mt-1 font-medium">
          Dress for the weather, not just the forecast.
        </p>
      </div>
    </header>
  );
}
