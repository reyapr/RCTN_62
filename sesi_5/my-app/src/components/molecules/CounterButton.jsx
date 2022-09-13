import React from 'react'
import MyButton from '../atoms/MyButton'

class CounterButton extends React.Component {
    render() {
        return (
            <>
                <MyButton
                    color='white'
                    bgColor='green'
                    onClick={this.props.increment}
                >
                    +
                </MyButton>
                {'   '}
                <MyButton
                    color='white'
                    bgColor='red'
                    onClick={this.props.decrement}
                >
                    -
                </MyButton>
            </>
        )
    }
}

export default CounterButton