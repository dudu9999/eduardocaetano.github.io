import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
             <h2>Contato</h2>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input type="text" defaultValue={""} size={35} id="contactName" name="contactName" disabled/>
                  </div>
                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" defaultValue={""} size={35} id="contactEmail" name="contactEmail" disabled/>
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input type="text" defaultValue={""} size={35} id="contactSubject" name="contactSubject" disabled/>
                  </div>
                  <div>
                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} disabled/>
                  </div>
                  <div>
                    <button className="submit" disabled>Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form> {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning"> Erro ao enviar menssagem</div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />Sua mensagem foi enviada, obrigado!<br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Endereço</h4>
                <p className="address">
                  Eduardo Caetano Corrêa<br />
                  Porto Alegre/RS <br />
                  Bairro Coronel Apariço Borges<br />
                </p>
              </div>
            </aside>
          </div>

          <div>
              <!-- Messenger Plugin de bate-papo Code -->
              <div id="fb-root"></div>

              <!-- Your Plugin de bate-papo code -->
              <div id="fb-customer-chat" class="fb-customerchat"></div>

              <script>
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "100347858431475");
                chatbox.setAttribute("attribution", "biz_inbox");
              </script>

              <!-- Your SDK code -->
            <script>
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v13.0'
                });
              };

              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/pt_BR/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
            </script>                    
          </div>
        </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}
