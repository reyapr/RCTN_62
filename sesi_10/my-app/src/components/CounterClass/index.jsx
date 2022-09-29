import React from 'react';
import { connect } from 'react-redux'
import { incrementClass, decrementClass, updateCounter } from './reducer';

class CounterClass extends React.Component {
    constructor () {
        super()
        this.state = {
            inputCounter: 0
        }
    }
    
    handleChange = (e) => {
        const num = Number(e.target.value)
        this.setState({
            inputCounter: num
        })
    }
    
    handleSubmit = () => {
        this.props.dispatch(updateCounter(this.state.inputCounter))
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.myTitleClass}</h1>
                <h2>{this.props.myCounterClass}</h2>
                <button onClick={() => this.props.dispatch(incrementClass)}>+</button>
                <button onClick={() => this.props.dispatch(decrementClass)}>-</button>
                <div>
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>submit</button>
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