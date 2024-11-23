import React from 'react';

interface WeatherSummaryProps {
  data: any; // You might want to create a more specific type for this
}

export default function WeatherSummary({ data }: WeatherSummaryProps) {
  const currentWeather = data.list[0];

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-2xl font-semibold mb-2">{data.city.name}</h2>
      <p className="text-lg mb-2">
        {currentWeather.weather[0].description} - {currentWeather.main.temp}°C
      </p>
      <ul>
        <li>Rüzgar: {currentWeather.wind.speed} km/sa</li>
        <li>Nem: {currentWeather.main.humidity}%</li>
        <li>Basınç: {currentWeather.main.pressure} hPa</li>
      </ul>
    </div>
  );
}

