import React from 'react'
import Fizzbuzz from './Fizzbuzz'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fizzbuzz />
    </>
  )
}

export default App
