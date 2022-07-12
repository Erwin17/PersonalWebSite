import {BrowserRouter, Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './../components/sidebar/sidebar';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function Contact(props){



    const message = () =>{
        //alert("Sección en Construcción");
        //this.props.history.push("/");
        //<Navigate to="/" replace/>

        /*<BrowserRouter>
            <Routes>
                <Route path="/contact" element={<Navigate to="/" replace/>} />
            </Routes>
        </BrowserRouter>*/
    }

    return (
<div className="container">
   
    
        {/*<div id="menu-mobile">
          <div id="icon-bars">
              <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
          </div>
    </div>*/}
    
    
        {/*=======Sidebar=======*/}
        <Sidebar />
    
        {/*<div id="general-info-content-contact">
            <div id="contact-title">
                <div id="title-content">
                <h2>Ponerse <span className='underrescord'>en Contacto</span></h2>
                    <h2>Get <span className='underrescord'>in Touch</span></h2>
                </div>
            </div> 

            <div id="contact-content">
                <h2>Contenido</h2>
            </div>
    
</div>*/}
     
    </div>
    );
}