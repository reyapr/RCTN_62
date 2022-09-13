import React from 'react'

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'udin'
        }
        this.setUsername = this.setUsername.bind(this)
    }
    
    getUsername() {
        return this.state.username
    }
    
    setUsername() {
        this.setState({
            username: 'bambang'
        })
    }
    
    render() {
        console.log('render')
        return (
            <div>
                <h1>Username: {this.getUsername()}</h1>
                <button onClick={this.setUsername}>Set Username</button>
            </div>
        )
    }
}

export default User