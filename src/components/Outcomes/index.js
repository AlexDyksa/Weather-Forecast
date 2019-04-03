import React from 'react';
import FlipMove from 'react-flip-move';

import './styles.css';

const Outcomes = props => {
    const { code, city, temp, sunrise, sunset, wind, error } = props.data;

    return (
        <React.Fragment>
            {error && <p className="error">Incorrect City Name :-(</p>}
            {city &&
                <div className="app__outcomes outcomes">
                    <div className="outcomes__title">
                        Weather in
                        <span>{city}</span>,
                        {code}
                    </div>
                    <div className="outcomes__row">
                        <div className="outcomes__icon">
                            <i className="fas fa-thermometer-three-quarters"></i>
                        </div>
                        Temperature:
                        <span>{temp}</span>
                        &#8451;
                    </div>
                    <div className="outcomes__row">
                        <div className="outcomes__icon">
                            <i className="fas fa-sun"></i>
                        </div>
                        Sunrise:
                        <span>{sunrise}</span>
                    </div>
                    <div className="outcomes__row">
                        <div className="outcomes__icon">
                            <i className="fas fa-sun"></i>
                        </div>
                        Sunset:
                        <span>{sunset}</span>
                    </div>
                    <div className="outcomes__row">
                        <div className="outcomes__icon">
                            <i className="fas fa-wind"></i>
                        </div>
                        Wind Speed:
                        <span> {wind}</span>
                        m/s
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default Outcomes;