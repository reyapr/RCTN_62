import axios from "axios"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"

const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        setUsers(res.data)
      })
  }, [])
  
  return (
    <View style={{flex: 1}}>
      <Text 
        style={{ 
          fontSize: 30, 
          fontWeight: '700',
          alignSelf: 'center'
        }}
      >
          Users
      </Text>
      {
        users.map(user => {
          return (
            <View key={user.id} style={styles.user}>
              <Text style={styles.title}>{user.email}</Text>
              <Text>{user.body}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

const styles = {
  title: {
    fontSize: 20,
    fontWeight: '700'
  },
  user: {
    marginBottom: 30
  }
}

export default Users