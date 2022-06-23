import images from './assets/image/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import Sidebar from './components/sidebar/sidebar';

import {BrowserRouter as Router, Routes, Route, Link, useRoutes} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Whatido from './pages/Whatido';
import Project from './pages/Project';
import Contact from './pages/Contact';

import './App.css';
import './BorderBoxes.css'

function App() {
let element = useRoutes([

    {path: '/', element: <Home />},
    {path: 'about', element: <About />},
    {path: 'whatido', element: <Whatido />},
    {path: 'project', element: <Project />},
    {path: 'contact', element: <Contact />},
    {path: '*', element: <Home />}
    
]);
return element;
}

export default App;
