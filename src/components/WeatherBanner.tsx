import { WeatherData } from "../types/weather";
import { CloudRain, Wind, Droplets } from "lucide-react";

interface WeatherBannerProps {
  weather: WeatherData;
}

export function WeatherBanner({ weather }: WeatherBannerProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
          📍 {weather.location}
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl font-bold text-slate-800">{weather.temperature}°C</h2>
          <span className="text-sm text-slate-500 font-medium">Feels like {weather.feelsLike}°C</span>
        </div>
        <p className="text-slate-600 text-sm font-medium capitalize mt-1">{weather.condition}</p>
      </div>
      
      <div className="flex gap-6 bg-slate-50 py-3 px-5 rounded-lg border border-slate-100 w-full md:w-auto">
        <div className="flex flex-col items-center">
          <CloudRain size={16} className="text-blue-500 mb-1" />
          <span className="font-semibold text-slate-800 text-sm">{weather.rainProbability}%</span>
        </div>
        <div className="flex flex-col items-center">
          <Droplets size={16} className="text-blue-400 mb-1" />
          <span className="font-semibold text-slate-800 text-sm">{weather.humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <Wind size={16} className="text-slate-400 mb-1" />
          <span className="font-semibold text-slate-800 text-sm">{weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}
