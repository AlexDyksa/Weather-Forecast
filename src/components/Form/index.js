import React, { Component } from 'react';

import './styles.css';

class Form extends Component {
    setTime = timeInMilliseconds => {
        let newTime = new Date(timeInMilliseconds * 1000);
        return newTime.getHours() + ':' + this.transformMinutes(newTime.getMinutes());
    };

    transformMinutes = minutes => {
        if (String(minutes).length === 1) {
            return '0' + minutes;
        }

        return minutes;
    };

    roundTemperature = temp => {
        return +temp.toFixed();
    };

    handleSubmitForm = e => {
        e.preventDefault();
        this.getWeatherData();
    };

    getWeatherData = () => {
        const API_KEY = '7122cd64b0ae03295d684f0a0554f2b9';
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.props.enteredCityName}&units=metric&appid=${API_KEY}`;

        fetch(API_URL)
            .then(res => res.json())
            .then(dataJSON => {
                return {
                    code: dataJSON.sys.country,
                    city: dataJSON.name,
                    temp: this.roundTemperature(dataJSON.main.temp),
                    sunrise: this.setTime(dataJSON.sys.sunrise),
                    sunset: this.setTime(dataJSON.sys.sunset),
                    wind: dataJSON.wind.speed,
                    error: false
                }
            })
            .then(data => this.props.fetchData(data))
            .catch(() => this.props.fetchData({ error: true }));
    }

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
                <button
                    className={!this.props.enteredCityName ? 'app__submit app__submit-inactive' : 'app__submit'}
                    disabled={!this.props.enteredCityName ? true : false}
                >
                    Get Forecast
                </button>
            </form>
        );
    }
}

export default Form;