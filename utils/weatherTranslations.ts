const weatherTranslations: { [key: string]: string } = {
  'clear sky': 'Açık',
  'few clouds': 'Az Bulutlu',
  'scattered clouds': 'Parçalı Bulutlu',
  'broken clouds': 'Çok Bulutlu',
  'shower rain': 'Sağanak Yağışlı',
  'rain': 'Yağmurlu',
  'thunderstorm': 'Gök Gürültülü Fırtına',
  'snow': 'Karlı',
  'mist': 'Sisli'
};

export function translateWeather(description: string): string {
  return weatherTranslations[description.toLowerCase()] || description;
}

export function getWeatherIcon(description: string): string {
  const iconMap: { [key: string]: string } = {
    'clear sky': '☀️',
    'few clouds': '🌤️',
    'scattered clouds': '⛅',
    'broken clouds': '☁️',
    'shower rain': '🌧️',
    'rain': '🌦️',
    'thunderstorm': '⛈️',
    'snow': '❄️',
    'mist': '🌫️'
  };
  return iconMap[description.toLowerCase()] || '🌡️';
}

