import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <>
                <p data-testid="balls">{this.props.balls}</p>
                <p data-testid="strikes">{this.props.strikes}</p>
            </>
        );
    }
}

export default Display;
