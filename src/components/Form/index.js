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
                let setTime = timeInMilliseconds => {
                    let newTime = new Date(timeInMilliseconds * 1000);
                    return newTime.getHours() + ':' + transformMinutes(newTime.getMinutes());
                }

                let transformMinutes = (minutes) => {
                    if (String(minutes).length === 1) {
                        console.log('0' + minutes);
                        return '0' + minutes;
                    } else {
                        console.log('ddd');
                        return minutes;
                    }
                }

                return {
                    code: data.sys.country,
                    city: data.name,
                    temp: +(data.main.temp).toFixed(),
                    sunrise: setTime(data.sys.sunrise),
                    sunset: setTime(data.sys.sunset),
                    wind: data.wind.speed
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