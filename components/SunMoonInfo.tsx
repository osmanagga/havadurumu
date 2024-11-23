import React from 'react';

interface SunMoonInfoProps {
  sunrise: number;
  sunset: number;
}

export default function SunMoonInfo({ sunrise, sunset }: SunMoonInfoProps) {
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4">Güneş ve Ay</h3>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="text-4xl mr-4">☀️</span>
          <div>
            <p>Güneş Doğuşu: {sunriseTime}</p>
            <p>Güneş Batışı: {sunsetTime}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-4xl mr-4">🌙</span>
          <div>
            <p>Ay Doğuşu: 22:41</p>
            <p>Ay Batışı: 13:03</p>
          </div>
        </div>
      </div>
    </div>
  );
}

