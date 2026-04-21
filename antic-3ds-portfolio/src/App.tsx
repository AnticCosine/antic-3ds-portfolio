import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'

function App() {

  return (
    <Canvas>
      <Experience />
    </Canvas>
  )
}

export default App
