import './App.css';
import {Navigation} from "./components/Navigation";
import {HomeSection} from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import {Footer} from "./components/Footer";
import {useRef} from "react";

function App() {
    // const aboutSectionRef = useRef(null);

    return (
        <div className="wrapper">
            <Navigation/>
            <HomeSection/>
            <AboutSection/>
            <SkillsSection/>
            <Footer/>
        </div>
    );
}

export default App;
