import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import User from './components/User'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App
