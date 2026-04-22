import { Environment, OrbitControls } from "@react-three/drei"
import { DS } from "./3DS";

export const Experience = ({ onAboutClick }: { onAboutClick: () => void }) => {
    return (
        <>
            <Environment preset="sunset" backgroundIntensity={0.3}/>
            <hemisphereLight intensity={0.5} />

            
            
            <OrbitControls target={[0, 1, 0]} />
            <CameraLogger />
            <DS onAboutClick={onAboutClick} />
        </>
    );
}


// DELETE AFTER YOU FIND RIGHT COORDINATES 

import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

function CameraLogger() {
  const { camera, gl } = useThree()

  useEffect(() => {
    const controls = (gl as any).__r3f?.controls

    const log = () => {
      console.log('position:', camera.position.toArray())
      if (controls) {
        console.log('target:', controls.target.toArray())
      }
    }

    window.addEventListener('click', log) // click anywhere to log
    return () => window.removeEventListener('click', log)
  }, [camera, gl])

  return null
}