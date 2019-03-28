import React from 'react';

const Form = (props) => (
    <form
        className="app__form"
        onSubmit={e => e.preventDefault()}
    >
        <input
            type="text"
            className="app__search"
            placeholder="Enter city name"
            value={props.enteredCityName}
            onChange={e => props.changeCityName(e.target.value)}
        />
        <button className="app__submit">Get Forecast</button>
    </form>
);

export default Form;