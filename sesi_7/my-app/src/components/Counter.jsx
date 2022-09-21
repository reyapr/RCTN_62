import React from 'react';

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }
    
    shouldComponentUpdate(nextProp, nextState) {
        if(this.state.num !== nextState.num) {
            return true
        }
        return false
    }
    
    updateNum = (num) => {
        this.setState({ num: this.state.num + num })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <div>
                    <button onClick={() => this.updateNum(1)}>+</button>
                    {' '}
                    <button onClick={() => this.updateNum(0)}>-</button>
                </div>
            </div>
        )
    }
}

export default Counter