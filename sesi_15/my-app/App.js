import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import MyInput from './components/MyInput';
import Users from './components/Users';
import UsersFlatList from './components/UsersFlatList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{height: 400}}>
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
      
      {/* <View>
        <Text 
          style={{ 
            fontSize: 30, 
            fontWeight: '700',
            alignSelf: 'center'
          }}
        >
            Flat List
        </Text>
        <UsersFlatList/>
      </View> */}
      
      <ScrollView>
        <View>
          <Users/>
        </View>
      </ScrollView>
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
