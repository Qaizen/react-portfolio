import React from "react";
import { Row, Image, Container } from "react-bootstrap";
import SteveImg from "../../assets/Steve-img.jpg";

function About() {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row className="about-container">
          <h1 className="title" >
            About Me
          </h1>
          <div className="d-flex justify-content-around">
            <div sm={12} md={6} lg={4} className="p-2 ">
              <Image src={SteveImg} width="280vw" height="380vw" />
            </div>
            <div className="p-3">
              <p classname="about-text">
                I'm a Full Stack Web Developer and Rad Dad of 2.  I am proficient in JavaScript, CSS, HTML, Bootstrap, MySQL, React, Node.js, Express.js, MongoDB, Apollo GraphQL, and GIT/Github. When I'm not coding I enjoy martial arts, traveling, and unlocking new experiences wih the fam.   I look forward to working with you in the near future!
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default About;