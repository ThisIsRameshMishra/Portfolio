
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./About";
import Home from "./Home";
import './index.css'
import Contact from "./Contact";
import Service from "./Service";
import Navbar from './Navbar';
import Footer from "./Footer";
import Project from "./Project";
import Certificate from "./Certificate";
import { Redirect, Route, Switch } from 'react-router-dom';
function App() {
  return (
   <>
  
   <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/project" component={Project}/>
    <Route exact path="/certificate" component={Certificate}/>
    <Redirect to="/"/>
  </Switch>
  <Footer/>
   </>
  );
}

export default App;
