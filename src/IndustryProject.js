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
                    <div className="internshipTitle">INDUSTRY PROJECTS</div>
                    <Col className="internshipBox">
                        <Row>
                        <div className="internship">
                            <div className="internshipDate"> March 2021 - October 2021 </div>
                            <div className="internshipHeading"> Project Manager and Software Engineer </div>
                            <div className="internshipCompany"> DigiCor </div>
                            <div className="internshipBody">
                            As a project manager, I directly communicated with the client, lead project demos,communication and negotiation of requirements.
                            We followed a scrum approach. <br/>
                            As a software engineer, I worked on a web crawler and admin dashboard. Technologies used were python, docker, mongoDB, JS. <br/>
                            We developed it using Django. For CI/CD pipeline testing, we used linter and flake8. <br/> I am also responsible to make unittest cases and related documents for the project.
                            </div>
                            </div>
                            </Row>
                            <Row>
                            <div className="space"></div>
                            </Row>
                            <Row>
                            <div className="internship">
                            <div className="internshipDate"> March 2020 - October 2020 </div>
                                <div className="internshipHeading"> Project Manager and Software Engineer </div>
                                <div className="internshipCompany"> MyOnlineTutor </div><br/>
                                <div className="internshipBody">Node EJS, MongoDB, CSS, BootStrap, AWS EC2, AWS Route45, AWS S3 Bucket<br/>
                                <br/>
                              As a project manager, I directly communicated with the client and project managers of other teams working on the project. 
                              I lead project demos, communication and negotiation of requirements. <br/>
                              I was involved in the planning of requirement implementation and creating the roadmap for the project.
                              <br/>We followed a scaled-agile approach.
                              <br/>As a software engineer, I worked on the user side of the web-app. In the online tutoring app, my team and I worked with AWS and React to create micro services.</div>
                            </div>
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