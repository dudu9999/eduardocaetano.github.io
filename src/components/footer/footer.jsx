import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://github.com/dudu9999"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.linkedin.com/in/eduardo-caetano-81311497/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.facebook.com/ecaetanocorrea"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.instagram.com/eduardocaetano9/"><i className="fa fa-instagram" /></a></li>
                <li><a href="https://twitter.com/ecaetanocorrea"><i className="fa fa-twitter" /></a></li>
              </ul>
              <ul className="copyright">
                <li>© Copyright {(new Date().getFullYear())}</li>
                {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>    */}
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}