import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'
import { useRef, useState } from 'react'
import muteIcon from "./assets/muted-image.svg";
import unmuteIcon from "./assets/unmuted-image.svg";
import sunIcon from "./assets/sunset-image.svg";
import moonIcon from "./assets/moon-image.svg";
import { About, Projects } from './components/Popups';

function App() {
  const [muted, setMuted] = useState(true);
  const [darkMode, setDarkMode] = useState(() => window.matchMedia?.("(prefers-color-scheme: dark)").matches);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const toggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }

    muted ? audioRef.current?.play() : audioRef.current?.pause()
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button onClick={() => setDarkMode(!darkMode)} className="theme-button">
        <img
          src={darkMode ? moonIcon : sunIcon}
          className="theme-icon"
          alt="theme toggle"
        />
      </button>
      <button onClick={toggle} className="audio-button">
        <img
          src={muted ? muteIcon : unmuteIcon}
          alt={muted ? "Muted" : "Unmuted"}
          className="audio-icon"
        />
      </button>

      <audio ref={audioRef} loop>
        <source src="/settingsMusic.mp3" type="audio/mpeg" />
      </audio>

      <Canvas camera={{ position: [0.04485357540947098, 2.7383025945742783, 1.5294439829711612] }}>
        <Experience onAboutClick={() => setShowAbout(true)} onProjectsClick={() => setShowProjects(true)} />
      </Canvas>

      {showAbout && <About onClose={() => setShowAbout(false)} />}
      {showProjects && <Projects onClose={() => setShowProjects(false)} />}
    </div>
  )
}

export default App
