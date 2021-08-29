import React from 'react';
import './navbar.scss';
export const Navbar: React.FC = () => {
    return (
        <nav className="menu">
            <div className="menu__wrapper">
                <div className="menu__title-container">
                    <p className="menu__title">Jeremy Guillén</p>
                </div>
                <ul className="menu__list">
                    <li className="menu__item">
                        <a>About Me</a>
                    </li>
                    <li className="menu__item">
                        <a>My projects</a>
                    </li>
                    <li className="menu__item">
                        <a>Some hobbies</a>
                    </li>
                    <li className="menu__item">
                        <a>Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}