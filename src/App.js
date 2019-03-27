import React, { Component } from 'react';

import './App.css';
import Logo from './components/Logo';
import Main from './components/Main';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app__inner">
                    <Logo />
                    <Main />
                </div>
            </div>
        );
    }
}

export default App;
