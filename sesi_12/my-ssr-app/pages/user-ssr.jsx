const UserSsr = (props) => {
    const users = props.users
    return (
        <div>
            <h1>User Non SSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )  
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    
    return {
        props: { users }
    }
}

export default UserSsr