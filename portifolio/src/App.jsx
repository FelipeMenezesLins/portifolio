import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/banner.jsx'
import Conteudo from './components/conteudo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Banner/>
     <Conteudo/>
    </>
  )
}

export default App
