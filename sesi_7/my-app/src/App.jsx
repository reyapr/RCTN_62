import './App.css';
import Counter from './components/Counter';
import LearnMounting from './components/LearnMounting';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <LearnMounting/>
      <User/>
      <hr />
      <h1>Learn Updating React</h1>
      <Counter/>
    </div>
  );
}

export default App;
