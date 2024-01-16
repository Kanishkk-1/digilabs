"use client";
import React from 'react'
import Top from './components/Top'
import Navbar from './components/Navbar'
import Cardaccess from './components/Cardaccess';
import Company from './components/Company';
import Features from './components/Features';
import Featuresfirsthalf from './components/Featuresfirsthalf';
import Userbase from './components/Userbase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className=''>
     <Top/>
     <Navbar/>
     <Cardaccess/>
     <Company/>
     <Features/>
     <Featuresfirsthalf/>
     <Userbase/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App