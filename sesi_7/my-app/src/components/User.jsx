import axios from 'axios';
import React from 'react';

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
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
                        this.state.users.map(user => {
                            return (
                                <li key={user.id} style={{marginBottom: '10px'}}>
                                    <div>Name: {user.name}</div> 
                                    <div>Email: {user.email}</div>
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