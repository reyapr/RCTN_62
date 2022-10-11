import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data)
      })
  }, [])
  
  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => navigate('/')}>Back To Home</button>
      {
        users.map(user => {
          return (
            <div key={user.id}>{user.name}</div>
          )
        })
      }
      
    </div>
  )
}

export default User