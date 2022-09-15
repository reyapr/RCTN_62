import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super()
        this.state = {
            num: props.initNum,
            title: 'Class Component'
        }
    }
    
    increment = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    
    decrement = () => {
        this.setState({
            num: this.state.num - 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.num}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default CounterClass