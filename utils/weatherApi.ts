const API_KEY = '966bf8e3b3686cc92c36e7157038b5cf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherData(city: string) {
  const response = await fetch(`${BASE_URL}/forecast?q=${city},TR&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
}

