import { NavLink } from 'react-router-dom';
import './../assets/css/Navbar.css'
import React, { useState } from "react";
import Logo from '../assets/img/Logo.png'
import A19 from './A19';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="barraNavegacion fixed-top"> {/* Agrega la clase fixed-top */}
            <nav className="navbar">
                <ul>
                    <NavLink exact={true.toString()} to="/" className="active">
                        <li> <img className='Logo' src={Logo} alt="Logo" /></li>
                    </NavLink>
                    <NavLink to="/Registrate" className="active">
                        <li>Registrate</li>
                    </NavLink>
                    <li className={`dropdown ${isOpen ? 'open' : ''}`}>
                        <a className="dropdown-toggle" onClick={toggleMenu}>
                            Estadisticas
                        </a>
                        <ul className="dropdown-menu">
                            <NavLink to="/A19" onClick={closeMenu}>
                                <li>2019</li>
                            </NavLink>
                            <NavLink to="/" onClick={closeMenu}>
                                <li>2020</li>
                            </NavLink>
                            <NavLink to="/" onClick={closeMenu}>
                                <li>2021</li>
                            </NavLink>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;


