import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import night from "./icons/night.svg"
import day from "./icons/day.svg"
import sunny from "./icons/sunny.svg"
import cloudy_night from "./icons/cloudy-night.svg"
import cloudy from "./icons/cloudy.svg"
import perfect_day from "./icons/perfect-day.svg"
import rain from "./icons/rain.svg"
import rain_night from "./icons/rain-night.svg"
import storm from "./icons/storm.svg"

export const WeatherIcons = {
  "01n": night,
  "02d": day,
  "01d": sunny,
  "02n": cloudy_night,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfect_day,
  "04n": cloudy_night,
  "09d": rain,
  "09n": rain_night,
  "10d": rain,
  "10n": rain_night,
  "11d": storm,
  "11n": storm
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  border: 0px solid;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  padding 20px 10px;
  width: 350px;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin: 20px auto;
`;

const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

const KnowMore = styled.span`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding 10px;
  font-family: Montserrat;
  font-size: 14px;
  text-decoration: none;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  border-bottom: 2px solid black;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83b898c74684a90fa1e4b91938d28d56`,
    );
    updateWeather(response.data);
  };
  return (
    <>
    <Container>

      <AppLabel>Weather App</AppLabel>

      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
    <KnowMore>
        <p>Created by <strong>Harsh</strong> | <Link href="https://github.com/harshmehta2/Weather-App" target="_blank"><strong>Github Repo</strong></Link></p>
    </KnowMore>
    </>
  );
}

export default App;
