import React from "react";
import Header from "./components/Header";
import './Internship.css';
import Name from './components/Name'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import Footer from './components/Footer';

function IndustryProject(){
      return (
        <div>
            <Header/>
             <Container>
                <Row>
                    <div className="internshipTitle">CO-CURRICULAR ACTIVITIES</div>
                    <Col className="internshipBox">
                        <Row>
                        <div className="internship">
                            <div className="internshipDate"> June 2020 - July 2021 </div>
                            <div className="internshipHeading"> Lead software developer </div>
                            <div className="internshipCompany"> Monash YoungTech Innovators </div>
                            <div className="internshipBody">
                            <br/>I worked on the initiation and usability on a project called 'Project Teddy Bear' which is being made for children of parents suffering from MS. 
                            <br/> I worked on requirement gathering, wire framing and user interviewing. I also recruited more software engineers for the team.
                            </div>
                            </div>
                            </Row>
                            <Row>
                            <div className="space"></div>
                            </Row>
                            <Row>
                            <div className="internship">
                            <div className="internshipDate"> April 2020 - November 2020 </div>
                                <div className="internshipHeading"> Web Development Volunteer </div>
                                <div className="internshipCompany"> We Are Together </div><br/>
                                <div className="internshipBody">HTML, CSS, Bootstrap, Javascript, MDL<br/>
                                <br/>
                                I joined the organisation as a volunteer and transitioned as a web developer. I built a static website for the social enterprise.</div>
                            </div>
                            </Row>
                            <Row>
                            <div className="space"></div>
                            </Row>
                            <Row>
                            <div className="internship">
                            <div className="internshipDate"> June 2020 - July 2020 </div>
                                <div className="internshipHeading"> Hackathon Organiser </div>
                                <div className="internshipCompany"> Monash Engineering Faculty </div><br/>
                                <div className="internshipBody">Management, Organization, Communication. Planning<br/>
                                <br/>
                                I was in the core organising team for a faculty-wide held Hackathon. <br/>
                                I was involved in the planning, organising and all activities relating to pre, post and during the Hackathon. It was held online, with 200+ participants. 
                                I also volunteered at the tech-henpdesk at the Hackathon.                            
                                </div></div>
                            </Row>
                        </Col>
                        <div className="internshipTitle"><br/>EXTRA-CURRICULAR ACTIVITIES</div>
                    <Col className="internshipBox">
                        <Row>
                        <div className="internship">
                            <div className="internshipDate"> August 2020 - June 2021 </div>
                            <div className="internshipHeading"> Business And Operations Coordinator </div>
                            <div className="internshipCompany"> Monash Robogals </div>
                            <div className="internshipBody">
                            <br/>I worked with partner and sponsor industries, to organise events, workshops with Robogals. 
                            <br/>The role also involved renewing and making contracts and organising in-person and online events. I was involved in organising and planing events: 
                            <br/> Hackathon, Mentorship Hub by KPMG, Robogals Mentorship Program and Annual Industry and Alumni Night, Deloitte Impact Day.
                            </div>
                            </div>
                            </Row>
                            <Row>
                            <div className="space"></div>
                            </Row>
                            <Row>
                            <div className="internship">
                            <div className="internshipDate"> September 2020 - December 2020 </div>
                                <div className="internshipHeading"> Student Wellbeing Ambassador </div>
                                <div className="internshipCompany"> Monash University </div><br/>
                                <div className="internshipBody">Student wellbeing, Communication, Idiation, Planning<br/>
                                <br/>
                                I was involved in the planning of online events relating to student wellbeing, to underlay the stress caused during the times of lockdown to students.
                                </div></div>
                            </Row>
                            <Row>
                            <div className="space"></div>
                            </Row>
                            <Row>
                            <div className="internship">
                            <div className="internshipDate"> November 2020 - December 2020 </div>
                                <div className="internshipHeading"> Engineering Peer Mentor </div>
                                <div className="internshipCompany"> Engineering Faculty - Monash University </div><br/>
                                <div className="internshipBody">Guiding, Organization, Communication. Planning<br/>
                                <br/>
                                I along with my co-mentor, helped and guided engineering students in their first semester, to transition into university. <br/>
                                This involved organising group mentoring sessions, sharing personal university experience and inform students about the happenings at university. 
                                I also helped them with questions they had.                    
                                </div></div>
                            </Row>
                            <Row>
                            <div className="space"></div>
                            </Row>
                            <Row>
                            <div className="internship">
                            <div className="internshipDate"> March 2020 - June 2020 </div>
                                <div className="internshipHeading"> IT Peer Mentor </div>
                                <div className="internshipCompany"> IT Faculty - Monash University </div><br/>
                                <div className="internshipBody">Guiding, Organization, Communication. Planning<br/>
                                <br/>
                                 I mentored a first semester IT student at university. <br/> 
                                 This involved informing them about university services, groups and including them in activities relating to first-years. 
                                 I also mentored them with guidance based on my personal experience.
                                </div></div>
                            </Row>
                        </Col>
                    </Row>
                </Container> 
                <Name/>
                <Footer/>
        </div>
      );
    
  }
  
export default IndustryProject;