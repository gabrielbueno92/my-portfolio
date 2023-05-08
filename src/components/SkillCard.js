import { Container } from "react-bootstrap"
import { Skill } from "./Skill"

export const SkillCard = (title, img, skillName) => {
    return (
        <Container>
            <h3>{title}</h3>
            <img src={img}></img>
            <Skill>{skillName}</Skill>
        </Container>
)}