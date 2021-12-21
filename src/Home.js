import React from "react";
import Header from "./components/Header";
import './Home.css';
import Name from './components/Name'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import Footer from './components/Footer';

function Home(){
      return (
        <div>
            <Header/>
            <Name/>
            <Container>
                <Row>
                    <Col className="researchbox">
                        <div className="researchTitle">
                        Research Project
                        </div>
                        <div className="researchBody">
                        Researching on AST - toolbox to compare the performance of search based software testing for self driving cars using AI.
                        </div>
                    </Col>
                    <Col className="hackathonBox">
                    <div className="hackathonTitle">
                        Hackathon
                    </div>
                    <div className="hackathonBody">
                    < div  className="award"> Award: Best use of EchoAR </div>
                    {/* Our project */}
                    <a className="saveTheSea" href ="https://devpost.com/software/save-the-sea">'Save The Sea'</a> was based on the theme of water pollution.
                    </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
      );
    
  }
  
export default Home;