import { Container } from "react-bootstrap";
import { ArrowDownCircle, ArrowRightCircle, Download } from "react-bootstrap-icons";
import resumepdf from '../assets/resume.pdf'
import { useEffect, useState } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const toRotate = ["Software Engineer", "Software Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h2>{`Hi, I'm `}<br/></h2><h1>{`Gabriel Bueno`}<br/>
                        <span className="wrap">{text}</span></h1><p>Bachelor's Degree in Software Engineering with 2+ years of experience working as a Backend Developer (Java, Spring, Maven, MySQL, API Rest). Knowledge of HTML5, CSS3, Javascript and React. Passion for technology and acquiring new insights every day. Arriving in Sydney, Australia on June, 10 2023 on a working holiday visa (462).</p>
                        
                        <Container className="container-btn">
                        <button className="btn-connect" onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle></ArrowRightCircle> </button>
                        <a href={resumepdf} download={`Resume - Gabriel Bueno`}><button className="btn-resume" onClick={() => console.log('downloading resume')}>Download resume <ArrowDownCircle></ArrowDownCircle> </button></a>
                        </Container>
            </Container>

        </section>
    )
}