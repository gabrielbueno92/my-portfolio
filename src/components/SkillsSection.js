import { Container } from "react-bootstrap"
import { SkillCards } from "./SkillCard";

export const SkillsSection = () => {
    return (
        <Container className="skillSection">
            <h2>Skills</h2>
            <SkillCards></SkillCards>
        </Container>

);}