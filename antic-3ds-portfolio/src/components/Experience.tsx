import { Environment, OrbitControls } from "@react-three/drei"
import { DS } from "./3DS";

type ExperienceProps = {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  isDarkMode: boolean;
};
// sunset city 
export const Experience = ({ onAboutClick, onProjectsClick, isDarkMode }: ExperienceProps) => {
    return (
        <>
            <Environment preset={isDarkMode ? "sunset" : "forest"} backgroundIntensity={0.3}/>
            <hemisphereLight intensity={1}  />
            <OrbitControls target={[0, 1, 0]}/>
            <DS onAboutClick={onAboutClick} onProjectsClick={onProjectsClick}/>
        </>
    );
}


