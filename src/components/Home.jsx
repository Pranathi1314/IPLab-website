import React from 'react'

import Header from './Header';
import Navbar from './Navbar';
import SideSection from './SideSection';
import MovingHeadline from './MovingHeadline';
import Footer from './Footer';
import Image from './Image';

const Home = () => {
  return (
    <div>
         <div className="app">
      <Header />
      <Navbar />
      <div className="content">
        <div className="side-section-container">
          <SideSection />
        </div>
        <div className="image-container">
          <Image />
        </div>
        <main>
          {/* Your main content goes here */}
        </main>
      </div>
      <MovingHeadline />
      <Footer></Footer>
    </div>
    </div>
  )
}

export default Home
