import { WeatherData } from '../types/weather';

export async function fetchWeather(location: string): Promise<WeatherData> {
  const provider = process.env.NEXT_PUBLIC_WEATHER_PROVIDER || 'open-meteo';
  const apiKey = process.env.WEATHER_API_KEY;

  if (provider === 'openweathermap' && apiKey) {
    // OpenWeatherMap Implementation
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    
    if (data.cod !== 200) {
      throw new Error(data.message || 'Location not found');
    }

    return {
      location: data.name,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // m/s to km/h
      rainProbability: data.rain ? 100 : (data.clouds?.all > 80 ? 30 : 0), // Rough estimate since current OWM free tier lacks probability
      condition: data.weather[0]?.main || 'Unknown'
    };
  } else {
    // Default Open-Meteo Implementation (Free, no key required)
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error('Location not found');
    }

    const { latitude, longitude, name } = geoData.results[0];
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
}
