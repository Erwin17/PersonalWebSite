import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import Sidebar  from './../components/sidebar/sidebar'

export default function About(){

    return (
        <>
        <div className="container">
            <div id="menu-mobile">
                <div id="icon-bars">
                    <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
                </div>
            </div>
            
        <Sidebar />

        <div id="general-info-content-about">
            
            <div id="personal-title">
                <h1>ABOUT ME. <span>Software Developer</span></h1>
            </div> 

            <div id="description-about">
                personal description
            </div>
            <div id="description-table">
                table description
            </div>
            <div id="details">
                Details footer
            </div>
        </div>


        </div>



        {/**/}
    </>);
}