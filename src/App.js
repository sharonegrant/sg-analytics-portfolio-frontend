import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import ProjectGallery from './components/ProjectGallery';
import DashboardGallery from './components/DashboardGallery';
import Leadership from './components/Leadership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CaseStudies />
      <ProjectGallery />
      <DashboardGallery />
      <Leadership />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
