import React from 'react'
import reactIcon from '../assets/images/react.svg';
import bootstrapIcon from '../assets/images/bootstrap.svg';
import chartIcon from '../assets/images/chart.svg';
import cssIcon from '../assets/images/css.svg';
import htmlIcon from '../assets/images/html-5.svg';
import javascriptIcon from '../assets/images/javascript.svg';
import remoteIcon from '../assets/images/remote.svg';
import rubyIcon from '../assets/images/ruby.svg';
import teamIcon from '../assets/images/team.svg';
import moneyIcon from '../assets/images/money.svg';
import railsIcon from '../assets/images/rails.png';
import github from '../assets/images/github.svg';
import twitter from '../assets/images/twitter.svg';
import linkedin from '../assets/images/linkedin.svg';
import medium from '../assets/images/medium.svg';

const About = () => (
  <section className="about-myself" id="about">
    <div className="self-description">
      <h2>About myself</h2>
      <h5>
        I&apos;m passionate about building products. I&apos;ve worked on startups and founded companies as well. I recently studied software development to create even better products.
      </h5>
      <div className="icon-container">
        <a href="https://github.com/santiagorodriguezbermudez"><img src={github} alt="github" className="header-icon" /></a>
        <a href="https://linkedin.com/in/srba"><img src={linkedin} alt="linkedin" className="header-icon" /></a>
        <a href="https://medium.com/@srba87"><img src={medium} alt="medium" className="header-icon" /></a>
        <a href="https://twitter.com/srba87"><img src={twitter} alt="twitter" className="header-icon" /></a>
      </div>
    </div>

    <div className="information">
      <div className="information-category">
        <h5>Languages</h5>
        <div className="category-icons">
          <div className="information-item">
            <img className="item" src={htmlIcon} alt="info-item" />
            <span>HTML</span>
          </div>
          <div className="information-item">
            <img className="item" src={cssIcon} alt="info-item" />
            <span>CSS</span>
          </div>
          <div className="information-item">
            <img className="item" src={javascriptIcon} alt="info-item" />
            <span>JavaScript</span>
          </div>
          <div className="information-item">
            <img className="item" src={rubyIcon} alt="info-item" />
            <span>Ruby</span>
          </div>
        </div>
      </div>

      <div className="information-category">
        <h5>Frameworks</h5>
        <div className="category-icons">
          <div className="information-item">
            <img className="item" src={reactIcon} alt="info-item" />
            <span>React and Redux</span>
          </div>
          <div className="information-item">
            <img className="item" src={bootstrapIcon} alt="info-item" />
            <span>Bootstrap</span>
          </div>
          <div className="information-item">
            <img className="item" src={railsIcon} alt="info-item" />
            <span>Ruby on Rails</span>
          </div>
        </div>
      </div>

      <div className="information-category">
        <h5>Skills</h5>
        <div className="category-icons">
          <div className="information-item">
            <img className="item" src={remoteIcon} alt="info-item" />
            <span>Remote Exp</span>
          </div>
          <div className="information-item">
            <img className="item" src={moneyIcon} alt="info-item" />
            <span>Entrepreneur</span>
          </div>
          <div className="information-item">
            <img className="item" src={teamIcon} alt="info-item" />
            <span>Team collaboration</span>
          </div>
          <div className="information-item">
            <img className="item" src={chartIcon} alt="info-item" />
            <span>Business Strategy</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
