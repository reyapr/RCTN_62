import React from 'react'
import CounterButton from '../molecules/CounterButton'

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
                <h3>{this.state.num}</h3>
                <div>
                    <CounterButton 
                        increment={this.increment(1)}
                        decrement={this.decrement}
                    />
                </div>
               
            </>
        )
    }
}