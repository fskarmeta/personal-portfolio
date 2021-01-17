import {
  Image,
  Accordion,
  Card,
  Button,
  useAccordionToggle,
} from "react-bootstrap";
import React, { useState } from "react";
import { TagCloud } from "react-tagcloud";

const testArr = [
  { p: "esto es una prueba" },
  { p: "esto es una prueba dos" },
  { p: "esto es una prueba tres" },
];

const data = [
  { value: "jQuery", count: 25 },
  { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 },
  { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 },
  { value: "React", count: 27 },
  { value: "Python", count: 27 },
  { value: "Flask", count: 7 },
  { value: "NPM", count: 11 },
];

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: "blinker 3s linear infinite",
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: "3px",
      padding: "3px",
      display: "inline-block",
      color: "black",
    }}
  >
    {tag.value}
  </span>
);

const Test = () => {
  const [text, setText] = useState("");

  function displayText(text) {
    setText(text);
  }

  function clearText() {
    setText("");
  }

  return (
    <div>
      <h1>Test</h1>
      {testArr.map((e, i) => (
        <p
          key={i}
          onMouseOver={() => displayText(e.p)}
          onMouseLeave={() => clearText()}
        >
          {e.p}
        </p>
      ))}

      <div className="bg-danger w-50 h-100">{text}</div>
      <div>
        <Image
          src="https://raw.githubusercontent.com/fskarmeta/react-tic-tac-toe/master/gif.gif"
          alt="test"
          fluid
          style={{ width: "25rem", height: "30rem" }}
        />
      </div>
      <div className="mt-5">
        <TagCloud
          tags={data}
          minSize={1}
          maxSize={5}
          renderer={customRenderer}
        />
      </div>
    </div>
  );
};

export default Test;
