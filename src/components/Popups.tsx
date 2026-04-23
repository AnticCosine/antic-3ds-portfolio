import "./Popups.css";
import gsap from "gsap";
import closeIcon from "../assets/close-image.svg";
import { useEffect, useRef } from "react";

export const About = ({ onClose }: { onClose: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(boxRef.current, { opacity: 0, scale: 0 });
    gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "auto" });

    gsap.to(overlayRef.current, { opacity: 1, duration: 0.5 });
    gsap.to(boxRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(2)",
    });
  }, []);

  const handleClose = () => {
    
    gsap.to(boxRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "back.in(2)",
      onComplete: onClose,
    });
  };

  return (
    <div ref={overlayRef} className={`about-overlay`} onClick={handleClose}>
      <div ref={boxRef} className="about-box" onClick={(e) => e.stopPropagation()}>
        <div className="details">
            <h2 className='header'>About Me</h2>

            <div className="about-wrapper">
                <div className="about-body">
                    <img src="Shinchan.gif" className='gif'></img>
                    <h1 className="portfolio-title">About</h1>
                    <p className="about-text">Hello, I'm Antic and this is my 3DS portfolio site. I'm a recent computer science graduate with a passion for tech and building things like this website.</p>
                    <div className="divider"></div>
                    <h1 className="portfolio-title">Credits</h1>
                    <ul className="credits-list">
                      <li>Andrew Woan's room portfolio tutorials helped me learn blender and build this site</li>
                      <li>3D blender model based off New 3DS XL model by Manuel W. (Modified for this project)</li>
                      <li>Music: Nintendo Settings, 1AM & 5PM Animal Crossing New Leaf, Bubblegum K.K. & January 2015 Nintendo eShop Music</li>
                    </ul>
                </div>
            </div>
            
        </div>
        <button onClick={handleClose} className="button"><img src={ closeIcon } alt="" /></button>
      </div>
      
    </div>
  );
};



export const Projects = ({ onClose }: { onClose: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(boxRef.current, { opacity: 0, scale: 0 });
    gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "auto" });

    gsap.to(overlayRef.current, { opacity: 1, duration: 0.5 });
    gsap.to(boxRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(2)",
    });
  }, []);

  const handleClose = () => {
    
    gsap.to(boxRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "back.in(2)",
      onComplete: onClose,
    });
  };

  return (
    <div ref={overlayRef} className={`about-overlay`} onClick={handleClose}>
      <div ref={boxRef} className="about-box" onClick={(e) => e.stopPropagation()}>
        <div className="details">
            <h2 className='header'>Projects</h2>

            <div className="projects-wrapper">
              <div className="projects-body">
                <div className="pokemon-sleep">
                  <a href="https://sleep-dex.com/" target="_blank"><img src="sleep-dex.png" alt="" /></a>
                  <h1>Sleep Dex</h1>
                  <p>A Pokemon Sleep Recipe tracker to keep track of unlocked and cookable recipes in the Pokemon sleep game. Can also upload screenshots of your inventory to update ingredient list to see cookable recipes.</p>
                  <p>Skills: Angular, Node.js, Express, MongoDB, Tesseract.js</p>
                </div>
                <div className="discord">
                  <a href="https://github.com/AnticCosine/oz-bot" target="_blank"><img src="ozbot.png" alt="" /></a>
                  <h1>OzBot</h1>
                  <p>A Discord Bot which notifies users on trending deals from the website OzBargain. Users can filter by specific category of items and specific upvotes the post must have to qualify as a deal. </p>
                  <p>Skills: JavaScript, Discord.js, node-fetch, cheerio</p>
                </div>
              </div>
            </div>
            
        </div>
        <button onClick={handleClose} className="button"><img src={ closeIcon } alt="" /></button>
      </div>
      
    </div>
  );
};