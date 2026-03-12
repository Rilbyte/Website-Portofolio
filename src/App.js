// import flow from './flow.svg';
import './App.css';
import {NavBar} from './components/Navbar'; 
import {Banner} from './components/Banner'; 
import {Skills} from './components/Skills';
import {HardSkills} from './components/HardSkills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <HardSkills />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
