'use client';

import { useState, useEffect, useRef } from 'react';
import { Situation, WeatherData, Recommendation } from '../types/weather';
import { getRecommendation } from '../logic/recommendationEngine';
import { Header } from '../components/Header';
import { SituationSelector } from '../components/SituationSelector';
import { LocationInput } from '../components/LocationInput';
import { WeatherBanner } from '../components/WeatherBanner';
import { RecommendationCards } from '../components/RecommendationCards';
import { WhySection } from '../components/WhySection';
import { EmptyState } from '../components/EmptyState';
import { AlertTriangle } from 'lucide-react';

export default function Home() {
  const [situation, setSituation] = useState<Situation>('College');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const resultRef = useRef<HTMLDivElement>(null);

  const fetchWeather = async () => {
    if (!location.trim()) return;
    setLoading(true);
    setError(null);
    setWeather(null); 
    try {
      const res = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Weather unavailable');
      }
      const data = await res.json();
      setWeather(data);
    } catch (err: any) {
      setError(err.message || "We couldn't retrieve the weather right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (weather) {
      setRecommendation(getRecommendation(weather, situation));
      
      if (window.innerWidth < 1024 && resultRef.current) {
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [weather, situation]);

  return (
    <main className="min-h-screen bg-[var(--background)] py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-6">
        
        {/* LEFT COLUMN: Controls */}
        <div className="lg:col-span-5 space-y-6 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-sm">
            <SituationSelector 
              selected={situation} 
              onSelect={setSituation} 
            />
            <LocationInput 
              location={location} 
              setLocation={setLocation} 
              onSubmit={fetchWeather} 
              loading={loading} 
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Results */}
        <div className="lg:col-span-7 animate-fade-in" ref={resultRef}>
          {loading && (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center p-6 bg-white/50 border border-slate-200/50 rounded-xl">
              <div className="relative w-10 h-10 flex items-center justify-center mb-4">
                <div className="absolute inset-0 border-2 border-blue-100 rounded-full"></div>
                <div className="absolute inset-0 border-2 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
              <p className="text-sm font-semibold text-slate-800">Checking weather...</p>
            </div>
          )}

          {error && (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-rose-50 border border-rose-100 rounded-xl">
              <AlertTriangle className="text-rose-500 mb-3" size={32} />
              <h3 className="text-lg font-semibold text-slate-800 mb-1">Weather unavailable</h3>
              <p className="text-sm text-slate-600 mb-4">{error}</p>
              <button
                onClick={fetchWeather}
                className="px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && !weather && (
             <EmptyState />
          )}

          {!loading && !error && weather && recommendation && (
            <div className="space-y-4">
              <WeatherBanner weather={weather} />
              
              <RecommendationCards 
                wear={recommendation.wear} 
                carry={recommendation.carry} 
                avoid={recommendation.avoid} 
              />

              <WhySection reasons={recommendation.reasons} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
