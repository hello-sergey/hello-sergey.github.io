import './App.css';
import {Navigation} from "./components/Navigation";
import {HomeSection} from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import {Footer} from "./components/Footer";

function App() {

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
