import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'
import { useEffect, useRef, useState } from 'react'
import sunIcon from "./assets/sunset-image.svg";
import moonIcon from "./assets/moon-image.svg";
import { About, Projects } from './components/Popups';

function App() {
  const tracks = [
    {
      src: "/settingsMusic.mp3",
      title: "Settings Music",
      color: "#c0504d"
    },
    {
      src: "/1AMACNL.mp3",
      title: "1 A.M. ACNL",
      color: "#62bb47"
    },
    {
      src: "/Bubblegum.mp3",
      title: "Bubblegum K.K.",
      color: "#ffc5e6"
    },
    {
      src: "/eShopMusic2015.mp3",
      title: "eShop Music",
      color: "#f67412"
    },
    {
      src: "/5PMACNL.mp3",
      title: "5 P.M. ACNL",
      color: "#62bb47"
    }
  ]


  const [paused, setPaused] = useState(true);
  const [darkMode, setDarkMode] = useState(() => window.matchMedia?.("(prefers-color-scheme: dark)").matches);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = tracks[currentTrack].src;
    audio.load();

    const handleEnded = () => {
      setCurrentTrack((prev) => (prev + 1) % tracks.length);
    };

    audio.addEventListener("ended", handleEnded);

    if (!paused) {
      audio.play().catch(() => {});
    }

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack]);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (paused) {
      audio.play();
    } else {
      audio.pause();
    }

    setPaused(!paused);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <div className='music-player'>
        <div
          className="music-player-art"
          style={{
            background: `${tracks[currentTrack].color}`
          }}
        />
        <div className="music-player-info">
          <div className="music-player-title">{tracks[currentTrack].title}</div>
          <div className="music-player-sub">Antics Playlist</div>
        </div>
        <button className="music-player-btn" onClick={toggle}>
          {paused
            ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2.5L8 6l-6 3.5V2.5z" fill="#f2ebac"/></svg>
            : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="2" y="1.5" width="3" height="9" rx="1" fill="#f2ebac"/><rect x="7" y="1.5" width="3" height="9" rx="1" fill="#f2ebac"/></svg>
          }
        </button>
        <button className="next-music-btn" onClick={nextTrack}>
          {<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 2.5L9 6l-6 3.5V2.5z" fill="#f2ebac"/><rect x="9.5" y="2.5" width="1" height="7" fill="#f2ebac"/></svg>}
        </button>
      </div>

      <button onClick={() => setDarkMode(!darkMode)} className="theme-button">
        <img
          src={darkMode ? moonIcon : sunIcon}
          className="theme-icon"
          alt="theme toggle"
        />
      </button>

      <audio ref={audioRef} loop />
      
      <Canvas camera={{ position: isMobile ? [-0.0031266243277873504, 3.908082291118143, 2.8956510541614993] : [-0.003756461201234294, 3.1576242011477875, 2.0601095691442692], fov: 70 } }>
        <Experience onAboutClick={() => setShowAbout(true)} onProjectsClick={() => setShowProjects(true)} isDarkMode={darkMode} isMobile={isMobile}/>
      </Canvas>

      {showAbout && <About onClose={() => setShowAbout(false)} />}
      {showProjects && <Projects onClose={() => setShowProjects(false)} />}
    </div>
  )
}

export default App
