import { WeatherData } from "../types/weather";
import { CloudRain, Wind, Droplets, ThermometerSun } from "lucide-react";

interface WeatherBannerProps {
  weather: WeatherData;
}

export function WeatherBanner({ weather }: WeatherBannerProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-medium mb-1">
            <span className="text-xl">📍</span> {weather.location}
          </div>
          <div className="flex items-baseline gap-3">
            <h2 className="text-5xl font-bold tracking-tight text-slate-800">{weather.temperature}°C</h2>
            <span className="text-lg text-slate-500 font-medium">Feels like {weather.feelsLike}°C</span>
          </div>
          <p className="text-slate-600 mt-2 font-medium capitalize text-lg">{weather.condition}</p>
        </div>
        
        <div className="flex gap-4 md:gap-8 bg-white/60 backdrop-blur-md py-4 px-6 rounded-2xl border border-white">
          <div className="flex flex-col items-center">
            <CloudRain size={20} className="text-blue-500 mb-1" />
            <span className="font-bold text-slate-800">{weather.rainProbability}%</span>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Rain</span>
          </div>
          <div className="w-px bg-slate-200" />
          <div className="flex flex-col items-center">
            <Droplets size={20} className="text-blue-400 mb-1" />
            <span className="font-bold text-slate-800">{weather.humidity}%</span>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Humid</span>
          </div>
          <div className="w-px bg-slate-200" />
          <div className="flex flex-col items-center">
            <Wind size={20} className="text-slate-400 mb-1" />
            <span className="font-bold text-slate-800">{weather.windSpeed}</span>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
