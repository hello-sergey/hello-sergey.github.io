import "./HomeSection.css"
import photo from "../images/my_photo.jpg"
import {Link} from "react-scroll";
import CVdoc from "../assets/CV_Sergey_Batechko.pdf"

export function HomeSection() {

    return (
        <section className="home">
            <div className="container">
                <div className="home-content">
                    <div className="home-item photo-container">
                        <img src={photo} alt="" className="photo"/>
                    </div>
                    <h1 className="home-item name">Sergey Batechko</h1>
                    <h2 className="home-item qualification">QAA Engineer</h2>
                    <a href={CVdoc} target="_blank" className="home-item download-resume-button">Download CV</a>
                    <Link to="about" spy={true} smooth={true} offset={-80} duration={500}
                          className="home-item scroll-down">
                        <i className="fa-solid fa-chevron-down"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}