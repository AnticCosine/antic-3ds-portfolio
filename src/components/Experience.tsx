import { Environment, OrbitControls } from "@react-three/drei"
import { DS } from "./3DS";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

type ExperienceProps = {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  isDarkMode: boolean;
  isMobile: boolean;
};
// sunset city 

export const Experience = ({ onAboutClick, onProjectsClick, isDarkMode, isMobile }: ExperienceProps) => {
    return (
        <>
            <Environment preset={isDarkMode ? "sunset" : "forest"} backgroundIntensity={0.3}/>
            <hemisphereLight intensity={1}  />
            <OrbitControls target={isMobile ? [-0.00550419168475848, 1.0751826424780047, -0.2584293814602453] : [-0.00550419168475848, 1.0751826424780047, -0.2584293814602453]}/>
            <DS onAboutClick={onAboutClick} onProjectsClick={onProjectsClick}/>
        </>
    );
}

