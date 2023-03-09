import "./SkillsSection.css"
import { forwardRef } from "react";

const SkillsSection = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="skills" className="skills">
            <div className="container">
                <div className="skills-content">
                    <div className="skills-title">
                        <h2>Skills</h2>
                    </div>
                    <ul className="skills-list">
                        <li className="skills-list-item">Java</li>
                        <li className="skills-list-item">JavaScript</li>
                        <li className="skills-list-item">AspectJ</li>
                        <li className="skills-list-item">Selenium</li>
                        <li className="skills-list-item">Selenide</li>
                        <li className="skills-list-item">Serenity</li>
                        <li className="skills-list-item">Cypress.io</li>
                        <li className="skills-list-item">RestAssured</li>
                        <li className="skills-list-item">Jenkins</li>
                        <li className="skills-list-item">HTML</li>
                        <li className="skills-list-item">CSS</li>
                        <li className="skills-list-item">UI/API Testing</li>
                        <li className="skills-list-item">OOP</li>
                        <li className="skills-list-item">REST</li>
                        <li className="skills-list-item">Git</li>
                        <li className="skills-list-item">Maven</li>
                        <li className="skills-list-item">XPath</li>
                        <li className="skills-list-item">Grafana</li>
                        <li className="skills-list-item">InfluxDB</li>
                        <li className="skills-list-item">SQL</li>
                        <li className="skills-list-item">JDBC</li>
                        <li className="skills-list-item">Allure</li>
                        <li className="skills-list-item">TestNG</li>
                        <li className="skills-list-item">SOLID</li>
                    </ul>
                </div>
            </div>
        </section>
    );
});

export default SkillsSection;
