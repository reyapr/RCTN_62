import React from 'react';

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    users: res
                })
            })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map(user => {
                            return (
                                <li>
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