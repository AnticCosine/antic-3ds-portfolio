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

                    <div className="about-img"><img src="Shinchan.gif" className='gif'></img></div>

                    <div className="about-card">
                      <div className="section-title">About</div>
                      <p className="about-text">
                        Hello, I'm Antic and this is my 3DS portfolio site. I'm a recent computer science graduate with a passion for tech and building things like this website.
                      </p>
                    </div>

                    <div className="about-card">
                      <div className="section-title">Credits</div>
                      <ul className="credits-list">
                        <li className="credit-item">
                          <div className="credit-dot">1</div>
                          <span>Andrew Woan's room portfolio tutorials helped me learn Blender and build this site</span>
                        </li>
                        <li className="credit-item">
                          <div className="credit-dot">2</div>
                          <span>3D Blender model based on New 3DS XL by Manuel W. (modified for this project)</span>
                        </li>
                        <li className="credit-item">
                          <div className="credit-dot">3</div>
                          <span>Music: Nintendo Settings, 1AM & 5PM Animal Crossing New Leaf, Bubblegum K.K. & January 2015 Nintendo eShop Music</span>
                        </li>
                      </ul>
                    </div>

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


                <div className="project-card">
                  <div className="card-img">
                    <img src="sleep-dex.png" alt="Sleep Dex screenshot" />
                    
                  </div>
                  <div className="card-info">
                    <div className="card-title">Sleep Dex</div>
                    <div className="card-desc">
                      A Pokemon Sleep companion tool for keeping track of sleep styles, recipes and ingredients. Can also upload screenshots of your inventory which updates ingredients list to see what recipes you can cook.
                    </div>
                    <div className="card-chips">
                      <span className="chip">Web App</span>
                      <span className="chip">Angular</span>
                      <span className="chip">Node.js</span>
                      <span className="chip">Express</span>
                      <span className="chip">MongoDB</span>
                      <span className="chip">Tesseract.js</span>
                    </div>
                    <div className="card-links">
                      <a className="link-btn" href="https://sleep-dex.com/" target="_blank">Live ↗</a>
                      <a className="link-btn" href="https://github.com/AnticCosine/sleep-dex" target="_blank">GitHub ↗</a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <div className="card-img">
                    <img src="ozbot.png" alt="OzBot screenshot" />
                    
                  </div>
                  <div className="card-info">
                    <div className="card-title">OzBot</div>
                    <div className="card-desc">
                      A Discord Bot which notifies users about trending deals from the website OzBargain. Users can filter by specific category of items and specific upvotes the post must have to qualify as a deal.
                    </div>
                    <div className="card-chips">
                      <span className="chip">Discord Bot</span>
                      <span className="chip">JavaScript</span>
                      <span className="chip">Discord.js</span>
                      <span className="chip">node-fetch</span>
                      <span className="chip">cheerio</span>
                    </div>
                    <div className="card-links">
                      <a className="link-btn" href="https://github.com/AnticCosine/oz-bot" target="_blank">GitHub ↗</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
        </div>
        <button onClick={handleClose} className="button"><img src={ closeIcon } alt="" /></button>
      </div>
      
    </div>
  );
};