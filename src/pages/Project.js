import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './../components/sidebar/sidebar';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function Project (){

    return (
        <div className="container">
        <div id="menu-mobile">
        <div id="icon-bars">
            <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
        </div>
        </div>


{/*=======Sidebar=======*/}
<Sidebar />

        <div id="general-info-container">
                
                <div id="title-project">
                    <div id="title-content-project">
                        <h2><span className='underrescord'>My</span> Projects</h2>
                    </div>
                </div>

                <div id="details-project">
                    <div className="itembox">Project 1</div>
                    <div className="itembox">Project 2</div>
                    <div className="itembox">Project 3</div>
                    <div className="itembox">Project 4</div>
                    <div className="itembox">Project 5</div>
                    <div className="itembox">Project 6</div>
                    <div className="itembox">Project 7</div>
                </div>
        </div>


</div>
    );
}