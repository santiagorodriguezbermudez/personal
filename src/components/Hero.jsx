import ReactRotatingText from 'react-rotating-text';
import React from 'react';
// import figure1 from '../assets/images/figure1.svg';
// import figure2 from '../assets/images/figure2.svg';
// import figure3 from '../assets/images/figure3.svg';
// import figure4 from '../assets/images/figure4.svg';
// import figure5 from '../assets/images/figure5.svg';
// import figure6 from '../assets/images/figure6.svg';
// import figure7 from '../assets/images/figure7.svg';
// import figure8 from '../assets/images/figure8.svg';
// import figure9 from '../assets/images/figure9.svg';
// import figure10 from '../assets/images/figure10.svg';
import github from '../assets/images/github.svg';
import twitter from '../assets/images/twitter.svg';
import linkedin from '../assets/images/linkedin.svg';
import medium from '../assets/images/medium.svg';

const Hero = () => {
  const arrayText = ['a builder', 'an entrepreneur', 'a developer', 'a husband', 'creative', 'passionate', 'empathetic', 'disciplined'];

  return (
    <header className="hero shadow">
      <h1 className="main-title">Hi there, I&apos;m Santiago.</h1>
      <h1 className="main-title">
        I&apos;m
        {' '}
        <ReactRotatingText items={arrayText} />
        .
      </h1>
      <h1 className="secondary-title">
        Nice to meet you.
        <br />
        <span className="font-bold">I love building products. </span>
        Reach out if you think I can help you building one.
      </h1>

      <p className="connect-text">
        Reach out! Let&apos;s connect on social media.
      </p>

      <div className="icon-container">
        <a href="https://github.com/santiagorodriguezbermudez"><img src={github} alt="github" className="header-icon" /></a>
        <a href="https://linkedin.com/in/srba"><img src={linkedin} alt="linkedin" className="header-icon" /></a>
        <a href="https://medium.com/@srba87"><img src={medium} alt="medium" className="header-icon" /></a>
        <a href="https://twitter.com/srba87"><img src={twitter} alt="twitter" className="header-icon" /></a>
      </div>
    </header>
  );
};

export default Hero;
