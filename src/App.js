import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar";
import Projects from "./views/projects";
import Contact from "./views/contact";
import AboutMe from "./views/about";
import Certifications from "./views/certifications";
import ReactGA from "react-ga";
import "./styles/app.css";

function App() {
  const basename = process.env.BASENAME || "";
  const [inside, setInside] = useState(false);

  const history = createBrowserHistory();

  useEffect(() => {
    ReactGA.initialize("G-GKD9PYE45N");
    ReactGA.pageview(window.location.pathname);
  });

  history.listen((location) => {
    ReactGA.initialize("G-GKD9PYE45N");
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return (
    <Container fluid className="outside">
      <div
        className="inside"
        onMouseEnter={() => setInside(true)}
        onMouseLeave={() => setInside(false)}
      >
        <BrowserRouter basename={basename} history={history}>
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
            </Container>
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
