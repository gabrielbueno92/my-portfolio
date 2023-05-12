import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Background } from './components/Background';
import { SkillsSection } from './components/SkillsSection';
import { Trajectory } from './components/Trajectory';

function App() {
  return (
    <div className="App">
    <Background />
    <NavBar />
    <Banner />
    <SkillsSection />
    <Trajectory />
    </div>
  );
}

export default App;
