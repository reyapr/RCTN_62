import axios from 'axios';
import React from 'react';
import UserList from './UserList';

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            userId: null,
            userDetails: null
        }
    }
    
    getDetails = (userId) => {
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
                        <UserList 
                            users={this.state.users} 
                            getDetails={this.getDetails}
                        />
                    }
                </ul>
            </div>
        )
    }
}

export default User