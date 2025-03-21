
import "./flashback.css";

import '../sections/flashback.css';


const FlashBack = () => {
  return (
    <section className="flashback" id="flashbacks">
      <img src="/assets/AboutUsRightStreak.svg" className="AboutUsRightStreak" />
      <img src="/assets/AboutUsLeftStreak.svg" className="AboutUsLeftStreak" />

      <header className="flashback-header">
        <h1 data-aos="fade-down" data-aos-duration = "500" className="flashback-header-text">FLASHBACK</h1>
      </header>

      <div data-aos="fade-up" data-aos-duration = "500" data-aos-delay = "250" className="flashback-video">
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/MsIwzZziLfs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <img src="/assets/flashback-border.svg" className="iframe-border" />
        </div>
      </div>
    </section>
  );
};

export default FlashBack;