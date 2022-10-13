import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import MyButton from './components/MyButton';

export default function App() {
  const [counter, setCounter] = useState(5)
  
  const increment = () => {
    setCounter(counter + 1)
  }
  
  const decrement = () => {
    setCounter(counter - 1)
  }
  
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
        style={styles.reactImage}
      />
      <Text>Learn React Native</Text>
      <StatusBar style="auto" />
      <View style={styles.counter}>
        <Text style={{ fontSize: 35}}>
          {counter}
        </Text>
        <View style={styles.buttonPosition}>
          <MyButton 
            onPress={increment} 
            style={[styles.defaultButton, styles.plusButton]}
          >
            <Text style={{color: 'white'}}>+</Text>
          </MyButton> . 
          <MyButton 
            onPress={decrement} 
            style={[styles.defaultButton, styles.minusButton]}
          >
            <Text style={{color: 'white'}}>-</Text>
          </MyButton>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  reactImage: {
    width: 100,
    height: 100
  },
  counter: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultButton: {
    borderRadius: 3,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusButton: {
    backgroundColor: 'green',
  },
  minusButton: {
    backgroundColor: 'red',
  },
  buttonPosition: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-around'
  }
};
