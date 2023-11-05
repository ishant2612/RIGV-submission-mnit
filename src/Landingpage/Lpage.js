import React, { useEffect } from "react";
import "../Landingpage/Lpage.css";
// import "../Landingpage/Lpage2.css";
import Logo from "../resources/logo.png";
import Dis from "../resources/dis-illu.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Lpage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [highContrast, setHighContrast] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  console.log(mousePosition);
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      //   display: "none",
      backgroundColor: highContrast ? "#fff" : "#000",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    image: {
      //   display: "none",
      backgroundColor: "transparent",
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const imgEnter = () => setCursorVariant("image");
  return (
    <div
      id="main"
      style={{ backgroundColor: highContrast ? "#000" : "#eddcc8" }}
    >
      <div id="nav">
        <img src={Logo} />
        <button onClick={toggleHighContrast}>High Contrast</button>
      </div>
      <div id="page1">
        <div id="hero">
          <div onMouseEnter={textEnter} onMouseLeave={textLeave} id="hero-text">
            <h1 id="heading" style={{ color: highContrast ? "#fff" : "#000" }}>
              Helping
              <span
                id="head-hand"
                style={{ color: highContrast ? "#ff0000" : "#687dac" }}
              >
                Hand
              </span>
            </h1>
            <p id="head-text" style={{ color: highContrast ? "#fff" : "#000" }}>
               We're 'Opening Online Doors, Bridging Abilities' to 'Redefine Web Access.' Our mission is to 'Unlock the Web's Potential' for 'One Web, One World'—a place of diversity, inclusion, and equitable online experiences
            </p>
            <Link to="/fpage">
              <div
                style={{
                  backgroundColor: highContrast ? "#000" : "#fff",
                  color: highContrast ? "#fff" : "darkblue",
                  borderRadius: "50%",
                  width: "25px",
                  padding: "0px 10px 0px 10px",
                  marginLeft: "10vw",
                  marginTop: "20px",
                }}
              >
                &gt;
              </div>
            </Link>
          </div>
          <div onMouseEnter={imgEnter} onMouseLeave={textLeave} id="hero-img">
            <img src={Dis} />
          </div>

          <motion.div id="cursor" variants={variants} animate={cursorVariant} />
        </div>
      </div>
      <div id="page2" style={highContrast ? { backgroundColor: "#000" } : {}}>
        <h1 style={{ color: highContrast ? "#fff" : "#000" }}>
          Tell us about your disability
        </h1>
        <div
          id="form_content"
          style={{ backgroundColor: highContrast ? "#fff" : "transparent" }}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <FormControlLabel
                value="Visual"
                control={<Radio />}
                label="Visual"
              />
              <FormControlLabel
                value="Hearing"
                control={<Radio />}
                label="Hearing"
              />
              <FormControlLabel
                value="Physical"
                control={<Radio />}
                label="Physical"
              />
            </RadioGroup>
          </FormControl>
          {/* Conditionally render the Link based on the selectedValue */}
          {selectedValue === "Visual" && (
            <Link to={{ pathname: "/fpage" }}>
              <Button variant="contained">Submit</Button>
            </Link>
          )}
          {selectedValue === "Hearing" && (
            <Link to={{ pathname: "/cpage" }}>
              <Button variant="contained">Submit</Button>
            </Link>
          )}
          {selectedValue === "Physical" && (
            <Link to={{ pathname: "/ppage" }}>
              <Button variant="contained">Submit</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lpage;
