import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaTwitter } from 'react-icons/fa';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { BsFillPinAngleFill } from 'react-icons/bs';

function Footer() {
  return (
    <footer className='page-footer'>
      <div className='footer-top-holder'>
        <div className='footer-top-inner footer-grid'>
          <div className='grid-row top-alignment-left'>
            <div className='column-content grid-col-3'>
              <div className='widget separator-widget'>
                <div className='separater-holder clearflex separater-center separater-full-width'>
                  <div className='separator' style={{ borderColor: '#0d2753', borderStyle: 'solid', borderBottomWidth: '1px', marginTop: '17px', marginBottom: '0px' }}></div>
                </div>
              </div>
              <div id="media_image-5" className="widget footer-column-1 widget_media_image">
                <a href="#h">
                  <img width="151" height="27" src="https://softwerk.qodeinteractive.com/wp-content/uploads/2018/12/logo-footer-1.png" className="image wp-image-4346  attachment-151x27 size-151x27" alt="" loading="lazy" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
              </div>
              <div id="text-2" className="widget footer-column-1 widget_text">
                <div className="textwidget">
                  <p style={{ margin: '-3px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
              <div className='widget social-icon-holder text-align-left'>
                <a className='social-icon-widget-holder icon-has-hover' href='r' style={{ fontSize: '15px', margin: '-8px 9px 0 0' }} target='_blank'>
                  <span className='social-icon-widget fab fa-facebook-f'>
                    <FaFacebook />
                  </span>
                </a>
                <a className='social-icon-widget-holder icon-has-hover' href='r' style={{ fontSize: '15px', margin: '-8px 9px 0 0' }} target='_blank'>
                  <span className='social-icon-widget fab fa-twitter-f'>
                    <FaTwitter />
                  </span>
                </a>
                <a className='social-icon-widget-holder icon-has-hover' href='r' style={{ fontSize: '15px', margin: '-8px 9px 0 0' }} target='_blank'>
                  <span className='social-icon-widget fab fa-linkedin-f'>
                    <FaLinkedin />
                  </span>
                </a>
                <a className='social-icon-widget-holder icon-has-hover' href='r' style={{ fontSize: '15px', margin: '-8px 9px 0 0' }} target='_blank'>
                  <span className='social-icon-widget fab fa-instagram-f'>
                    <FaInstagram />
                  </span>
                </a>
              </div>
            </div>
            <div className='column-content grid-col-3'>
              <div className='widget separator-widget'>
                <div className='separater-holder clearflex separater-center separater-full-width'>
                  <div className='separator' style={{ borderColor: '#0d2753', borderStyle: 'solid', borderBottomWidth: '1px', marginTop: '17px', marginBottom: '0px' }}></div>
                </div>
              </div>
              <div id="text-3" className="widget footer-column-2 widget_text">
                <div className="widget-title-holder">
                  <h5 className="widget-title">Contact info</h5>
                </div>
                <div className="textwidget"></div>
              </div>
              <div className='widget separator-widget'>
                <div className='separater-holder clearflex separater-center separater-full-width'>
                  <div className='separator' style={{ borderColor: '#0d2753', borderStyle: 'solid', borderBottomWidth: '1px', marginTop: '17px', marginBottom: '0px' }}></div>
                </div>
              </div>
              <a className="icon-widget-holder" href="ha" target="_self" style={{ margin: '-1rem 0 0.5rem' }}>
                <span className="icon-element reacticons-location">
                  < FaLocationDot />
                </span>
                <span className="icon-text ">Monday to Friday : 9 Am-8 Pm</span>
              </a>
              <a className="icon-widget-holder" href="ha" target="_self" style={{ margin: '0 0 0.5rem' }}>
                <span className="icon-element reacticons-pin">
                  < BsFillPinAngleFill />
                </span>
                <span className="icon-text ">Sarturday to Sunday : closed</span>
              </a>
              <a className="icon-widget-holder" href="ha" target="_self" style={{ margin: '0 0 0.5rem' }}>
                <span className="icon-element reacticons-mail">
                  < FaEnvelope />
                </span>
                <span className="icon-text ">abc1@gmail.com</span>
              </a>
              <a className="icon-widget-holder" href="ha" target="_self" style={{ margin: '0 0 0.5rem' }}>
                <span className="icon-element reacticons-phone">
                  < FaPhone />
                </span>
                <span className="icon-text ">+919012234567</span>
              </a>
            </div>
            <div className='column-content grid-col-3'>
              <div className='widget separator-widget'>
                <div className='separater-holder clearflex separater-center separater-full-width'>
                  <div className='separator' style={{ borderColor: '#0d2753', borderStyle: 'solid', borderBottomWidth: '1px', marginTop: '17px', marginBottom: '0px' }}></div>
                </div>
              </div>
              <div id="text-4" className="widget footer-column-3 widget_text">
                <div className="widget-title-holder">
                  <h5 className="widget-title">Latest news</h5>
                </div>
                <div className="textwidget">
                  <p style={{ marginTop: "24px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua ut enim minim.
                  </p>
                </div>
              </div>
            </div>
            <div className='column-content grid-col-3'>
              <div className='widget separator-widget'>
                <div className='separater-holder clearflex separater-center separater-full-width'>
                  <div className='separator' style={{ borderColor: '#0d2753', borderStyle: 'solid', borderBottomWidth: '1px', marginTop: '17px', marginBottom: '0px' }}></div>
                </div>
              </div>
              <div id="text-6" className="widget footer-column-4 widget_text">
                <div className="widget-title-holder">
                  <h5 className="widget-title">Newsletter</h5>
                </div>
                <div className="textwidget"></div>
              </div>
              <div className='widget separator-widget'>
                <div className='separater-holder clearflex separater-center separater-full-width'>
                  <div className='separator' style={{ borderColor: '#0d2753', borderStyle: 'solid', borderBottomWidth: '1px', marginTop: '17px', marginBottom: '0px' }}></div>
                </div>
              </div>
              <div className="widget contact-form-7-widget ">
                <div role="form" className="contactinfo" id="contactinfo-f3523-o3" lang="en-US" dir="ltr">
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                    <ul></ul>
                  </div>
                  <form action="/tech-company/#contactinfo-f3523-o3" method="post" className="contactinfo-form init cf7_custom_style_3 demo" noValidate="novalidate" data-status="init">
                    <div style={{ display: 'none' }}>
                      <input type="hidden" name="_contactinfo" value="3523" />
                      <input type="hidden" name="_contactinfo_version" value="5.5.4" />
                      <input type="hidden" name="_contactinfo_locale" value="en_US" />
                      <input type="hidden" name="_contactinfo_unit_tag" value="contactinfo-f3523-o3" />
                      <input type="hidden" name="_contactinfo_container_post" value="0" />
                      <input type="hidden" name="_contactinfo_posted_data_hash" value="" />
                    </div>
                    <div className="form-newsletter cf-icon">
                      <div className="two-columns-form-with-space">
                        <div className="column-form-left">
                          <span className="contactinfo-form-control-wrap your-email">
                            <input type="email" name="your-email" value="" size="40" className="contactinfo-form-control contactinfo-text contactinfo-email contactinfo-validates-as-required contactinfo-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" />
                          </span>
                        </div>
                        <div className="column-form-right cf-icon">
                          <div className="form-after">
                            <button type="submit" className="contactinfo-form-control contactinfo-submit no-shadow btn-newsletter-icon form-btn btn-medium btn-solid">
                              <span className="btn-text">
                                <FaLocationArrow />&nbsp;
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contactinfo-response-output" aria-hidden="true"></div>
                  </form>
                </div>
              </div>
              <div id="text-7" className="widget footer-column-4 widget_text">
                <div className="textwidget">
                  <p>Get latest news and promotins direct in your inbox!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom-holder'>
        <div className="footer-bottom-inner footer-grid">
          <div className="grid-row ">
            <div className="grid-col-12">
              <div id="text-8" className="widget footer-bottom-column-1 widget_text">
                <div className="textwidget">
                  <p>© 2018
                    <a style={{ color: "#fff"}} href="#d" target="_blank" rel="nofollow noopener"> Qode Interactive</a>
                    , All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer