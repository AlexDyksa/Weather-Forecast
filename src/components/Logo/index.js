import React from 'react';

import './styles.css';

const Logo = () => (
    <div className="logo">
        Weather Forecast
        <div className="logo__icons">
            <i className="fas fa-cloud"></i>
            <i className="fas fa-bolt"></i>
            <i className="fas fa-sun"></i>
        </div>
    </div>
);

export default Logo;