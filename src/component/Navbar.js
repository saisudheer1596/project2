import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <nav className='main-menu drop-down default-nav'>
      <ul id='menu-main-menu' className='clearfix'>
        <li id='nav-menu-item-20' className='menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-childern active-item has_sub narrow'>
          <a className='current no_link' href='h' >
            <span className='item_outer'>
              <span className='item_text'>Home</span>
              <i className='menu-arrow fa fa-angle-down'></i>
            </span>
          </a>
          <div className="second" >
            <div className="inner">
              <ul>
                <li id="nav-menu-item-1228" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home ">
                  <a href="Mh" className="">
                    <span className="item_outer">
                      <span className="item_text">Main home</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-1353" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="Sh" className="">
                    <span className="item_outer">
                      <span className="item_text">SaaS home</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-1032" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="Sc" className="">
                    <span className="item_outer">
                      <span className="item_text">Startup company</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-675" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-445 current_page_item ">
                  <a href="Tc" className="">
                    <span className="item_outer">
                      <span className="item_text">Tech company</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-326" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="Ds" className="">
                    <span className="item_outer">
                      <span className="item_text">Digital studio</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-1545" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="As" className=""><span className="item_outer">
                    <span className="item_text">App showcase</span>
                  </span>
                  </a>
                </li>
                <li id="nav-menu-item-1803" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="Ch" className="">
                    <span className="item_outer">
                      <span className="item_text">Crypto home</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-1655" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="Ph" className="">
                    <span className="item_outer">
                      <span className="item_text">Product showcase</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-1910" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="Bh" className="">
                    <span className="item_outer">
                      <span className="item_text">Blog home</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-810" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="Pm" className="">
                    <span className="item_outer">
                      <span className="item_text">Portfolio masonry</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-421" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="Ts" className="">
                    <span className="item_outer">
                      <span className="item_text">Tech store</span>
                    </span>
                  </a>
                </li>
                <li id="nav-menu-item-2612" className="menu-item menu-item-type-post_type menu-item-object-page ">
                  <a href="L" className="">
                    <span className="item_outer">
                      <span className="item_text">Landing</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li id='nav-menu-item-1' className='menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-childern has_sub narrow'>
          <a className='current no_link' href='h'>
            <span className='item_outer'>
              <span className='item_text'>Page</span>
              <i className='menu-arrow fa fa-angle-down'></i>
            </span>
          </a>
        </li>
        <li id='nav-menu-item-1' className='menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-childern has_sub narrow'>
          <a className='current no_link' href='h'>
            <span className='item_outer'>
              <span className='item_text'>Blog</span>
              <i className='menu-arrow fa fa-angle-down'></i>
            </span>
          </a>
        </li>
        <li id='nav-menu-item-1' className='menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-childern has_sub narrow'>
          <a className='current no_link' href='h'>
            <span className='item_outer'>
              <span className='item_text'>Portfolio</span>
              <i className='menu-arrow fa fa-angle-down'></i>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar