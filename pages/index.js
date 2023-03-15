import React from 'react';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default function Home() {
  

  return (
        <div>
          
      <NavBar/>
      <HomePage />
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Footer/>

        </div>
  );
}
