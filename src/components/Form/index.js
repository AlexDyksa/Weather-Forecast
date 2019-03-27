import React from 'react';

const Form = () => (
    <form className="app__form">
        <input type="text" className="app__search" placeholder="Enter city name" />
        <button className="app__submit">Get Forecast</button>
    </form>
);

export default Form;