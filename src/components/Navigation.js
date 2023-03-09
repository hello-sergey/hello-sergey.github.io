import logo from "../logo.svg";
import "./Navigation.css"
import {Link} from 'react-scroll';
import {useEffect, useState} from "react";

export function Navigation() {

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const handleMenuLinkClick = () => {
        const body = document.querySelector("body");
        const nav = document.querySelector(".nav-body");
        const navIcon = document.querySelector(".nav-icon");
        body.style.overflow = "auto";
        nav.classList.remove("menu-active");
        navIcon.classList.remove("menu-open");
        setIsActive(false);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        if (isActive) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }, [isActive]);

    useEffect(() => {
        const menuLinks = document.querySelectorAll(".nav-list-item-link");
        if (isActive) {
            menuLinks.forEach(menuLink => {
                menuLink.addEventListener("click", () => {
                    handleMenuLinkClick();
                })
            })
        }
    }, [isActive])

    return (
        <header className="header">
            <div className="header-row">
                <div className="logo-container">
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                <nav className="nav">
                    <div className={`nav-body ${isActive ? "menu-active" : ""}`}>
                        <ul className="nav-list">
                            <li className="nav-list-item"><Link to="about" spy={true} smooth={true} offset={-80}
                                                                duration={500} className="nav-list-item-link" onClick={handleMenuLinkClick}>About
                                me</Link></li>
                            <li className="nav-list-item"><Link to="skills" spy={true} smooth={true} offset={-80}
                                                                duration={500}
                                                                className="nav-list-item-link" onClick={handleMenuLinkClick}>Skills</Link></li>
                        </ul>
                    </div>
                    <button onClick={toggleClass} className={`nav-icon icon-menu ${isActive ? "menu-open" : ""}`}
                            type="button">
                        <span className="icon-menu-line"></span>
                    </button>
                </nav>
            </div>
        </header>
    );
}