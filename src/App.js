import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Background } from './components/Background';

function App() {
  return (
    <div className="App">
    <Background />
    <NavBar />
    <Banner />

    </div>
  );
}

export default App;
