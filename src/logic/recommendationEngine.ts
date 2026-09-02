import { WeatherData, Situation, Recommendation } from '../types/weather';

export function getRecommendation(weather: WeatherData, situation: Situation): Recommendation {
  const { temperature, feelsLike, rainProbability, humidity, windSpeed } = weather;
  const effectiveTemp = feelsLike;

  const wear: string[] = [];
  const carry: string[] = [];
  const avoid: string[] = [];
  const reasons: string[] = [];

  // Rules setup
  const isCold = effectiveTemp < 15;
  const isCool = effectiveTemp >= 15 && effectiveTemp <= 21;
  const isComfortable = effectiveTemp >= 22 && effectiveTemp <= 27;
  const isWarm = effectiveTemp >= 28 && effectiveTemp <= 31;
  const isHot = effectiveTemp >= 32;

  const isRainy = rainProbability >= 50;
  const isHumid = humidity >= 61;
  const isWindy = windSpeed >= 31;

  // Base logic
  if (isCold) {
    avoid.push('Light layers', 'Short sleeves');
    reasons.push(`It's cold (${effectiveTemp}°C), so bundle up.`);
  } else if (isCool) {
    reasons.push(`It's cool, a light jacket is a good idea.`);
  } else if (isWarm || isHot) {
    wear.push('Breathable clothing');
    avoid.push('Heavy jacket', 'Thick layers');
    reasons.push(`It feels warm/hot (${effectiveTemp}°C), wear breathable clothes.`);
  }

  if (isHumid && (isWarm || isHot)) {
    reasons.push('High humidity will make it feel warmer.');
  }

  if (isRainy) {
    carry.push('Umbrella');
    reasons.push(`High chance of rain (${rainProbability}%).`);
  }

  if (isWindy) {
    if (isCold || isCool) wear.push('Windbreaker');
    reasons.push('Strong winds expected.');
  }

  // Situation overrides
  switch (situation) {
    case 'College':
      if (isWarm || isHot) {
        wear.push('T-shirt', 'Light pants');
      } else if (isCold || isCool) {
        wear.push('Hoodie', 'Jeans');
      }
      break;

    case 'Interview':
      if (isWarm || isHot) {
        wear.push('Lightweight formal shirt', 'Formal trousers');
      } else {
        wear.push('Suit', 'Formal shoes');
      }
      break;

    case 'Wedding':
      if (isWarm || isHot) {
        wear.push('Lightweight formal/event clothing');
      } else {
        wear.push('Formal event attire with layers');
      }
      break;

    case 'Gym':
      wear.push('Comfortable workout clothing');
      carry.push('Water bottle');
      break;

    case 'Outdoor Event':
      if (isRainy) {
        wear.push('Waterproof outer layer');
        avoid.push('Suede or easily stained shoes');
      }
      if (isHot) {
        carry.push('Water bottle', 'Sunscreen');
      }
      break;
  }

  return { wear, carry, avoid, reasons };
}
