import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = () => {
  const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Tomskaya&appid=da5ed797a5045359d8f975c09788caf9&units=metric',
        [weather, setWeather] = useState('');

  useEffect(() => {
    axios({
      method: 'get',
      url: apiUrl
    }).then((response) => {
      console.log(response.data)
      setWeather(response.data.main.temp);
    })
  });

  return (
    <div className="">
      <h3 className="weatherTitle">
        Tomsk
      </h3>
      <p>{Math.round(weather)} degrees</p>
    </div>
  )
};

export default Weather;