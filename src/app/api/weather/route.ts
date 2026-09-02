import { NextResponse } from 'next/server';
import { fetchWeather } from '../../../services/weatherService';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  if (!location) {
    return NextResponse.json({ error: 'Location is required' }, { status: 400 });
  }

  try {
    const weather = await fetchWeather(location);
    return NextResponse.json(weather);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Weather unavailable' }, { status: 500 });
  }
}
