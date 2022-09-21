const UserListFn = (props) => {
    return (
        props.users.map(user => {
            return (
                <li key={user.id} style={{marginBottom: '10px'}}>
                    <div>Name: {user.name}</div> 
                    <div>Email: {user.email}</div>
                    <button onClick={() => props.getDetails(user.id)}>
                        Get Details
                    </button>
                </li>
            )
        })
    )
}

export default UserListFn