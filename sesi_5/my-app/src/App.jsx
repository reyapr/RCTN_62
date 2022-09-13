import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Counter from './components/Counter'
import Hero from './components/Hero';
import HeroName from './components/HeroName';

function App() {
  return (
    <div className="App">
      <User/>
      <hr />
      <Counter/>
      <hr />
      <Hero/>
      <hr />
      <HeroName title={'test-123'}/>
      <HeroName description="Blalalalalal" />
    </div>
  );
}

export default App;
