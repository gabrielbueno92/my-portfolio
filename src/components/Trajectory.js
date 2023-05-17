import { Container } from 'react-bootstrap';
import './Trajectory.css';
import {ReactComponent as WorkIcon} from "../assets/img/work.svg";
import {ReactComponent as EducationIcon} from "../assets/img/education.svg";
import {ReactComponent as WebIcon} from "../assets/img/internet-s.svg";
import { timelineElements } from "../assets/timelineElements"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

export const Trajectory = () => {
  let workIconStyles = { background: "#2f3e46" };
  let educationIconStyles = { background: "#84a98c" };

  return (
    <Container id="trajectory" className="trajectory">
        <h2>Trajectory</h2>
        <h4 className='subtitle'>Education & professional experience</h4>
        <VerticalTimeline>
          {
            timelineElements.map(element => {
              let isWorkIcon = element.icon === "work";
              let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
              let isMercadoLibreWeb = element.location === "Mercado Libre - Cordoba, Argentina";
              const hrefMercadoLibre = "https://mercadolibre.com.ar"
              const hrefNaranjaX = "https://www.naranjax.com/"

              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName='date'
                  iconStyle={isWorkIcon ? workIconStyles : educationIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <EducationIcon /> }
                >
                <h4 className='vertical-timeline-element-title'>{element.title}</h4>
                <h5 className='vertical-timeline-element-subtitle'
                >{element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && <a className={`button ${isWorkIcon ? "workButton" : "educationButton"}`} href={isMercadoLibreWeb ? hrefMercadoLibre : hrefNaranjaX} target="_blank" rel="noreferrer">{element.buttonText} <WebIcon></WebIcon></a>}
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
    </Container>
  );
}