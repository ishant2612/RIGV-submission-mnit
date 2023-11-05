import React, { useRef, useState } from "react";
import "./Fpage.css";
import Logo from "../resources/logo.png";
import Cogni from "../resources/cognitive.png";
import Cogni2 from "../resources/cognitive2.png";
import { useLocation } from "react-router-dom";
import LiveCaptioning from "../LiveCaptioning";

// import { useState } from "react";
function Fpage() {
  const [highContrast, setHighContrast] = useState(false);
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };
  const videoRef = useRef(null);
  return (
    <div
      id="main"
      style={{ backgroundColor: highContrast ? "#000" : "#eddcc8" }}
    >
      <div
        className="logo"
        style={{ backgroundColor: highContrast ? "#000" : "#eddcc8" }}
      >
        <img src={Logo} />
        <button onClick={toggleHighContrast}>High Contrast</button>
      </div>
      <div
        id="content"
        style={{
          backgroundColor: highContrast ? "#000" : "#eddcc8",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            backgroundColor: highContrast ? "#000" : "#eddcc8",
            color: highContrast ? "#fff" : "#000",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1>Cognitive Impairment and Its Effects</h1>
        </header>
        <main
          style={{
            color: highContrast ? "#fff" : "#000",
            padding: "20px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="card"
            style={{
              marginBottom: "20px",
              backgroundColor: highContrast ? "#000" : "#eddcc8",
              // color: highContrast ? "#fff" : "#000",
            }}
          >
            <h2
              style={{
                // marginBottom: "20px",
                backgroundColor: highContrast ? "#000" : "#eddcc8",
                // color: highContrast ? "#fff" : "#000",
              }}
            >
              Understanding Cognitive Impairment
            </h2>
            <p>
              Cognitive impairment refers to difficulties in cognitive
              functioning and can affect memory, attention, learning,
              problem-solving, and decision-making. It can be caused by various
              factors such as aging, neurological disorders, or brain injuries.
            </p>
          </div>

          <div className="card" style={{ marginBottom: "20px" }}>
            <h2>Effects of Cognitive Impairment</h2>
            <p>
              Cognitive impairment can have profound effects on everyday life.
              It may lead to difficulties in performing daily tasks, challenges
              in communication, social withdrawal, and a decrease in overall
              quality of life.
            </p>
          </div>

          <div className="card" style={{ marginBottom: "20px" }}>
            <h2>Images</h2>
            <div
              className="image-container"
              style={{
                display: "flex",
                flex: 1,
                width: "100%",
                height: "200px",
                justifyContent: "space-around",
              }}
            >
              <img
                src={Cogni}
                alt="Image 1"
                style={{
                  height: "100%",
                  borderRadius: "8px",
                }}
              />
              <img
                src={Cogni2}
                alt="Image 2"
                style={{ height: "100%", borderRadius: "8px" }}
              />
            </div>
          </div>

          <div className="card">
            <h2>Video: Impact of Cognitive Impairment</h2>
            <div
              className="video-container"
              style={{
                backgroundColor: highContrast ? "#fff" : "transparent",
                position: "absolute",
                margin: "auto",
                width: "55%",
                marginLeft: "22vw",
                // margin: "auto",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                paddingBottom: "30%",
                paddingTop: "30px",
                paddingLeft: "30px",
                paddingRight: "30px",
                marginTop: "10vh",
                height: 0,
              }}
            >
              <video ref={videoRef} controls width="100%">
                <source src="Cognitive dysfunction.mp4" type="video/mp4" />
                <track
                  kind="subtitles"
                  src="vttsub.vtt"
                  label="English"
                  srcLang="en"
                  default
                />
              </video>
            </div>
          </div>
          <div
            className="card"
            style={{
              backgroundColor: highContrast ? "#fff" : "#eddcc8",
              color: highContrast ? "#fff" : "#000",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                color: highContrast ? "#fff" : "#000",
                backgroundColor: highContrast ? "#000" : "#eddcc8",
              }}
            >
              Cognitive impairment refers to difficulties in cognitive
              functioning and can affect memory, attention, learning,
              problem-solving, and decision-making. It can be caused by various
              factors such as aging, neurological disorders, or brain injuries.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Fpage;
