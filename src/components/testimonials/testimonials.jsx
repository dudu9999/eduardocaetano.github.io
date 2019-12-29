import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>“Design não é apenas o que parece e o que se sente. Design é como funciona.
                            Inovação distingue um líder de um seguidor.
                            Eu quero colocar uma marca no universo.”</p>
                        <cite>Steve Jobs</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>“Hoje a programação é uma corrida entre os engenheiros de software para tentar construir maiores e melhores programas à prova
                         de idiotas, e o Universo tentando produzir maiores e melhores idiotas. Até agora, o Universo está ganhando.”
                        </p>
                        <cite>Rich Cook</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>“Para entender recursão, devemos primeiro compreender uma recursão.”
                        </p>
                        <cite>Autor desconhecido</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>”Seja um parâmetro de qualidade. Algumas pessoas não estão acostumadas a um ambiente onde a excelência é esperada.”
                        </p>
                        <cite>Steve Jobs</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                  </ul>
                </div> {/* div.flexslider ends */}
              </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section> {/* Testimonials Section End*/}

      </React.Fragment>
    );
  }
}