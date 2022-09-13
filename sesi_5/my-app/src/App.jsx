import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Hero from './components/Hero';
import HeroName from './components/HeroName';
import CounterPage from './components/pages/CounterPage';

function App() {
  return (
    <div className="App">
      <User/>
      <hr />
      <CounterPage/>
      <hr />
      <Hero/>
      <hr />
      <HeroName title={'test-123'}/>
      <HeroName description="Blalalalalal" />
    </div>
  );
}

export default App;
