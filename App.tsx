import React, { useState, useEffect } from 'react';
import { getWeatherData } from './utils/weatherApi';
import WeatherSummary from './components/WeatherSummary';
import WeatherForecast from './components/WeatherForecast';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getWeatherData('Istanbul');
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data');
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hava Durumu</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <>
          <WeatherSummary data={weatherData} />
          <WeatherForecast data={weatherData} />
        </>
      )}
    </div>
  );
}

