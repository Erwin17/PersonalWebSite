import images from './assets/image/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import './BorderBoxes.css'

function App() {
  return (

  
<div className="container">
    <div id="menu-mobile">
      <div id="icon-bars">
          <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
      </div>
    </div>


            {/*=========Sidebar=======*/}
    <div id="sidebar">
          
          <div id="distribu-sidebar">
              <div id="content-logo-title-desk">
                <div id="content-logo-desk"></div>
                <h1>Erwin Corzo</h1>
              </div>
              <div id="item-menu-sidebar">
                  <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Project</li>
                    <li>Curriculum Vitae</li>
                    <li>Contact</li>
                  </ul>
              </div>
            </div>
            <div id="social-network-link">
                <div><a href="https://www.facebook.com/erwin.corzo.319" target="_blank"><FontAwesomeIcon icon={faFacebook} /> </a></div>
                <div><a href="https://www.instagram.com/erwin.corzo.319/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></div>
                <div><a href="https://github.com/Erwin17?tab=repositories"><FontAwesomeIcon icon={faGithub} /></a></div>
            </div>

          
          

          
    </div>

    <div id="content">
        
        <div id="general-info-content">
            <div>
              <div id="content-logo"></div>
              <div id="personal-description">
                    <h1>I'm Erwin Corzo. <span>Software Developer</span></h1>
                    <p>I am a software developer based in a beautiful  country called Colombia. I'm Venezuelan of birth. I'm am passionate about building excellent software that improves the lives of those around me.</p>
              </div>
              <div id="buttom-about-me">
                  <button id="btn-about">MORE ABOUT ME</button>
              </div>
            </div>    
        </div>
    </div>

</div>
  );
}

export default App;
