import React, { Component } from 'react';

import './styles.css';

class Form extends Component {
    handleSubmitForm = e => {
        e.preventDefault();
        this.getWeatherData();
    };

    getWeatherData = () => {
        const API_KEY = '7122cd64b0ae03295d684f0a0554f2b9';
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.props.enteredCityName}&units=metric&appid=${API_KEY}`;

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                let sunriseTimeTransformed = new Date(data.sys.sunrise * 1000);
                sunriseTimeTransformed = sunriseTimeTransformed.getHours() + ':' + sunriseTimeTransformed.getMinutes();

                let sunsetTimeTransformed = new Date(data.sys.sunset * 1000);
                sunsetTimeTransformed = sunsetTimeTransformed.getHours() + ':' + sunsetTimeTransformed.getMinutes();

                console.log(data);

                return {
                    code: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    sunrise: sunriseTimeTransformed,
                    sunset: sunsetTimeTransformed
                }
            })
            .then(weatherForecast => this.props.fetchData(weatherForecast));
    };


    handleChangeCityName = e => {
        this.props.changeCityName(e.target.value);
    };

    render() {
        return (
            <form
                className="app__form"
                onSubmit={this.handleSubmitForm}
            >
                <input
                    type="text"
                    className="app__search"
                    placeholder="Enter city name"
                    value={this.props.enteredCityName}
                    onChange={this.handleChangeCityName}
                />
                <button className="app__submit">Get Forecast</button>
            </form>
        );
    }
}

export default Form;