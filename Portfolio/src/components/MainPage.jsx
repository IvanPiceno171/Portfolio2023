import React from "react";
import Projects from "./Projects";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <br />
      <hr />
      <br />

      <SocialMedia/>

      <div className="intro-description">
        <h1 className="nameh1">Ivan Piceno</h1>
        <p>
         insert quote here...
        </p>
        {/* <h2 className="goals-intro animate__hinge">Full-Stack Developer</h2> */}
        <h2 className="goals-intro ">Full-Stack Developer</h2>
      </div>

      {/* About section */}
      <h1>about</h1>

      <Projects />

      <Footer/>
    </div>
  );
}
