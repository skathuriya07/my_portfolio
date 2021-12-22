import React from "react";
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Name(){
      return (
        <div className="footer">
            <div className="footerHeading">About Me</div>
            <div className="aboutMe">
            <img className="picture" src={"https://media-exp1.licdn.com/dms/image/C5603AQFrjdXP0RgpMQ/profile-displayphoto-shrink_800_800/0/1611948498457?e=1645660800&v=beta&t=c3MIrGpeLEcHDGZqKyXgA48D6AHccQVBo2Vbm4dSfBw"} alt="BigCo Inc. logo"/>

                Hi, I am Shreya Kathuriya!<br/><br/>   I am currently in my final semester of Software Engineering (honours).<br/> 
                I was born in India, completed my high school there and now am studying at Monash University.<br/>  
                I am eager to see where life takes me next!<br/><br/>  
                Apart from coding, I like engaging in activities like painting, playing the piano, 
                graphology, making videos and clicking pictures!
            </div>
            <div className="socials">
                <div className="icon"><a href="https://www.instagram.com/photoshreya/"><InstagramIcon/> Photography</a></div>
                <div className="icon"><a href="https://github.com/skathuriya07?tab=repositories"><GitHubIcon/> Projects</a></div>
                <div className="icon"><a href="https://www.youtube.com/channel/UCff7-5D14AgWs5TVe0lKoyw"><YouTubeIcon/> Travel And Creative</a></div>
                <div className="icon"><a href="https://www.instagram.com/parvtherapy/"><InstagramIcon/> Graphology</a></div>
                <div className="icon"><a href="https://www.linkedin.com/in/shreyakathuriya/"><LinkedInIcon/> About Me</a></div>
            </div>

        </div>
    );
    
  }
  
  export default Name;