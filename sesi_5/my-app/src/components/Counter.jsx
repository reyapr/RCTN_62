import React from 'react'

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'Counter',
            num: 0
        }
    }
    
    increment = (num) => {
        return () => {
            console.log(num, 'num')
            this.setState({
                num: this.state.num + num
            })
        }
    }
    
    decrement = () => {
        this.setState({
            num: this.state.num - 1
        })
    }
    
    render() {
        return (
            <>
                <h1>{this.state.title}</h1>
                <br />
                <h3>{this.state.num}</h3>
                <button onClick={this.increment(2)}>+</button>
                {' '}
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}