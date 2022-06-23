import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './../components/sidebar/sidebar';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';

export default function Home(){

    const navigate = useNavigate();


    const redirectoAbout = () => {
            console.log("se redirecciona a about");
            navigate('/about');
    }

    return (
        <div className="container">
            <div id="menu-mobile">
            <div id="icon-bars">
                <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
            </div>
            </div>


    {/*=======Sidebar=======*/}
    <Sidebar />

    <div id="general-info-content-home">
            <div>
            <div id="content-logo"></div>
            <div id="personal-description">
                    <h1>I'm Erwin Corzo. <span>Software Developer</span></h1>
                    <p>I am a software developer based in a beautiful  country called Colombia. I'm Venezuelan of birth. I'm am passionate about building excellent software that improves the lives of those around me.</p>
            </div>
            <div id="buttom-about-me">
                <button id="btn-about" onClick={redirectoAbout}>MORE ABOUT ME</button>
            </div>
            </div>    
        </div>
        
</div>
    );
}