import { Container } from "react-bootstrap"
import { SkillCards } from "./SkillCard";
import './SkillSection.css'

export const SkillsSection = () => {
    return (
        <Container id="skills" className="skillSection">
            <h2>Skills</h2>
            <SkillCards></SkillCards>
        </Container>

);}