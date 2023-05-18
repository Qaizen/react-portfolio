import React from "react";

//import bootstrap styles
import { Container, Row, Col }  from "react-bootstrap";


function Footer() {
  return (
    <footer className="main-footer p-3">
      <Container>
        <Row>
          <Col sm={12} md={6} className="m-md-0">
            <p className="m-md-0 copyright">&copy; 2023 Steve Nguyen</p>
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-md-end justify-content-center"
          >
            <a href="https://github.com/Qaizen" target="_blank" >
              <i className="fa-brands fa-github icon"></i>
            </a>&nbsp;
            <a href="https://www.linkedin.com/in/steveqvnguyen/" target="_blank">
              <i className="fa-brands fa-linkedin icon"></i>
            </a>&nbsp;
            <a href="https://www.instagram.com/stevenguyening" target="_blank" >
              <i className="fa-brands fa-instagram icon"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;