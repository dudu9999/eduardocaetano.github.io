import React, { Component } from 'react';
export default class About extends Component {

  calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);  // criei um data objeto diretamente do argumento `dob1` 
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    return age_now;
  }


  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
            <div className="polaroid">
              {/*<img src="img_5terre.jpg" alt="5 Terre" style="width:100%">*/}
              <img className="img_perfil" src="images/perfil.png" alt="" />
              <div className="container">
                <h2 className="meu-nome">Eduardo Caetano Corrêa</h2>
              </div>
              </div>
            </div>
            <div className="nine columns main-col">
              <h2>A meu respeito</h2>
              <p>Tenho {this.calculate_age('02-29-1990')} anos de idade. Estudo Analise e desenvolvimento de sistemas, sou formado em técnico em informatica, gosto da area de design amo Games e escuto muito Rock in Roll. 
              </p><br /> 
              <p>I am {this.calculate_age('02-29-1990')} years old. Study Analyze and develop systems, I have a degree in computer technician, I like the design area I love Games and listen to a lot of Rock in Roll. 
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contato</h2>
                  <p className="address">
                    {/* <span>Jonathan Doe</span><br /> */}
                    <span><div className="div_img" />Brasil<br />
                      Porto Alegre/Rio Grande do Sul
                    </span><br />
                    {/* <span>(123)456-7890</span><br /> */}
                    {/*<span>ecaetanocorrea@gmail.com</span>*/}
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="hrrp://www.google.com" className="button" disabled><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}