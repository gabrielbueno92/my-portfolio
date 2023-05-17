import { Row, Col, Container } from "react-bootstrap"
import './Projects.css'
import FilmsAppImg from '../assets/img/films-app.png'
import KanbanImg from '../assets/img/kanban.png'
import AmazonAppImg from '../assets/img/amazon-page.png'
import CyeWebImg from '../assets/img/cye-web.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gitHubIcon from '../assets/img/github_icon.png'
import FocusAppImg from '../assets/img/focus-app.png'
import { Skill } from './Skill'

export const Projects = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const webSite= ["HTML5", "CSS3", "JavaScript"]
    const reactApps =  ["HTML5", "CSS3", "JavaScript", "ReactJS", "Bootstrap"]
    const flutterApps =  ["Dart", "Flutter", "Firebase"]

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-box">
                            <h2>Projects</h2>
                            <p>Personal works I have done</p>
                            <Carousel responsive={responsive} infinite={true} className="projects-slider">
                                <div className="item">
                                    <div className="button">
                                        <a href='https://github.com/gabrielbueno92/films-app' target="_blank" rel="noreferrer"><img className="social" src={gitHubIcon} alt=''/></a>
                                    </div>
                                    <img src={FilmsAppImg} alt="films-app-img"></img>
                                    <h5>Films app</h5>
                                    <div className="skillNames">
                                    {reactApps.map(skill => <Skill skillName={skill}></Skill>) }
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="button">
                                        <a href='https://github.com/gabrielbueno92/kanban-app' target="_blank" rel="noreferrer"><img className="social" src={gitHubIcon} alt=''/></a>
                                    </div>
                                    <img src={KanbanImg} alt="kanban-app-img"></img>
                                    <h5>Kanban app</h5>
                                    <div className="skillNames">
                                    {reactApps.map(skill => <Skill skillName={skill}></Skill>) }
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="button">
                                    <a href='https://github.com/gabrielbueno92/amazon-page' target="_blank" rel="noreferrer"><img className="social" src={gitHubIcon} alt=''/></a>
                                    </div>
                                    <img src={AmazonAppImg} alt="amazon-app-img"></img>
                                    <h5>Amazon product</h5>
                                    <div className="skillNames">
                                    {reactApps.map(skill => <Skill skillName={skill}></Skill>) }
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="button">
                                    <a href='https://github.com/gabrielbueno92/computacionyelectronica' target="_blank" rel="noreferrer"><img className="social" src={gitHubIcon} alt=''/></a>
                                    </div>
                                    <img src={CyeWebImg} alt="cye-web-img"></img>
                                    <h5>Computacion y electronica website</h5>
                                    <div className="skillNames">
                                    {webSite.map(skill => <Skill skillName={skill}></Skill>) }
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="button">
                                    <a href='https://github.com/gabrielbueno92/focusapp' target="_blank" rel="noreferrer"><img className="social" src={gitHubIcon} alt=''/></a>
                                    </div>
                                    <img src={FocusAppImg} alt="focus-app-img"></img>
                                    <h5>FocusApp</h5>
                                    <div className="skillNames">
                                    {flutterApps.map(skill => <Skill skillName={skill}></Skill>) }
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
        
    )
}