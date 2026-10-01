import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="App">
        <Navbar/>
        <h1>TripReality</h1>
      </section>
    </>
  )
}

export default App
