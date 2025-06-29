import React from 'react'
import Navbar from '../components/Navbar/navbar.component'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal.component'
import Plays from '../pages/Plays.page'
import Footer from '../components/Footer/Footer'
const Play_layout = () => {
  return (
    <div>
      <Navbar />
       <HeroCarousal />
       <Plays />
       <Footer/>
    </div>
  )
}

export default Play_layout
