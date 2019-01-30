import React, { Component } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            balls: 0,
            strikes: 0,
        };
        this.shouldReset = this.state.balls === 4 || this.state.strikes === 3;
    }

    clickHandler(type) {
        switch (type) {
            case 'hit':
                this.setState({
                    balls: 0,
                    strikes: 0,
                });
                break;
            case 'strike':
                if (this.shouldReset) {
                    this.setState({
                        balls: 0,
                        strikes: 0,
                    });
                    break;
                }
                this.setState({
                    balls: this.state.balls + 1,
                    strikes: this.state.strikes + 1,
                });
                break;
            case 'foul':
                if (this.strikes < 2) {
                    this.setState({
                        ...this.state,
                        strikes: this.state.strikes + 1,
                    });
                }
                break;
            case 'ball':
                if (this.state.balls < 3)
            default:
                break;
        }
    }

    ball() {}

    render() {
        return (
            <div className="App">
                <Display
                    balls={this.state.balls}
                    strikes={this.state.strikes}
                />
                <Dashboard />
            </div>
        );
    }
}

export default App;
