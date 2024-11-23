import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const cities = [
  'Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep',
  'Samsun', 'Kayseri', 'Eskisehir', 'Mersin', 'Diyarbakir', 'Trabzon'
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <Head>
        <title>Türkiye Hava Durumu - 15 Günlük Tahmin</title>
        <meta name="description" content="Türkiye'nin tüm şehirleri için 15 günlük hava durumu tahminleri, saatlik hava durumu ve güneş-ay bilgileri." />
        <meta name="keywords" content="Türkiye, hava durumu, 15 günlük tahmin, şehirler" />
      </Head>
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Türkiye Hava Durumu</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cities.map((city) => (
          <Link href={`/${city.toLowerCase()}`} key={city}>
            <a className="bg-white shadow-md rounded-lg p-4 text-center hover:bg-blue-100 transition-colors">
              <h2 className="text-xl font-semibold">{city}</h2>
              <p className="text-gray-600">15 Günlük Tahmin</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

