import { useEffect, useState } from 'react'
import styles from './styles.module.css'

const User = () => {
    const [users, setUser] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                setUser(res.slice(0, 5))
            })
    }, [])
    
    return (
        <div>
            <ul>
                {users.map(user => {
                    return (
                        <li
                            key={user.id}
                            className={styles.list}
                        >
                            {user.name}
                        </li>
                    )
                })}
            </ul>
        </div>    
    )
}

export default User