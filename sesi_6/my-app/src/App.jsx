import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'
import Counter from './components/Counter';

function Header() {
  return (
    <div>
      <h1>Learn React</h1>
    </div>
  )
}

function Content() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi cum dicta facilis praesentium quo fugit ea vero, mollitia obcaecati pariatur, nam consequatur, culpa voluptatibus fugiat itaque. Eum, odit blanditiis!</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <p>&copy; Hacktiv8 - 2022</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
      <hr />
      <Content/>
      <hr />
      <Footer/>
      <hr />
      <Counter initNum={10}/>
    </div>
  );
}

export default App;
