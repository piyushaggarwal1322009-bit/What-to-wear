import React, { useState } from 'react';
import { ChipSelector } from './components/ChipSelector';
import { LocationInput } from './components/LocationInput';
import { WeatherScene } from './components/WeatherScene';
import { PersonalizeFit } from './components/PersonalizeFit';
import { useWeatherMock, WeatherData } from './hooks/useWeatherMock';
import { Loader2, Shirt, Info, Ruler } from 'lucide-react';
import { FitPreference, GenderPreference } from './data/recommendations';

function App() {
  const [situation, setSituation] = useState('');
  const [city, setCity] = useState('');
  const [fitPref, setFitPref] = useState<FitPreference>('No preference');
  const [genderPref, setGenderPref] = useState<GenderPreference>('Unisex / no preference');
  const [heightCm, setHeightCm] = useState<number | null>(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const { fetchMockWeather } = useWeatherMock();

  const handleGetRecommendation = async () => {
    if (!situation || !city) return;
    setIsLoading(true);
    setWeatherData(null);
    try {
      const data = await fetchMockWeather(city, situation, fitPref, genderPref, heightCm);
      setWeatherData(data);
    } finally {
      setIsLoading(false);
    }
  };

  let bgClass = 'bg-sky-base';
  if (weatherData) {
    switch (weatherData.condition) {
      case 'Clear': bgClass = 'bg-gradient-to-br from-sky-base to-sunrise-amber/40'; break;
      case 'Cloudy': bgClass = 'bg-gradient-to-br from-sky-base to-overcast-teal/40'; break;
      case 'Rain': bgClass = 'bg-gradient-to-br from-sky-base to-dusk-ink/30'; break;
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-700 ${bgClass}`}>
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-20 lg:py-24">
        
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight text-dusk-ink">
            What Should I Wear?
          </h1>
          <p className="text-lg text-dusk-ink/70">
            Your weather-aware outfit plan.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
          {/* LEFT: Controls */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-medium mb-4 text-dusk-ink">Select a situation</h2>
              <ChipSelector selected={situation} onSelect={setSituation} />
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-dusk-ink">Where are you?</h2>
              <LocationInput value={city} onChange={setCity} />
              
              {/* New Personalization Section */}
              <PersonalizeFit 
                heightCm={heightCm} 
                setHeightCm={setHeightCm} 
                fitPref={fitPref} 
                setFitPref={setFitPref} 
                genderPref={genderPref}
                setGenderPref={setGenderPref}
              />
            </section>

            <button
              onClick={handleGetRecommendation}
              disabled={!situation || !city || isLoading}
              className="w-full sm:w-auto px-8 py-3 bg-dusk-ink text-white rounded-xl font-medium hover:bg-dusk-ink/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dusk-ink disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-md"
            >
              {isLoading ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
              {isLoading ? 'Checking sky...' : 'Get Recommendation'}
            </button>
          </div>

          {/* RIGHT: Results */}
          <div className="flex flex-col">
            {!weatherData && !isLoading ? (
              <div className="flex-1 min-h-[300px] flex items-center justify-center p-8 bg-white/40 rounded-3xl border border-white/50 backdrop-blur-sm text-center shadow-sm">
                <p className="text-lg text-dusk-ink/60 font-medium max-w-xs">
                  Choose a situation and city — I'll check the sky and suggest an outfit.
                </p>
              </div>
            ) : null}

            {isLoading ? (
              <div className="flex-1 min-h-[300px] flex items-center justify-center bg-white/40 rounded-3xl border border-white/50 backdrop-blur-sm shadow-sm">
                <Loader2 className="animate-spin text-dusk-ink/40 w-10 h-10" />
              </div>
            ) : null}

            {weatherData && !isLoading ? (
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 flex flex-col gap-6 animate-fade-in">
                
                <WeatherScene condition={weatherData.condition} />

                <div className="text-center mt-2 mb-4">
                  <div className="text-5xl font-display font-semibold text-dusk-ink mb-1">{weatherData.tempC}°</div>
                  <div className="text-lg font-medium text-dusk-ink/70">{weatherData.condition} in {weatherData.city}</div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-dusk-ink/60 uppercase tracking-wider mb-2">Suggested Pieces</h3>
                  
                  {weatherData.recommendation.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white/80 rounded-xl shadow-sm border border-white">
                      <Shirt className="text-periwinkle mt-0.5" size={18} />
                      <span className="font-medium text-dusk-ink leading-tight">{item}</span>
                    </div>
                  ))}
                  
                  <div className="flex items-start gap-3 p-4 bg-periwinkle/10 rounded-xl border border-periwinkle/20 mt-4">
                    <Info className="text-periwinkle shrink-0 mt-0.5" size={18} />
                    <p className="font-medium text-dusk-ink/80 text-sm leading-relaxed">{weatherData.recommendation.note}</p>
                  </div>

                  {weatherData.recommendation.fitNote && (
                    <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl shadow-sm border border-white mt-2 animate-fade-in">
                      <Ruler className="text-dusk-ink/40 shrink-0 mt-0.5" size={18} />
                      <p className="font-medium text-dusk-ink/70 text-sm leading-relaxed">{weatherData.recommendation.fitNote}</p>
                    </div>
                  )}
                </div>

              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
