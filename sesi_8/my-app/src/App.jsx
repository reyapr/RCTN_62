import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Pokemon from './components/Pokemon'
import { Title, Button } from './components/StyledComponents'
import { useState } from 'react';
import Counter from './components/Counter';

const anchorStyles = {
  color: 'aliceblue',
  backgroundColor: 'green'
}

function App() {
  const [showTitle, setShowTitle] = useState(true)
  
  return (
    <div className="App">
      <Title show>Styling on React</Title>
      <div style={{
        display: 'flex'
      }}>
        <User/>
        <Pokemon/>
      </div>
      <hr />
      <Title fontSize={'40px'} show={showTitle}>Counter</Title>
      <Counter/>
      <Button onClick={() => {
        setShowTitle(!showTitle)
      }}>{ showTitle ? 'Hide' : 'Show' }</Button>
    </div>
  );
}

export default App;
