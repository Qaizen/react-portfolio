// import React, { useState } from "react";
import Header from "../Header";
import Banner from "../Banner";
import About from "../About";
import Footer from "../Footer";
import ContactForm from "../Contact";
import Project from "../Project";
import Resume from "../Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function MainContainer({setPage}) {
  return (
    <Router>
      <Header setPage={setPage}/>
      <Switch>
        <Route exact path="/react-portfolio/" component={About} />
        <Route exact path="/react-portfolio/about" component={About} />
        <Route exact path="/react-portfolio/portfolio" component={Project} />
        <Route exact path="/react-portfolio/resume" component={Resume} />
        <Route exact path="/react-portfolio/contact" component={ContactForm} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default MainContainer;