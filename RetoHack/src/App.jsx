import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Registrate from './components/Registrate'
import A19 from './components/A19'


const App = () => {

  return (
    <div >
      <div >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Registrate" element={<Registrate />} />
            <Route path="/A19" element={<A19 />} />
          </Routes>
        </Router>

      </div>
    </div>



  )
}

export default App
