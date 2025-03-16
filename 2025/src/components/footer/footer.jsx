import React, { useEffect } from 'react';
import './footer.css';

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
<<<<<<< HEAD
          <img src="./footer-images/no_outlaw-cropped.svg" alt="text" />
=======
          <img src="./footer/no_outlaw-cropped.svg" alt="text" />
>>>>>>> 10518f8 (fix: footer import path (#109))
          <h1>Code The Journey</h1>
        </div>
      </div>
      <div className="everything">
        <div className="M">
<<<<<<< HEAD
          <img src="./footer-images/MATURE_17.svg" alt="MATURE" />
=======
          <img src="./footer/MATURE_17.svg" alt="MATURE" />
>>>>>>> 10518f8 (fix: footer import path (#109))
        </div>
        <div className="logo">
          <div className="save-the-date">SAVE THE DATE</div>
          <div className="april-dates">APRIL 12 | 13</div>

          <div
            className="apply-button"
            data-hackathon-slug="gajshield-kjsse-hack8"
            data-button-theme="dark-inverted"
          ></div>
          <div className="social-icons">
            <a href="https://www.facebook.com/kjscecodecell/" target="_blank" rel="noopener noreferrer">
<<<<<<< HEAD
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
=======
              <img src="./footer/facebook.svg" alt="Facebook" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://x.com/kjsce_codecell" target="_blank" rel="noopener noreferrer">
              <img src="./footer/twitter.svg" alt="Twitter" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://www.instagram.com/kjsce_codecell/" target="_blank" rel="noopener noreferrer">
              <img src="./footer/instagram.svg" alt="Instagram" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://www.youtube.com/kjscecodecell" target="_blank" rel="noopener noreferrer">
              <img src="./footer/youtube.svg" alt="YouTube" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://www.linkedin.com/company/kjscecodecell/" target="_blank" rel="noopener noreferrer">
              <img src="./footer/linkedin.svg" alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
>>>>>>> 10518f8 (fix: footer import path (#109))
            </a>
          </div>
          <p>Made with <span>🤍</span> by <a href="https://www.kjssecodecell.com/" target="_blank" rel="noopener noreferrer">KJSSE CodeCell</a> </p>
        </div>
        <div className="G">
<<<<<<< HEAD
          <img src="./footer-images/MATURE_17.svg" alt="MATURE" />
        </div>
        <div className="cclogo">
          <img src="./footer-images/Logo.svg" alt="cclogo" />
=======
          <img src="./footer/MATURE_17.svg" alt="MATURE" />
        </div>
        <div className="cclogo">
          <img src="./footer/Logo.svg" alt="cclogo" />
>>>>>>> 10518f8 (fix: footer import path (#109))
        </div>
      </div>
    </footer>
  );
};

export default Footer;