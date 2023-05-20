import { Container, Row, Col } from "react-bootstrap"
import './ContactSection.css'
import { useState } from "react"

export const ContactSection = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({...formDetails, [category]:value})
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        let result = await response.json();
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success: true, message: "Message sent succesfully"});
        } else {
            setStatus({success: false, message: "Something went wrong, please try again late"});
        }
    }

    return (
        <section className="contact" id="contact">
            <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <p>If you want to contact me, you can leave a message in the form on the right or through my social networks. I look forward to your message, I will be happy to answer you as soon as possible.</p>
                </Col>
                <Col md={6}>
                    <form className="form-inner" onSubmit={handlesubmit}>
                        
                        <Row>
                            <div className="fullName">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                            </div>                           
                        </Row>
                            
                    
                        <Row>
                            <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                        </Row>
                        <Row>
                            <input type="text" value={formDetails.subject} placeholder="Subject" onChange={(e) => onFormUpdate('subject', e.target.value)}></input>
                        </Row>
                        <Row>
                            <textarea rows="6" value={formDetails.message} placeholder="Leave your message here." onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        </Row>
                        <button className="send-btn" type="submit"><span>{buttonText}</span></button>
                        {status.message && (
                            <Row>
                             <p className={status.success === false ? "danger" : "success"}>
                                {status.message}
                             </p>
                            </Row>)}
                    </form>
                </Col>
            </Row>
            </Container>
        </section>
    )
}