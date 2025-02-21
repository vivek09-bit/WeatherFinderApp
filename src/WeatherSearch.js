import React, { useState } from "react";
import axios from "axios";
const WeatherSearch = () =>{
    const [City, setCity] = useState("");
    const [state, setState] = useState("");
    const [countrycode, setCountryCode] = useState("");
    const [Weather, setWeather] = useState({});
    const API_KEY = '0b04a937953c56e40b062358408cb0ef';
    const handleChange = (e) => {
        setCity(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather();
    };  

    const getWeather = async () => {
        const response = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${City},${state},${countrycode}&appid=${API_KEY}`
        );
        console.log(response.data);
        // setWeather(response.data);
    }
    return (
        <>
            <h1>Weather Search com</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="city" />
            <input type="text" onChange={handleChange} placeholder="state" />
            <input type="text" onChange={handleChange} placeholder="country code" />

                <button type="submit">Search</button>
            </form>
            <h2>{Weather.name}</h2>
            <h3>{Weather.weather}</h3>

        </>
    )
}
export default WeatherSearch;