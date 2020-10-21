import React from 'react';
import Hero from './Hero';
import ProjectList from '../containers/ProjectList';

const Home = () => (
  <div className="main">
    <Hero />
    <ProjectList />
    This is Home.
  </div>
);

export default Home;
