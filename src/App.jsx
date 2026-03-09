import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LinkContainer from './components/LinkContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LinkContainer />
    </div>
  )
}

export default App
