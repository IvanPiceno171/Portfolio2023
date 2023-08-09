import React from "react";
import Projects from "./Projects";
import Navbar from "./Navbar";

export default function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <br />
      <hr />
      <br />

      <div className="container-social-media animate__backInRight">
        <ul className="social-ul">
          <li className="social-li">
            <a href="">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="social-li">
            <a href="">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="social-li">
            <a href="">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="intro-description">
        <h1 className="nameh1">Ivan Piceno</h1>
        <p>
         insert quote here...
        </p>
        {/* <h2 className="goals-about animate__hinge">Full-Stack Developer</h2> */}
        <h2 className="goals-intro ">Full-Stack Developer</h2>
      </div>

      {/* About section */}
      <h1>about</h1>

      <Projects />

      <footer className="foot">
        <div className="foot-description">
          created &amp; designed by Ivan Piceno
        </div>
        <div className="foot-img">
          <img id="footer-logo" src="/img/ivan-logo-1 copy.png" alt="" />
          <img id="footer-logo" src="/img/ivan-logo-1 copy.png" alt="" />
        </div>
      </footer>
    </div>
  );
}
