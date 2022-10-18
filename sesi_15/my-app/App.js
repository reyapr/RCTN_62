import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyInput from './components/MyInput';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <MyInput/>
      </View>
      
      <View style={styles.box}>
        <View style={[styles.box1, styles.defaultBox]}/>
        <View style={[styles.box2, styles.defaultBox]}>
          <Text>Test</Text>
        </View>
        <View style={[styles.box3, styles.defaultBox]}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45
  },
  input: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'purple'
  },
  defaultBox: {
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 1
  },
  box1: {
    backgroundColor: 'red' 
  },
  box2: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: 'green'
  }
});
