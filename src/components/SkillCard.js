import { Container } from "react-bootstrap"
import React from 'react'
import backendImg from "../assets/img/backend.png"
import frontEndImg from "../assets/img/frontend.png"
import toolImg from "../assets/img/tool.png"
import { Skill } from "./Skill"
import './SkillCard.css'


export const SkillCards = () => {

  const frontendSkills = ["HTML5", "CSS3", "JavaScript", "ReactJS", "Bootstrap", "Flutter"]
  const backendSkills = ["Java", "Spring", "Maven", "Dart", "Hibernate", "JUnit", "Flutter", "API Rest", "RESTful API", "MySQL"]
  const toolsSkills = ["Git", "GitHub", "Agile", "Scrum", "Kanban", "Jira"]
    
  return (
    <Container className="skillCardsList">
      <Container className="card">
        <h4>Front End</h4>
        <img className="skillImg" src={frontEndImg} alt="frontEndImg"></img>
        <div className="skillNames">
         {frontendSkills.map(skill => <Skill skillName={skill}></Skill>) }
        </div>
        
      </Container>
      <Container className="card">
        <h4>Back End</h4>
        <img className="skillImg" src={backendImg} alt="backEndImg"></img>
        <div className="skillNames">
          {backendSkills.map(skill => <Skill skillName={skill}></Skill>) }
        </div>
      </Container>
      <Container className="card">
        <h4>Tools/Methodologies</h4>
        <img className="skillImg" src={toolImg} alt="toolImg"></img>
        <div className="skillNames">
          {toolsSkills.map(skill => <Skill skillName={skill}></Skill>) }
        </div>
      </Container>
    </Container>
    
  )
}