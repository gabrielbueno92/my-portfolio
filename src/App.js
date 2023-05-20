import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Background } from './components/Background';
import { SkillsSection } from './components/SkillsSection';
import { Trajectory } from './components/Trajectory';
import { Projects } from './components/Projects'
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="App">
    <Background />
    <NavBar />
    <Banner />
    <SkillsSection />
    <Trajectory />
    <Projects />
    <ContactSection />
    </div>
  );
}

export default App;
