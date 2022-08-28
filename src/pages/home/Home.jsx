import React from 'react'
import Navbar from '../../components/navbar/Navbar' 
import Intro from '../../components/intro/Into'
import About from '../../components/about/About'
import Project from '../../components/project/Project'
import Technologies from '../../components/technologies/Technologies'
import Sold from '../../components/sold/Sold'
import Footer from '../../components/footer/Footer'
import "./home.scss"

function Home() {
  return (
    <div className="home">
      <div className="top">
      <Navbar />
      </div>
      <Intro />
      <About />
      <Project />
      <Technologies />
      <Sold />
      <Footer />
    </div>
  )
}

export default Home
