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
             
                <Name/>
                <Footer/>
        </div>
      );
    
  }
  
export default IndustryProject;