import React from 'react';

class Counter1 extends React.Component { 
    shouldComponentUpdate(nextProps) {
        if(nextProps.num !== this.props.num) {
            return true
        }
        return false
    } 
    
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
                <div>
                    <button onClick={this.props.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter1