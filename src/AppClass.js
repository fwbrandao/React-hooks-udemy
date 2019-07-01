import React, { Component } from 'react';

class App extends Component {
    state = {
        count: 0,
        isOn: false
     }

     componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
     }

     componentDidUpdate() {
        document.title = `Clicked ${this.state.count} times`;
     }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    toggleLight = () => {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));
    };

    render() {
        const isOn = this.state.isOn;
        return (
            <>
            <h2>Counter</h2>
            <button onClick={this.incrementCount}>I was clicked {this.state.count} times</button>
            <h2>Toggle Light</h2>
                <div
                    onClick={this.toggleLight}
                    style={{
                        height: "50px",
                        width: "50px",
                        background: isOn ? "yellow" : "grey"
                    }}>
                </div>
            </>
        )
    }
}

export default App;