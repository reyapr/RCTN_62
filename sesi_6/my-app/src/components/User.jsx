import React from 'react';

export default class User extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'udin'
        }
    }
    
    render() {
        return (
            <h1>{this.state.username}</h1>
        )
    }
}