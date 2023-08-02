import React from "react";
import Projects from "./Projects";

export default function MainPage() {
  return (
    <div className="main-page">
      <nav>
        <ol id="nav-ol">
          <li className="nav-li">About</li>
          <li className="nav-li">Projects</li>
          <li className="nav-li">Skills</li>
        </ol>
      </nav>

      <a className="big-logo" href="/index.html">
        <img
          src="/img/ivan-logo-1 copy.png"
          alt=""
          id="logo"
          style={{ width: "15rem" }}
        />
      </a>

      {/* <div className="container-social-media animate__flipInY"> */}
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

      <div className="about-me-description">
        <h1 className="nameh1">Ivan Piceno</h1>
        <h2 className="goals-about animate__hinge">Full-Stack Developer</h2>
      </div>

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
