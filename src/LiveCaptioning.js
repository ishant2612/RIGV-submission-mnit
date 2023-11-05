import React, { useRef, useState, useEffect } from "react";

const LiveCaptioning = () => {
  const videoRef = useRef(null);
  const [captions, setCaptions] = useState("");
  const [subtitleCues, setSubtitleCues] = useState([]);

  useEffect(() => {
    const video = videoRef.current;

    // Load WebVTT subtitle track
    const track = video.addTextTrack("captions", "Captions", "en");
    track.mode = "hidden";

    // Load the WebVTT subtitle file
    fetch("vttsub.vtt")
      .then((response) => response.text())
      .then((data) => {
        track.mode = "showing";
        track.innerHTML = data;

        const cues = Array.from(track.cues);
        setSubtitleCues(cues);
      })
      .catch((error) => {
        console.error("Error loading subtitles:", error);
      });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const updateCaptions = () => {
      const currentTime = video.currentTime;
      const activeCue = subtitleCues.find(
        (cue) => currentTime >= cue.startTime && currentTime <= cue.endTime
      );

      if (activeCue) {
        setCaptions(activeCue.text);
      } else {
        setCaptions("");
      }
    };

    video.addEventListener("timeupdate", updateCaptions);

    return () => {
      video.removeEventListener("timeupdate", updateCaptions);
    };
  }, [subtitleCues]);

  return (
    <div>
      <video ref={videoRef} controls>
        <source src="Cognitive dysfunction.mp4" type="video/mp4" />
      </video>
      <div className="captions">{captions}</div>
    </div>
  );
};

export default LiveCaptioning;
