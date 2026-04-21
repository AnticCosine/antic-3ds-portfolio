import { OrbitControls } from "@react-three/drei"
import { DS } from "./3ds";

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls />
            <DS />
        </>
    );
}