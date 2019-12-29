import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>FACULDADE SENAC - SENAC/RS</h3>
                <p className="info"><a href="https://www.senacrs.com.br/cursosDetalhe.asp?idCurso=1286&nivel=1" target="_black" rel="noopener noreferrer">
                  ANALISE E DESENVOLVIMENTO DE SISTEMAS </a><span>•</span> <em className="date">February 2019 - November/2024</em></p>
                <p>
                  O curso oferece uma boa base matemática e raciocínio lógico. Tem enfoque para desenvolver programas e sistemas de informática, desde o planejamento do projeto até a implantação e gerenciamento do software.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>ESCOLA PROFISSIONAL FUNDATEC - EPF</h3>
                <p className="info"><a href="https://www.fundatec.org.br/portal/capacitacao/cursos_incompany.php" target="_black" rel="noopener noreferrer">
                  TÉCNICO EM INFORMÁTICA </a><span>•</span> <em className="date">February/2016 - September/2017</em></p>
                <p>
                  Conta com disciplinas de programção voltada mais para desenvolver aplicações web, e assim você aprenderá Tecnologias e frameworks como Angular, react, Php e também aprenderá banco de dados SQL e NOSQL.
                  Nos modulos finnais aprendera a desenvolveraplicações moveis.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}

        {/* Work----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">

            <div className="row item">
              <div className="twelve columns">
                <h3><a href="http://www.institutoventuri.org.br" target="_black" rel="noopener noreferrer">Instituto Venturi Para Estudos Ambientais</a></h3>
                <p className="info">Analista de Sistemas / Programador Web <span>•</span> <em className="date">02/2019 - Presente</em></p>
                <p>
                 Desenvolvimento e manutenção de sistema acadêmico. <br />
                 <strong>OJS - Open Journal System</strong> (PHP, Laravel, HTML, CSS,
                  JavaScript, MySQL, REST e SOAP). <br />
                 <strong>wordpress</strong> (PHP, Laravel, HTML, CSS,
                  JavaScript, MySQL, REST e SOAP). <br />
                 <strong>Joomla</strong> (PHP, Laravel, HTML, CSS,
                  JavaScript, MySQL, REST e SOAP). <br />
                 <strong>Hospagem e configurão Dominio</strong><br />
                 <strong>Configuração e gerenciamento SEO</strong><br />
                </p>
              </div>
            </div> {/* item end */}

            <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://www.senacrs.com.br/cursosDetalhe.asp?idCurso=1286&nivel=1" target="_black" rel="noopener noreferrer">Wine Tecnologia</a></h3>
                <p className="info">Técnico em TI<span>•</span> <em className="date">07/2016 - 01/2017</em></p>
                <p>
                  Atendimento de empresas de Porto alegre, conserto de computador e redes e sistemas afim, como principal cliente Ambev.
                </p>
              </div>
            </div> {/* item end */}

            <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://www.eduardocaetano.ga/" target="_black" rel="noopener noreferrer">AUTONOMO</a></h3>
                <p className="info">Web Developer<span>•</span> <em className="date">06/2015 - Presente</em></p>
                <p>
                  Desenvolvimento e manutenção de sistema <b>WMS</b> (PHP, HTML, CSS e JavaScript), Integração com sistemas terceiros utilizando REST e SOAP, Configuração de servidor Linux, desenvolvimento de ecommerces com wordpress e joomla.
                </p>
              </div>
            </div> {/* item end */}

            <div className="row item">
              <div className="twelve columns">
                <h3><a href="http://www.acaosocialdefe.org.br/" target="_black" rel="noopener noreferrer">CASA LAR</a></h3>
                <p className="info">Professor<span>•</span> <em className="date">05/2014 - 06/2015</em></p>
                <p>
                  Eu menestrei aula de informatica para jovens morador de rua e idosas como trabalho voluntario, no abrigo para jovens sem lar, chamado <b>casa lar</b> no bairro sarandi.
                </p>
              </div>
            </div> {/* item end */}

          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Dentre as principais habilidades adquiridas.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand PHP" /><em>PHP</em></li>
                <li><span className="bar-expand React" /><em>React</em></li>
                <li><span className="bar-expand NODEJS" /><em>NODEJS</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                <li><span className="bar-expand wordpress" /><em>wordpress</em></li>
                <li><span className="bar-expand OJS" /><em>Open Journal System</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}