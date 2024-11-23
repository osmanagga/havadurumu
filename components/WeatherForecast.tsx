import React from 'react';

interface WeatherForecastProps {
  data: any; // You might want to create a more specific type for this
}

export default function WeatherForecast({ data }: WeatherForecastProps) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-xl font-semibold mb-2">15 Günlük Hava Durumu</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Tarih</th>
            <th>Hava</th>
            <th>Gün</th>
            <th>Gece</th>
          </tr>
        </thead>
        <tbody>
          {data.list.slice(0, 15).map((day: any, index: number) => (
            <tr key={index}>
              <td>{new Date(day.dt_txt).toLocaleDateString('tr-TR')}</td>
              <td>{day.weather[0].description}</td>
              <td>{day.main.temp_max}°C</td>
              <td>{day.main.temp_min}°C</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

