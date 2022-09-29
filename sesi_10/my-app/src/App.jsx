import './App.css';
import CounterClass from './components/CounterClass';
import CounterFn from './components/CounterFn';

function App() {
  return (
    <div className="App">
      <CounterClass/>
      <br />
      <hr />
      <CounterFn/>
    </div>
  );
}

export default App;
