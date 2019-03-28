import React from 'react';

const Outcomes = props => {
    const { city, temp, sunrise, sunset } = props.data;

    return (
        <div className="app__outcomes">
            <p>City: {city}</p>
            <p>Temperature: {temp}</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
        </div>
    );
};

export default Outcomes;