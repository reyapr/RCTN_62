import axios from 'axios';
import React from 'react';

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            userId: null,
            userDetails: null
        }
    }
    
    getDetails(userId) {
        this.setState({ userId })
    }
    
    async componentDidUpdate(prevProps, prevState) {
        if(prevState.userId !== this.state.userId) {
            const url = `https://jsonplaceholder.typicode.com/users/${this.state.userId}`
            const res = await axios.get(url)
            this.setState({
                userDetails: res.data
            })
        }
    }
    
    async componentDidMount() {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({
            users: res.data
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.userDetails ? 
                        <>
                            <div>Name: {this.state.userDetails.name}</div>
                            <div>Email: {this.state.userDetails.email}</div>
                            <div>phone: {this.state.userDetails.phone}</div>
                            <button 
                                onClick={() => this.setState({userDetails: null})}
                            >
                                Back
                            </button>
                        </>
                        :
                        this.state.users.map(user => {
                            return (
                                <li key={user.id} style={{marginBottom: '10px'}}>
                                    <div>Name: {user.name}</div> 
                                    <div>Email: {user.email}</div>
                                    <button onClick={() => this.getDetails(user.id)}>
                                        Get Details
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default User