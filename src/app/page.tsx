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
    setWeather(null); // clear old weather to trigger entrance animations again
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
      
      // Smooth scroll on mobile if the result is loaded
      if (window.innerWidth < 1024 && resultRef.current) {
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [weather, situation]);

  return (
    <main className="min-h-screen bg-[var(--background)] py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
        
        {/* LEFT COLUMN: Controls */}
        <div className="lg:col-span-5 space-y-8 animate-fade-in delay-100">
          <div className="bg-white/40 backdrop-blur-md border border-slate-200/60 p-6 sm:p-8 rounded-[2rem] shadow-sm">
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
        <div className="lg:col-span-7" ref={resultRef}>
          {loading && (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8">
              <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
              <p className="text-lg font-bold text-slate-800">Checking the weather...</p>
              <p className="text-slate-500">Finding the perfect recommendation for you.</p>
            </div>
          )}

          {error && (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-rose-50/50 border border-rose-100 rounded-3xl animate-fade-in">
              <AlertTriangle className="text-rose-500 mb-4" size={48} />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Weather unavailable</h3>
              <p className="text-slate-600 mb-6 max-w-sm">{error}</p>
              <button
                onClick={fetchWeather}
                className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:shadow transition-all"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && !weather && (
            <div className="animate-fade-in delay-200 h-full">
              <EmptyState />
            </div>
          )}

          {!loading && !error && weather && recommendation && (
            <div className="space-y-6">
              <div className="animate-fade-up delay-0">
                <WeatherBanner weather={weather} />
              </div>
              
              <div className="animate-fade-up delay-100">
                <RecommendationCards 
                  wear={recommendation.wear} 
                  carry={recommendation.carry} 
                  avoid={recommendation.avoid} 
                />
              </div>

              <div className="animate-fade-up delay-300">
                <WhySection reasons={recommendation.reasons} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
