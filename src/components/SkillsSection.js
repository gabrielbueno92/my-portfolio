import { Container } from "react-bootstrap"
import { SkillCards } from "./SkillCard";
import './SkillSection.css'

export const SkillsSection = () => {
    return (
        <Container className="skillSection">
            <h2>Skills</h2>
            <SkillCards></SkillCards>
        </Container>

);}