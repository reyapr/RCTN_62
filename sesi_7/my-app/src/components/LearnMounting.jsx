import React from 'react'

class LearnMounting extends React.Component {
    constructor() {
        super()
        console.log('constructor')
        this.state = {}
    }
    
    componentDidMount() {
        console.log('component did mount')
    }
    
    render() {
        console.log('render')
        return (
            <div>
                <h1>Learn Mounting on React</h1>
            </div>
        )
    }
}

export default LearnMounting