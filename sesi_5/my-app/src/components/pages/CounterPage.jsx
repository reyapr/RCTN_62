import React from 'react'
import Counter from '../organisms/Counter'
import CounterTemplate from '../template/CounterTemplate'

class CounterPage extends React.Component {
    render() {
        return (
            <CounterTemplate
                title='Counter'
                desc='Learn React'
            >
                <Counter/>
            </CounterTemplate>
        )
    }
}

export default CounterPage