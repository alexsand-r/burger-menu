import './nav-bar.css'
import { useState } from 'react'



function Navbar({isVisibleNavbar}) {



    return (
        <>
            <nav className="navig">
                <ul className={`list ${isVisibleNavbar ? 'activ' : ''}`}>
                    <li><a className="link" href="">home</a></li>
                    <li><a className="link" href="">product</a></li>
                    <li><a className="link" href="">about as</a></li>
                    <li><a className="link" href="">contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;