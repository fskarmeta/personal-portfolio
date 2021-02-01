import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Container } from "react-bootstrap";
import Navbar from "./components/navbar";
import Projects from "./views/projects";
import Contact from "./views/contact";
import AboutMe from "./views/about";
import Certifications from "./views/certifications";
import Analytics from "react-router-ga";
import "./styles/app.css";

function App() {
  const basename = process.env.BASENAME || "";
  const [inside, setInside] = useState(false);

  return (
    <Container fluid className="outside">
      <div
        className="inside"
        onMouseEnter={() => setInside(true)}
        onMouseLeave={() => setInside(false)}
      >
        <BrowserRouter basename={basename}>
          <Analytics id="UA-182868256-1">
            <Navbar />
            <Switch>
              <Container fluid>
                <Route exact path="/">
                  <Contact inside={inside} />
                </Route>
                <Route exact path="/projects">
                  <Projects />
                </Route>
                <Route exact path="/about">
                  <AboutMe />
                </Route>
                <Route exact path="/certificates">
                  <Certifications />
                </Route>
                <Redirect from="/:any" to="/" />
              </Container>
            </Switch>
          </Analytics>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
