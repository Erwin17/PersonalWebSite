import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import {Link}  from "react-router-dom";



export default function sidebar(){


    return (
        <div id="sidebar">
          
          <div id="distribu-sidebar">
              <div id="content-logo-title-desk">
                <div id="content-logo-desk"></div>
                <h1>Erwin Corzo</h1>
              </div>
              <div id="item-menu-sidebar">
                    <ul>
                      <li><Link className="link-sidebar" to="/">Home</Link></li>
                      <li><Link className="link-sidebar" to="/about">About Me</Link></li>
                      {/*<li><Link className="link-sidebar" to="/whatido">What I Do</Link></li>*/}
                      <li><Link className="link-sidebar" to="/project">Project</Link></li>
                      <li><Link className="link-sidebar" to="/contact">Contact</Link></li>
                    </ul>
              </div>
            </div>
            <div id="social-network-link">
                <div><a className='icon-link' href="https://www.facebook.com/erwin.corzo.319" target="_blank"><FontAwesomeIcon icon={faFacebook} /> </a></div>
                <div><a className="icon-link" href="https://www.instagram.com/erwin.corzo.319/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></div>
                <div><a className="icon-link" href="https://github.com/Erwin17?tab=repositories"><FontAwesomeIcon icon={faGithub} /></a></div>
            </div>
    </div>
    );
}