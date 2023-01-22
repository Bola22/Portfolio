import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Intro from "../../components/intro/Into";
import About from "../../components/about/About";
import Project from "../../components/project/Project";
import Sold from "../../components/sold/Sold";
import Footer from "../../components/footer/Footer";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightsidebar/Rightsidebar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
        <Navbar />
        <RightSidebar />
        <LeftSidebar />
      <Intro />
      <About />
      <Project />
      <Sold />
      <Footer />
    </div>
  );
}

export default Home;
