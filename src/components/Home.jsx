import React from 'react';
import Hero from './Hero';
import About from './About';
import ProjectList from '../containers/ProjectList';

const Home = () => (
  <div className="main">
    <Hero />
    <ProjectList />
    <About />
  </div>
);

export default Home;
