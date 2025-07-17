import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Quote from './components/Quote';
import Testimonials from './components/Testimonials';
import Author from './components/Author';
import ContentDetails from './components/ContentDetails';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Quote />
      <Testimonials />
      <Author />
      <ContentDetails />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;