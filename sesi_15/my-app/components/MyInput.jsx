import { useState } from "react"
import { View, Text, TextInput } from "react-native"

const MyInput = () => {
  const [input, setInput] = useState('')
  
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>My Input:</Text>
        <TextInput 
          style={styles.input} 
          value={input}
          onChangeText={setInput}
        />
      </View>
      <View style={styles.valueContainer}>
        <Text style={{marginRight: 10}}>Input Value:</Text>
        <Text>{input}</Text>
      </View>
    </View>
  )
}

const styles = {
  container: {
    justifyContent: 'center'
  },
  inputContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  valueContainer: {
    flexDirection: 'row'
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: 150,
    marginLeft: 10,
    height: 40,
    padding: 10
  },
  text: {
    alignSelf: 'center'
  }
}

export default MyInput