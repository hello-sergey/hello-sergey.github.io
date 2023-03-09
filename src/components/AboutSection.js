import "./AboutSection.css"
import { forwardRef } from "react";

const AboutSection = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <h2 className="about-title">About me</h2>
                    <p className="about-text">
                        QA Automation engineer with experience in data parsing and web development.
                        2 years experience in QAA. Graduated from Odessa National Polytechnic University, Institute of
                        Information
                        Security, Radio Electronics and Telecommunications with masters degree in Cybersecurity.
                    </p>
                </div>
            </div>
        </section>
    );
});
export default AboutSection;