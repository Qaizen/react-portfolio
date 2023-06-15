import React from "react";
import ProjectCard from "../ProjectCard.js";
import "animate.css";
import TrackVisibility from "react-on-screen";

//import react-bootstrap style
import { Container, Row, Col } from "react-bootstrap";

//import images for portfolio
import project1 from "../../assets/HobbyBox.jpeg";
import project2 from "../../assets/TechBlog.jpeg";
import project3 from "../../assets/weatherdash.jpeg";
import project4 from "../../assets/CodeQuiz2.jpg";
import project5 from "../../assets/HappyHour.png";
import project6 from "../../assets/curious2.jpeg";

function Project() {
  const projects = [
    {
      title: "Hobby Box",
      description:
        "A Fullstack E-commerce application for monthly subscription where clients can susbscribe to a hobby box of your choice.",
      imgUrl: project1,
      gitLink: "https://github.com/Qaizen/hobby-box",
      link:"https://hobbybox.herokuapp.com/"
    },
    {
      title: "Tech Blog",
      description: "CMS style tech blog.",
      imgUrl: project2,
      gitLink: "https://github.com/Qaizen/tech-blog",
      link:"https://github.com/Qaizen/tech-blog"
    },
    {
      title: "Weather Dashboard",
      description: "Front end API weather dashboard.",
      imgUrl: project3,
      gitLink: "https://github.com/Qaizen/WeatherDashboard",
      link:"https://qaizen.github.io/WeatherDashboard/"
    },    
    {
      title: "Code Quiz",
      description:
        "Timed code quiz with multiple-choice questions.",
      imgUrl: project4,
      gitLink: "https://github.com/Qaizen/Code-Quiz",
      link: "https://qaizen.github.io/Code-Quiz/"
    },
    {
      title: "The Happy Hour",
      description:
        "Front end application to locate nearby breweries or find a cocktail recipe.",
      imgUrl: project5,
      gitLink: "https://github.com/Qaizen/TheHappyHour",
      link:"https://qaizen.github.io/TheHappyHour/"
    },
    {
      title: "Curious Chronicles",
      description: "Online family journal",
      imgUrl: project6,
      gitLink: "https://github.com/Qaizen/curious-chronicles",
      link:"https://project3-test.herokuapp.com/"
    },
  ];

  return (
    <section className="project" id="portfolio">
      <Container>
        <Row>
        <h2 className="title" style={{textAlign: "center"}}>Portfolio Projects</h2>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                    
                  </Row>
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
