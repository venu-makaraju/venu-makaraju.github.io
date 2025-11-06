import "./App.css";
import AboutMeComponent from "./components/AboutmeComponent";
import CertificationsComponent from "./components/CertificationsComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import SkillsComponent from "./components/SkillsComponent";
import ContactPageComponent from "./components/ContactPageComponent";
import LandingPageComponent from "./components/LandingPageComponent";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <div id="landing">
        <LandingPageComponent />
      </div>
      <AboutMeComponent />
      <ExperienceComponent />
      <SkillsComponent />
      <CertificationsComponent />
      <ContactPageComponent />
    </div>
  );
}

export default App;