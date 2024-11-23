import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import WeatherSummary from '../components/WeatherSummary';
import WeatherForecast from '../components/WeatherForecast';
import SunMoonInfo from '../components/SunMoonInfo';
import HourlyForecast from '../components/HourlyForecast';
import { getWeatherData } from '../utils/weatherApi';

interface CityPageProps {
  weatherData: any;
  city: string;
}

export default function CityPage({ weatherData, city }: CityPageProps) {
  if (!weatherData) {
    return <div>Hava durumu verileri yüklenemedi.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <Head>
        <title>{city} Hava Durumu - 15 Günlük Tahmin</title>
        <meta name="description" content={`${city} için 15 günlük hava durumu tahmini, saatlik hava durumu ve güneş-ay bilgileri.`} />
        <meta name="keywords" content={`${city}, hava durumu, 15 günlük tahmin, saatlik hava durumu`} />
      </Head>
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">{city} Hava Durumu</h1>
      <div className="space-y-6">
        <WeatherSummary data={weatherData} />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <SunMoonInfo sunrise={weatherData.city.sunrise} sunset={weatherData.city.sunset} />
          </div>
          <div className="w-full md:w-1/2">
            <HourlyForecast data={weatherData} />
          </div>
        </div>
        <WeatherForecast data={weatherData} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { city } = context.params as { city: string };
  try {
    const weatherData = await getWeatherData(city);
    return {
      props: { weatherData, city },
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return {
      props: { weatherData: null, city },
    };
  }
};

