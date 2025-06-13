import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex gap-[2%] h-screen w-full flex-wrap fixed content-start">
        <div class="w-1/12 border-2 h-full">
        <Navbar />
        </div>
        <div class="grow overflow-scroll border-2 h-4/4">
        <Content />
        </div>
      </div>
    </>
  )
}

export default App
