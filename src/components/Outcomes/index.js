import React from 'react';
import FlipMove from 'react-flip-move';

import './styles.css';

const Outcomes = props => {
    const { code, city, temp, sunrise, sunset } = props.data;

    return (
        <FlipMove duration={150} easing="ease-out">
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
                    <span> {sunset}</span>
                </div>
            </div>
        </FlipMove>
    );
};

export default Outcomes;