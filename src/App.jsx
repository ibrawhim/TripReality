import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  const routes = [
    {path:'/', component: Home}
  ]
 
  return (
    <>
    <Navbar/>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
    </>
  )
}

export default App
