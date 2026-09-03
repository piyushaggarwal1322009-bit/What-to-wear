import { WeatherCondition } from '../components/WeatherScene';
import { getRecommendation, FitPreference, GenderPreference } from '../data/recommendations';

export interface WeatherData {
  condition: WeatherCondition;
  tempC: number;
  city: string;
  recommendation: {
    items: string[];
    note: string;
    fitNote: string | null;
  };
}

export function useWeatherMock() {
  const fetchMockWeather = async (
    city: string, 
    situation: string, 
    fitPref: FitPreference, 
    genderPref: GenderPreference,
    heightCm: number | null
  ): Promise<WeatherData> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Deterministic weather condition (mocked)
    const code = city.charCodeAt(0) + city.length;
    let condition: WeatherCondition = 'Clear';
    let tempC = 25;
    
    if (code % 3 === 0) {
      condition = 'Rain';
      tempC = 16;
    } else if (code % 2 === 0) {
      condition = 'Cloudy';
      tempC = 20;
    } else {
      condition = 'Clear';
      tempC = 29;
    }

    // Local deterministic lookup based on weather, situation, gender and fit
    const recommendation = getRecommendation(situation, condition, tempC, fitPref, genderPref, heightCm);

    return {
      condition,
      tempC,
      city,
      recommendation
    };
  };

  return { fetchMockWeather };
}
