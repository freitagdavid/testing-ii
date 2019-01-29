import React, { Component } from 'react';
import Display from './components/Display';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            balls: 0,
            strikes: 0,
        };
    }

    render() {
        return (
            <div className="App">
                <Display
                    balls={this.state.balls}
                    strikes={this.state.strikes}
                />
            </div>
        );
    }
}

export default App;
