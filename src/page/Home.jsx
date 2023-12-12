import React from 'react'
import FullScreenSlider from '../components/FullScreenSlider'
import NavigateBar from '../components/NavigateBar'
import DownArrow from '../share/DownArrow';
import MiniSlider from '../components/MiniSlider';
import GununFırsatı from '../components/GunuBirlik';
import MiniAbout from '../components/MiniAbout';
import Contact from '../components/Contact';
import Travel from '../components/Travel';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className='homeContainer'>
        <NavigateBar />
        <FullScreenSlider />
        <DownArrow />
        <GununFırsatı />
        <Travel />
        <MiniSlider />
        <MiniAbout />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;