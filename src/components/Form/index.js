import React, { Component } from 'react';

class Form extends Component {
    handleSubmitForm = e => {
        e.preventDefault();
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