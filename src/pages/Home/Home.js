import React from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ILLUSTRATION from "../../assets/ILLUSTRATION.png";
import Button from "../../components/Button/Button";
import Group117 from "../../assets/Group 117.png";
const Home = () => {
  return (
    <>
      <section className="home-wrapper">
        <SearchBar placeholder="Search a Term | Topic" />
        <div className="mobile-left-panel-header">
          <div className="claim-quote">Claim a Free Quote</div>
          <h1 className="get-started--text">
            <span className="span-get-started--text">Get started</span>
            &nbsp;on fulfilling your Dubai or UAE dream.
          </h1>
        </div>
        <section className="get-started-wrapper">
          <div className="left-panel">
            <div className="left-panel-header">
              <div className="claim-quote">Claim a Free Quote</div>
              <h1 className="get-started--text">
                <span className="span-get-started--text">Get started</span>
                &nbsp;on fulfilling your Dubai or UAE dream.
              </h1>
            </div>
            <div className="uae-offshore--text">UAE & Offshore Company</div>
            <div className="uae-subtext">
              We provide you with information about UAE or Offshore Company
              Registration & help you setup your company with a bank account and
              visas.
            </div>
            <div className="get-started--footer-action">
              <Button
                size="lg"
                color="primary"
                content="Start a Company"
                joinFrom="right"
              />
              <Button
                size="lg"
                color="outline"
                content="Renew a Company"
                joinFrom="left"
              />
            </div>
          </div>
          <div className="right-panel">
            <img src={ILLUSTRATION} className="study-image" alt="studying" />
          </div>
        </section>
        <section className="watch-video">
          <div className="watch-video-content">
            Watch the video about UAE or Offshore Company Registration &nbsp;
            <span className="play-icon">
              <img src={Group117} alt="play-icon" />
            </span>
          </div>
        </section>
      </section>
    </>
  );
};
export default Home;
