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
      <div className="flex h-screen w-full flex-wrap fixed content-start">
        <div className="w-1/6 max-sm:w-[40%] max-sm:z-100 max-sm:absolute h-full">
        <Navbar />
        </div>
        <div className="grow overflow-scroll overflow-x-hidden h-4/4">
        <Content />
        </div>
      </div>
    </>
  )
}

export default App
