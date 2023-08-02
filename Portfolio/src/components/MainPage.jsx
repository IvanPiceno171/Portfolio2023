import React from 'react'
import '../sass/style.scss'

export default function MainPage() {
  return (
    <div>
    <nav>
      <ol id="nav-ol">
        <li className="nav-li">About</li>
        <li className="nav-li">Projects</li>
        <li className="nav-li">Skills</li>
      </ol>
    </nav>

    <a className="big-logo" href="/index.html">
      <img src="/img/ivan-logo-1 copy.png" alt="" id="logo" style={{ width: '15rem' }} />
    </a>

    <div className="container-social-media">
      <ul className="social-ul">
        <li className="social-li"><a href=""><i className="fab fa-github"></i></a></li>
        <li className="social-li"><a href=""><i className="fab fa-linkedin"></i></a></li>
        <li className="social-li"><a href=""><i className="fas fa-envelope"></i></a></li>
      </ul>
    </div>

    <div className="about-me-description">
      <h1 className="nameh1">Ivan Piceno</h1>
      <h2 className="goals-about">I am an aspiring software engineer</h2>
    </div>
    
    {/* Skills */}
    {/* <div className="skills-container">
      <div className="skills-div">
        <ul className="skills-ul">
          <li className="skills-li">JavaScript</li>
          <li className="skills-li">CSS</li>
          <li className="skills-li">HTML</li>
          <li className="skills-li">React</li>
        </ul>
      </div>
    </div> */}

    <footer className="foot">
      <div className="foot-description">created &amp; designed by Ivan Piceno</div>
      <div className="foot-img">
        <img id="footer-logo" src="/img/ivan-logo-1 copy.png" alt="" />
        <img id="footer-logo" src="/img/ivan-logo-1 copy.png" alt="" />
      </div>
    </footer>
  </div>
);
}
