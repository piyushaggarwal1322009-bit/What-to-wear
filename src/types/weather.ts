export type WeatherData = {
  location: string;
  temperature: number;
  feelsLike: number;
  rainProbability: number;
  humidity: number;
  windSpeed: number;
  condition: string;
};

export type Situation = 'College' | 'Interview' | 'Wedding' | 'Gym' | 'Outdoor Event';

export type Recommendation = {
  wear: string[];
  carry: string[];
  avoid: string[];
  reasons: string[];
};
