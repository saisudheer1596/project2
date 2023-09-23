import React from 'react';
import './Header.css'
import Navbar from './Navbar';
import { BiShoppingBag } from 'react-icons/bi'

function Header() {
    return (
        <header className='page-header'>
            <div className='menu-area menu-right'>
                <div className='vertical-align-containers'>
                    <div className='position-left'>
                        <div className='position-left-inner'>
                            <div className='logo-wrapper'>
                                <a  href="logo" >
                                    <img  className="normal-logo" src=" " width="150" height="28" alt="logo" />
                                    <img  className="dark-logo" src=" " width="150" height="28" alt="dark logo" />
                                    <img  className="light-logo" src=" " width="150" height="28" alt="light logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='position-right'>
                        <div className='position-right-inner'>
                            <Navbar />
                            <div className='shopping-cart-holder' >
                                <div className='shopping-cart-inner'>
                                    <a  className="header-cart header-cart-icon-pack" href="sb">
                                        <span className="cart-icon"><i className="icon-reacticon dripicon reacticon-shopping-bag "><BiShoppingBag /></i></span>
                                        <span className="cart-number">0</span>
                                    </a>
                                    <div className="shopping-cart-dropdown">
                                        <ul>
                                            <li className="empty-cart">No products in the cart.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <a className="search-opener icon-has-hover search-opener-svg-path" href="s">
                                <span className="search-opener-wrapper">
                                    <svg x="0px" y="0px" width="21px" height="21px" viewBox="0 0 21 21" enableBackground="new 0 0 21 21">
                                        <g>
                                            <circle fill="none" stroke="#253D8A" strokeWidth="2.263" strokeMiterlimit="10" cx="8.879" cy="8.879" r="7.379"></circle>
                                            <line fill="none" stroke="#253D8A" strokeWidth="2.263" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="14.184" y1="14.184" x2="19.5" y2="19.5"></line>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                            <a className="side-menu-button-opener icon-has-hover side-menu-button-opener-predefined" href="b">
                                <span className="side-menu-icon">
                                    <span className="hm-lines">
                                        <span className="hm-line line-1"></span>
                                        <span className="hm-line line-2"></span>
                                        <span className="hm-line line-3"></span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header