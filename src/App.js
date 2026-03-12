// import flow from './flow.svg';
import './App.css';
import {NavBar} from './components/Navbar'; 
import {Banner} from './components/Banner'; 
import {Skills} from './components/Skills';
import {Hard_skills} from './components/Hardskills';
import {Projects} from './components/Projects';
import { Contact } from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Hard_skills />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
