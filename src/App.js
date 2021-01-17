import { BrowserRouter, Route, Switch } from "react-router-dom";

import Test from "./test.js";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar";
import Projects from "./views/projects";
import "./styles/app.css";

function App() {
  const basename = process.env.BASENAME || "";

  return (
    <div className="outside">
      <div className="inside">
        <Navbar />
        <BrowserRouter basename={basename}>
          <Container fluid>
            <Projects />
          </Container>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
