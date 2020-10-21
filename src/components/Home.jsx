import React from 'react';
import Hero from './Hero';
import About from './About';
import ProjectList from '../containers/ProjectList';
import ContactForm from './ContactForm';

const Home = () => (
  <div className="main">
    <Hero />
    <ProjectList />
    <About />
    <ContactForm />
  </div>
);

export default Home;
