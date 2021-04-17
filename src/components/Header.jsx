import React from 'react';
import logoBold from '../assets/images/logo_bold.svg';
import { Link } from 'react-router-dom';


const Header = () => (
    <header className="header  ">
        <div className="container d-flex align-items-center  justify-content-between">
            <div className="logo"  >
                <img className="img" src={logoBold} alt="logo" />
            </div>
            <ul className="menu d-flex flex-row">
                <li><Link to='/'>Mi negocio</Link></li>
                <li><Link to='/ayuda'>Ayuda</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;