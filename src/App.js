// import flow from './flow.svg';
import './App.css';
import {NavBar} from './My_Component/NavBar'; 
import {Banner} from './My_Component/Banner'; 
import {Skills} from './My_Component/Skills';
import {Hard_skills} from './My_Component/Hard_skills';
import {Projects} from './My_Component/Projects';
import { Contact } from "./My_Component/Contact";
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
