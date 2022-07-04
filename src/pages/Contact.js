import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './../components/sidebar/sidebar';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function Contact(){

    return (
<div className="container">
        <div id="menu-mobile">
          <div id="icon-bars">
              <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
          </div>
        </div>
    
    
        {/*=======Sidebar=======*/}
        <Sidebar />
    
        <div id="general-info-content-contact">
            <div id="contact-title">
                <div id="title-content">
                    <h2>Get <span className='underrescord'>in Touch</span></h2>
                </div>
            </div> 

            <div id="contact-content">
                <h2>Contenido</h2>
            </div>
    
        </div>
    
    </div>
    );
}