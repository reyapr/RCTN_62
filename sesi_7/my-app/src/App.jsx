import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import ErrorBoundary from './components/ErrorBoundary';
import LearnMounting from './components/LearnMounting';
import User from './components/User';
import UserFn from './components/UserFn.jsx';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      showUserFn: true
    }
  }
  
  increment1 = () => {
      this.setState({ num1: this.state.num1 + 1 })
  }
  
  increment2 = () => {
    this.setState({ num2: this.state.num2 + 1 })
  }
  
  unshowUserFn = () => {
    
    this.setState({
      showUserFn: false
    })
  }
  
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <LearnMounting/>
          <User/>
          <hr />
          <button onClick={this.unshowUserFn}>unshow user fn</button>
          {this.state.showUserFn && <UserFn/>}
          <hr />
          <h1>Learn Updating React</h1>
          <Counter/>
          <hr />
          <h3>Counter 1</h3>
          <Counter1 num={this.state.num1} increment={this.increment1}/>
          <br />
          <h3>Counter 2</h3>
          <Counter2 num={this.state.num2} increment={this.increment2}/>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
