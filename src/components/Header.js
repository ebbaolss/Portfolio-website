import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/projects">Prosjekter</Link></li>
                    <li><Link to="/cv">CV</Link></li>
                    <li><Link to="/about">Om meg</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
