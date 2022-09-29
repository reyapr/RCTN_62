import React from 'react';

class CounterClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter Class</h1>
                <h2>0</h2>
                <button>+</button>
                <button>-</button>
                <div>
                    <input type="text" />
                    <button>submit</button>
                </div>
            </div>
        )
    }
}

export default CounterClass