import React from 'react';
import { translateWeather, getWeatherIcon } from '../utils/weatherTranslations';

interface HourlyForecastProps {
  data: any;
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4">Saatlik Tahmin</h3>
      <div className="flex overflow-x-auto">
        {data.list.slice(0, 8).map((hour: any, index: number) => (
          <div key={index} className="flex flex-col items-center mx-2">
            <p>{new Date(hour.dt * 1000).getHours()}:00</p>
            <span className="text-2xl">{getWeatherIcon(hour.weather[0].description)}</span>
            <p>{Math.round(hour.main.temp)}°C</p>
            <p>{hour.pop * 100}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

