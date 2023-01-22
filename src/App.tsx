import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Upload from './Upload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Upload />      
  )
}

export default App
