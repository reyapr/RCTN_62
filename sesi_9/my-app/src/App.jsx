import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/About/AboutCompany';
import AboutMe from './pages/About/AboutMe';
import AboutAnything from './pages/About/AboutAnything';
import Member from './pages/Member';
import MemberDetails from './pages/Member/MemberDetails';
import Item from './pages/Item';
import ItemDetails from './pages/Item/ItemDetails';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}>
          <Route path='company' element={<AboutCompany/>}/>
          <Route path='me' element={<AboutMe/>}/>
        </Route>
        <Route path='/about/anything' element={<AboutAnything/>}/>
        <Route path='/member' element={<Member/>}/>
        <Route path='/member/:name' element={<MemberDetails/>}/>
        <Route path='/item' element={<Item/>}>
          <Route path=':id' element={<ItemDetails/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
