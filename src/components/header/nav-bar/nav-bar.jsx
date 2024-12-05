import './nav-bar.css'
import { NavLink } from 'react-router-dom';


function Navbar({isVisibleNavbar}) {



    return (
        <>
            <nav className="navig">
                <ul className={`list ${isVisibleNavbar ? 'activ-bar' : ''}`}>
                    <li><NavLink to="/" className='link'>home</NavLink></li>
                    <li><NavLink to="/products" className='link'>product</NavLink></li> 
                    <li><NavLink to="/about" className='link'>о нас</NavLink></li> 
                    <li><NavLink to="/contact" className='link'>Contact</NavLink></li>
                 </ul>
            </nav>
        </>
    )
}

export default Navbar;