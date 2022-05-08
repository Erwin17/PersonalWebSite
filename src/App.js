import images from './assets/image/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  return (

  
<div className="container">
    <div id="menu-mobile">
      <div id="icon-bars" style={{color: "red", fontSize: "36px"}}>
          <FontAwesomeIcon icon={faBars} />
      </div>
    </div>

    <div id="description">
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

    
    {/*<div id="menu">
    <FontAwesomeIcon icon={faHouse} />
    <FontAwesomeIcon icon={faUserLarge} />
    <FontAwesomeIcon icon={faBriefcase} />
    <FontAwesomeIcon icon={faAddressBook} />
    </div>*/}

</div>
  );
}

export default App;
