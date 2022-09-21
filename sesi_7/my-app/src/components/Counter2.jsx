import React from 'react';

class Counter2 extends React.Component {
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

export default Counter2