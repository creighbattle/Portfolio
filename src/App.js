import React from 'react';
import './App.css';
import Nav from './components/Nav';
import HeadContent from './components/HeadContent';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>

        <Nav/>
        <HeadContent/>
        <AboutSection/>
        <ServicesSection/>
        <PortfolioSection/>
        <ContactMeSection/>
        <Footer/>
      
    </div>
  );
}

export default App;
