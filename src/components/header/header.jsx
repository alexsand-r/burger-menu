import Burger from "./burger-icon/burger-icon";
import "./header.css"
import Navbar from "./nav-bar/nav-bar";
import logo from "/src/assets/logo.png"

import { useState } from 'react'

function Header({toggleNavbar, isVisibleNavbar}) {

    return (
       
        <>
            <div className="header">
                <div className="header__container">
                    <div className="header__body">
                        <div className="logo-block">
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                        <Navbar isVisibleNavbar={isVisibleNavbar} />
                        <Burger toggleNavbar={toggleNavbar} />
                      
                    </div>
                </div>

            </div>
            
        </>
    )
  
}

export default Header