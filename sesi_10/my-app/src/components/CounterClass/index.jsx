import React from 'react';
import { connect } from 'react-redux'

class CounterClass extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.myTitleClass}</h1>
                <h2>{this.props.myCounterClass}</h2>
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

const mapStateToProps = (state) => {
    return {
        myCounterClass: state.counterClass.counter,
        myTitleClass: state.counterClass.title
    }
}

export default connect(mapStateToProps)(CounterClass)