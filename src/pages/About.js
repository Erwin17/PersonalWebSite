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
                <div id="title-content">
                    <h2>Know <span className='underrescord'>Me</span> More</h2>
                </div>
            </div> 

                <div id="description-about">

                    <div id="about-content">
                        <h3> I'm <span className='text-principal-color'>Erwin Corzo,</span> a software developer</h3>
                        <p>this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false.</p>

                        <p>this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false.</p>
                    </div>
                    
                    <div id="description-table">
                        <ul>
                            <li><span className="fw-table">Name: </span>Erwin Corzo</li>
                            <li><span className="fw-table">Email: </span><span className="text-principal-color">erwinch18@gmail.com</span></li>
                            <li><span className="fw-table">Age: </span>33</li>
                            <li><span className="fw-table">From:</span>Bogotá, Colombia</li>
                        </ul>
                        <button className="btn-dow">Download CV</button>
                    </div>
                </div>
                <div id="details">
                        <div>
                            <p className="yearx">5+</p>
                            <p className="yeard">Years Experiance</p>
                        </div>
                        <div>
                            <p className="yearx">3+</p>
                            <p className="yeard">Lenguaje Programing</p>
                        </div>
                        <div>
                            <p className="yearx">3+</p>
                            <p className="yeard">Personal Project</p>
                        </div>
                </div>
            </div>
        </div>
        {/**/}
    </>);
}