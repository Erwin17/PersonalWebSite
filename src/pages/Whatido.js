import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './../components/sidebar/sidebar';
import {faBars} from '@fortawesome/free-solid-svg-icons';


export default function Whatido (){

    return (
        <div className="container">
        <div id="menu-mobile">
          <div id="icon-bars">
              <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
          </div>
        </div>
    
    
        {/*=======Sidebar=======*/}
        <Sidebar />
    
        <div id="content">
                
                what i do
    
        </div>
    
    </div>
    );
}