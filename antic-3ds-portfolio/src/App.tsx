import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'

function App() {

  return (
    <Canvas camera={{ position: [ 0.04485357540947098, 2.7383025945742783, 1.5294439829711612 ] }}>
      <Experience />
    </Canvas>
  )
}

export default App
