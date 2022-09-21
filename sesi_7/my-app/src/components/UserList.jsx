import React from 'react';

class UserList extends React.Component {
    componentWillUnmount() {
        localStorage.removeItem('users') 
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.users !== this.props.users) {
            localStorage.setItem('users', JSON.stringify(this.props.users))
        }
    }
    
    render() {
        return (
            this.props.users.map(user => {
                return (
                    <li key={user.id} style={{marginBottom: '10px'}}>
                        <div>Name: {user.name}</div> 
                        <div>Email: {user.email}</div>
                        <button onClick={() => this.props.getDetails(user.id)}>
                            Get Details
                        </button>
                    </li>
                )
            })
        )
    }
}

export default UserList