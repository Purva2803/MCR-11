import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Movies } from './components/Movies'
import { Stared } from './pages/Stared'
import {NavLink,Route,Routes} from 'react-router-dom'
import {Header} from './components/Header'
import { SingleMovie } from './pages/SingleMovie'
import { AddMovie } from './components/AddMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>  
    <div>
      <Header />
    
    </div>

    <div>
    <Routes>
    <Route path="/" element={<Movies />} />
    <Route path="/stared" element={<Stared />} />
    <Route path="/movies/:id" element={<SingleMovie />} />
    <Route path="*" element={<h1>Not Found</h1>} />
    <Route path="/addMovies" element={<AddMovie/>} />
    </Routes>
    </div>




    </div>

  )
}

export default App
