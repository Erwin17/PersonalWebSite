import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Sidebar  from './../components/sidebar/sidebar'
import { saveAs } from 'file-saver';

export default function About(){

    const dowloaderfile = () => {
        console.log("Se procede a llamar al archivo");
        saveAs.saveAs("https://drive.google.com/file/d/1WgM_4im-d9Aq44IF31AHYCFQbmecxcU2/view?usp=sharing", "Erwin Yohan Corzo Chourio.pdf");
    }
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
                    {/*<h2>Know <span className='underrescord'>Me</span> More</h2>*/}
                    <h2>Mas <span className='underrescord'>Sobre</span> Mi</h2>
                </div>
            </div> 

                <div id="description-about">

                    <div id="about-content">
                    <h3> Soy <span className='text-principal-color'>Erwin Corzo,</span> un desarrollador de software</h3>

                    <p>Desarrollador de software con sólidos conocimientos en el desarrollo de back-end con Java 8, Junit
5, MySQL, PostgresQL, DynamoDB, Spring Boot, Lambdas AWS, (Mocha, Chai Test Unit Lambda),
JavaScript, Docker, GIT. Implementación de Pipeline CI/CD en Azure Devops.</p>

<p>Experiencia front-end en HTML5, CSS3, TypeScript, Angular y algunas horas de vuelo con React.
También poseo ciertos conocimientos en la nube de AWS (API Gateway, S3, Lambda, RDS ).</p>

<p>Comprometido con entregar código de calidad, limpio y escalable haciendo uso de la programación
funcional e imperativa utilizando lenguaje de programación java.</p>

                        {/*<h3> I'm <span className='text-principal-color'>Erwin Corzo,</span> a software developer</h3>
                        <p>this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false.</p>

                        <p>this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false. this is a text for test, here all is false.</p>*/}
                    </div>
                    
                    <div id="description-table">
                        <ul>
                            <li><span className="fw-table">Name: </span>Erwin Corzo</li>
                            <li><span className="fw-table">Email: </span><span className="text-principal-color">erwinch18@gmail.com</span></li>
                            <li><span className="fw-table">Age: </span>31</li>
                            <li><span className="fw-table">From:</span>Bogotá, Colombia</li>
                        </ul>
                        <button className="btn-dow" onClick={dowloaderfile}>Download CV</button>
                    </div>
                </div>
                <div id="details">
                        <div>
                            <p className="yearx">4+</p>
                            <p className="yeard">Años de Experiencia</p>
                        </div>
                        <div>
                            <p className="yearx">3</p>
                            <p className="yeard">Lenguajes de Programación</p>
                        </div>
                        <div>
                            <p className="yearx">3+</p>
                            <p className="yeard">Proyectos Personales</p>
                        </div>
                </div>
            </div>
        </div>
        {/**/}
    </>);
}