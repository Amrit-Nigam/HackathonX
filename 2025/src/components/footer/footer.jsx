import React, { useState, useEffect, useCallback, useRef } from 'react';
import './footer.css';

const ScrambleText = ({ text }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const scramble = useCallback(() => {
      let iterations = 0;
      const maxIterations = 10;
      const interval = setInterval(() => {
          setScrambledText(prev =>
              text.split('').map((char, index) => {
                  if (char === " ") return " ";
                  if (iterations > index) return char;
                  return characters[Math.floor(Math.random() * characters.length)];
              }).join("")
          );

          iterations += 1 / 3;
          if (iterations >= maxIterations) {
              clearInterval(interval);
              setScrambledText(text);
          }
      }, 30);

      return () => clearInterval(interval);
  }, [text, characters]);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setIsVisible(entry.isIntersecting);
          },
          { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => {
          if (ref.current) observer.unobserve(ref.current);
      };
  }, []);

  useEffect(() => {
      if (isVisible) {
          scramble();
      }
  }, [isVisible, scramble]);

  return (
      <span ref={ref} className="scramble-text">
          {scrambledText}
      </span>
  );
};

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://apply.devfolio.co/v2/sdk.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <footer>
      <div className="outlaws">
        <div className="outlaws-image">
          <img src="./footer-images/no_outlaw-cropped.svg" alt="text" />
            <h1><ScrambleText text = "Code The Journey"/></h1>
        </div>
      </div>
      <div className="everything" data-aos="fade-up" data-aos-once = "true" data-aos-duration = "300">
        <div className="M">
          <img src="./footer-images/MATURE_17.svg" alt="MATURE" />
        </div>
        <div className="logo" >
          <div className="save-the-date" data-aos="fade-down" data-aos-duration = "500" data-aos-delay = "300">SAVE THE DATE</div>
          <div className="april-dates"data-aos="fade-up" data-aos-duration = "500" data-aos-delay = "450">APRIL 12 | 13</div>

          <div
            className="apply-button"
            data-hackathon-slug="gajshield-kjsse-hack8"
            data-button-theme="dark-inverted"
          ></div>
          <div className="social-icons" data-aos = "zoom-up" data-aos-duration = "500" data-aos-delay = "300">
            <a href="https://www.facebook.com/kjscecodecell/" target="_blank" rel="noopener noreferrer">
              <img src="./footer-images/facebook.svg" alt="Facebook" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://x.com/kjsce_codecell" target="_blank" rel="noopener noreferrer">
              <img src="./footer-images/twitter.svg" alt="Twitter" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://www.instagram.com/kjsce_codecell/" target="_blank" rel="noopener noreferrer">
              <img src="./footer-images/instagram.svg" alt="Instagram" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://www.youtube.com/kjscecodecell" target="_blank" rel="noopener noreferrer">
              <img src="./footer-images/youtube.svg" alt="YouTube" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://www.linkedin.com/company/kjscecodecell/" target="_blank" rel="noopener noreferrer">
              <img src="./footer-images/linkedin.svg" alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
            </a>
          </div>
          <div >
            <p>Made with <span>🤍</span> by <a href="https://www.kjssecodecell.com/" target="_blank" rel="noopener noreferrer">KJSSE CodeCell</a></p>
          </div>

        </div>
        <div className="G">
          <img src="./footer-images/MATURE_17.svg" alt="MATURE" />
        </div>
        <div className="cclogo">
          <img src="./footer-images/Logo.svg" alt="cclogo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;