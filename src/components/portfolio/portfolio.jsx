import React, { Component } from 'react';
export default class Portifolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Confira alguns dos meus trabalhos.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title="">
                      <img alt="" src="images/portfolio/cieduca.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>CIEducA</h5>
                          <p>OJS - Open Journal System</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title="">
                      <img alt="" src="images/portfolio/furpa.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Fundação dos Rotarianos de Porto Alegre (FURPA)</h5>
                          <p>Wordpress Development</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title="">
                      <img alt="" src="images/portfolio/leidem.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Leide M</h5>
                          <p>Blogspot Development</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title="">
                      <img alt="" src="images/portfolio/modagratidao.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Moda Gratidão</h5>
                          <p>Ecoomerce</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title="">
                      <img alt="" src="images/portfolio/convite.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Convite de Aniversario</h5>
                          <p>Photoshop</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title="">
                      <img alt="" src="images/portfolio/arte.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Artes</h5>
                          <p>Photoshop</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title="">
                      <img alt="" src="images/portfolio/banner.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Banners</h5>
                          <p>Photoshop</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title="">
                      <img alt="" src="images/portfolio/gif.gif" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Gif</h5>
                          <p>Propagandas</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
          --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/cieduca.png" alt="" />
              <div className="description-box">
                <h4>CIEducA</h4>
                <p>Desenvolvimnto, Estilisação e Gerenciamento da plataforma do site</p>
                <span className="categories"><i className="fa fa-tag" />Web Development, Webdesign</span>
              </div>
              <div className="link-box">
                <a href="https://www.institutoventuri.org/CIEducA/index.php/2019">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/furpa.png" alt="" />
              <div className="description-box">
                <h4>Fundação dos Rotarianos de Porto Alegre (FURPA)</h4>
                <p>Desenvolvimnto, Estilisação e Gerenciamento da plataforma do site.</p>
                <span className="categories"><i className="fa fa-tag" />Web Development, Webdesign, SEO</span>
              </div>
              <div className="link-box">
                <a href="http://furpa.org.br/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/leidem.png" alt="" />
              <div className="description-box">
                <h4>Leide M</h4>
                <p>Desenvolvimnto, Estilisação e Gerenciamento da plataforma do site.</p>
                <span className="categories"><i className="fa fa-tag" />Web Development, Webdesign, SEO</span>
              </div>
              <div className="link-box">
                <a href="http://www.leidem.com.br/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/modagratidao.png" alt="" />
              <div className="description-box">
                <h4>Moda Gratidão</h4>
                <p>Desenvolvimnto, Estilisação e Gerenciamento da plataforma do site Ecommerce.</p>
                <span className="categories"><i className="fa fa-tag" />Ecommerce</span>
              </div>
              <div className="link-box">
                <a href="https://www.modagratidao.com.br">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/convite.png" alt="" />
              <div className="description-box">
                <h4>Convites de aniversário</h4>
                <p>Convites de aniversario infantil ou adulto que faço no photosho</p>
                <span className="categories"><i className="fa fa-tag" />Design</span>
              </div>
              <div className="link-box">
                <a href="https://photos.app.goo.gl/gasaJiABvBoQjufo7">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-arte.png" alt="" />
              <div className="description-box">
                <h4>Artes</h4>
                <p>Criações do Photoshop.</p>
                <span className="categories"><i className="fa fa-tag" />Design</span>
              </div>
              <div className="link-box">
                <a href="https://photos.app.goo.gl/JaxSbMPkjgRqybQ49">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/banners.png" alt="" />
              <div className="description-box">
                <h4>Banners</h4>
                <p>Banners criado para site ou para ser colocado em via.</p>
                <span className="categories"><i className="fa fa-tag" />Design</span>
              </div>
              <div className="link-box">
                <a href="https://photos.app.goo.gl/k6ANV2RDGmPA429X9">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/gif.gif" alt="" />
              <div className="description-box">
                <h4>Gif</h4>
                <p>Gif Criados com photoshop para ser utilisado em propagandas de sites.</p>
                <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
              </div>
              <div className="link-box">
                <a href="https://photos.app.goo.gl/ERczDb6ZPH1cwCy96">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
          </div> {/* row End */}
        </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}