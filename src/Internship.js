import React from "react";
import Header from "./components/Header";
import './Internship.css';
import Name from './components/Name'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import Footer from './components/Footer';

function Home(){
      return (
        <div>
            <Header/>
             <Container>
                <Row>
                    <div className="internshipTitle">INTERNSHIPS</div>
                    <Col className="internshipBox">
                        <Row>
                        <div className="internship">
                            <div className="internshipDate"> December 2021 - Present </div>
                            <div className="internshipHeading"> Software Engineer Intern </div>
                            <div className="internshipCompany"> Glasswing </div>
                            <div className="internshipBody"></div>
                        </div>
                        </Row>
                        <Row>
                        <div className="space"></div>
                        </Row>
                        <Row>
                        <div className="internship">
                            <div className="internshipDate"> December 2020 - January 2021 </div>
                            <div className="internshipHeading"> Full stack web development Intern </div>
                            <div className="internshipCompany"> Exademy </div><br/>
                            <div className="internshipBody">Node EJS, MongoDB, CSS, BootStrap, AWS EC2, AWS Route45, AWS S3 Bucket<br/>
                            <br/>
                            I made a dynamic website for both, the user and the admin side.<br/> The admin side included them being able to add MCQ and Subjective questions and answers and notes for different topics. 
                            <br/>The user side included being able to take the quiz, view notes and question - answers. The website was optimized for phone and multiple devices.</div>
                        </div>
                        </Row>
                        <Row>
                        <div className="space"></div>
                        </Row>
                        <Row>
                        <div className="internship">
                            <div className="internshipDate"> January 2020 - February 2020 </div>
                            <div className="internshipHeading">Software Architect Intern</div>
                            <div className="internshipCompany"> Punjab National Bank MetLife (PNB MetLife)  </div><br/>
                            <div className="internshipBody">Python, Comparative Analysis, SAS Visa<br/>
                            <br/>
                            I was responsible for researching and recommending a technical deployment platform for the internal workings of the company. 
                            <br/> I made user personas to focus my research on the user.
                            </div>
                        </div>
                        </Row>
                        <Row>
                        <div className="space"></div>
                        </Row>
                        <Row>
                        <div className="internship">
                            <div className="internshipDate"> January 2020 - February 2020 </div>
                            <div className="internshipHeading"> Software Developer Intern </div>
                            <div className="internshipCompany"> National Institute Of Information and Technology (NIIT) </div><br/>
                            <div className="internshipBody">Node EJS, MongoDB, CSS, BootStrap, AWS EC2, AWS Route45, AWS S3 Bucket<br/>
                            <br/>
                            Java<br/>
                            I worked on the backend of a quiz game to make learning and teaching easy for students and teachers at the institute. <br/>
                            Now has been developed with front end to be used for assessing student progress.
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
  
export default Home;