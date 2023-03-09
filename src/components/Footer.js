import "./Footer.css"
import {scrollTop} from "../utils/utilities";

export function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-item footer-copyright">Copyright © 2023 <br/>Sergey Batechko</p>
                    <div onClick={scrollTop} className="footer-item scroll-top">
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                    <ul className="footer-item socials-list">
                        <li className="socials-list-item">
                            <a href="https://t.me/nickslice" target="_blank" className="socials-list-item-link">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </li>
                        <li className="socials-list-item">
                            <a href="https://www.linkedin.com/in/sergey-batechko-56b73a267/" target="_blank"
                               className="socials-list-item-link">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li className="socials-list-item">
                            <a href="https://www.instagram.com/sereja_interesniy/" target="_blank"
                               className="socials-list-item-link">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}