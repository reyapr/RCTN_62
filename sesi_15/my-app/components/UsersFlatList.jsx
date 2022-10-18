import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList, View, Text } from "react-native"

const UsersFlatList = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
      setUsers(res.data)
    })
  })
  
  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.user}>
            <Text style={styles.title}>{item.email}</Text>
            <Text>{item.body}</Text>
          </View>
        )
      }}
    />
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

export default UsersFlatList