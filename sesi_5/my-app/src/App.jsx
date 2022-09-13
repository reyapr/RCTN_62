import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <User/>
      <hr />
      <Counter/>
    </div>
  );
}

export default App;
