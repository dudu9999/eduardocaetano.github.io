import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="hrrp://www.google.com" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Olá :)</h1>
              <h3>Meu nome é Eduardo, sou <span> programador Front-End</span>, entusiasta em qualquer assunto tecnológico, mesmo minha área sendo o front o <span>Back-End</span> e o <span>Mobile</span> Também passam por meus estudos. Para saber mais navegue para a <a className="smoothscroll" href="#about">página sobre</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="https://github.com/dudu9999"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.linkedin.com/in/eduardo-caetano-81311497/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.facebook.com/ecaetanocorrea"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.instagram.com/eduardocaetano9/"><i className="fa fa-instagram" /></a></li>
                <li><a href="https://twitter.com/ecaetanocorrea"><i className="fa fa-twitter" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
      </header>
      </React.Fragment>
    );
  }
}