import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "./Weather.css";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
          params: {
            key: 'b41935372a7442e7a00134810242509',
            q: city,
          },
        });
        setWeatherData(response.data);
      } catch (err) {
        setError('City not found. Please check the name and try again.');
        alert("Failed to fetch weather data");
        console.error(err); // Keep for debugging purposes
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="weather-info">
      <div className="weather-cards">
        <div className="weather-card">
          <p><strong>Temperature:</strong> {weatherData.current.temp_c} °C</p>
        </div>
        <div className="weather-card">
          <p><strong>Humidity:</strong> {weatherData.current.humidity} %</p>
        </div>
        <div className="weather-card">
          <p><strong>Condition:</strong> {weatherData.current.condition.text}</p>
          <img src={weatherData.current.condition.icon} alt="weather icon" />
        </div>
        <div className="weather-card">
          <p><strong>Wind Speed:</strong> {weatherData.current.wind_kph} kph</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
