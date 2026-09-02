import { WeatherData } from '../types/weather';

export async function fetchWeather(location: string): Promise<WeatherData> {
  // 1. Geocoding
  const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`);
  const geoData = await geoRes.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error('Location not found');
  }

  const { latitude, longitude, name } = geoData.results[0];

  // 2. Weather
  const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,wind_speed_10m,weather_code&hourly=precipitation_probability`);
  const weatherData = await weatherRes.json();

  return {
    location: name,
    temperature: weatherData.current.temperature_2m,
    feelsLike: weatherData.current.apparent_temperature,
    humidity: weatherData.current.relative_humidity_2m,
    windSpeed: weatherData.current.wind_speed_10m,
    rainProbability: weatherData.hourly?.precipitation_probability?.[0] || 0,
    condition: weatherData.current.weather_code.toString() // simplified
  };
}
