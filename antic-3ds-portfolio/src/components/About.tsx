import "./About.css";
import closeIcon from "../assets/close-image.svg";

export const About = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="about-overlay" onClick={onClose}>
      <div className="about-box" onClick={(e) => e.stopPropagation()}>
        <div className="about-details">
            <h2 className='header'>About Me</h2>

            <div className="about-wrapper">
                <div className="about-body">
                    <img src="Shinchan.gif" className='gif'></img>

                    <p>Hello, I'm Antic and this is my interactive portfolio site. I'm a recent computer science graduate with a passion for tech and building things. In my spare time I watch football and play video games. I also like working on cool projects like this website and a bunch of other stuff I have an interest in</p>
                    
                    <h1>Portfolio credits</h1>
                    <p>Used Andrew Woans tutorials on his room portfolio to teach me blender and how I can make a site like this</p>
                    <p>Modified new 3DS ll blender model from Manuel W.</p>
                    <p>Music is 3ds nintendo settings</p>
                </div>
            </div>
            
        </div>
      </div>
      <button onClick={onClose} className="button"><img src={ closeIcon } alt="" /></button>
    </div>
  );
};