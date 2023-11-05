import Fpage from "./Firstpage/Fpage";
import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

function Combine() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const text =
    "Cognitive Impairment and Its Effects Understanding Cognitive Impairment Cognitive impairment refers to difficulties in cognitive functioning and can affect memory, attention, learning, problem-solving, and decision-making. It can be caused by various factors such as aging, neurological disorders, or brain injuries. Effects of Cognitive Impairment Cognitive impairment can have profound effects on everyday life. It may lead to difficulties in performing daily tasks, challenges in communication, social withdrawal, and a decrease in overall quality of life. Video: Impact of Cognitive Impairment Understanding Cognitive Impairment Cognitive impairment refers to difficulties in cognitive functioning and can affect memory, attention, learning, problem-solving, and decision-making. It can be caused by various factors such as aging, neurological disorders, or brain injuries.";

  const [res, setRes] = useState();
  const { speak, voices } = useSpeechSynthesis();
  const openai = new OpenAI({
    apiKey: "YOUR_API_KEY_HERE",
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    // Start listening when the component mounts
    SpeechRecognition.startListening({ continuous: true });
    console.log("Listening started.");
  }, []);

  useEffect(() => {
    // Check for the wake word (e.g., "chatbot")
    if (transcript.toLowerCase().endsWith("stop")) {
      console.log("Wake word detected. Listening stopped.");

      // Extract the sentence after the wake word
      const wakeWordIndex = transcript.toLowerCase().indexOf("chatbot");
      const spokenSentence = transcript.slice(wakeWordIndex + 7).trim();

      // Send the spoken sentence to OpenAI
      sendTranscriptToOpenAI(spokenSentence);
      console.log("");
    }
  }, [transcript]);

  const sendTranscriptToOpenAI = async (spokenSentence) => {
    // Send the spoken sentence to OpenAI
    console.log("SPOKEN SENTENCE IS ", spokenSentence);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `${text}. Always give shorter replies, Pretend you are a Summarizer who summarizes when asked and explains when asked also dont just keep on saying as an ai language model instead of that say something like as your assistant...... question: ${spokenSentence}`,
        },
      ],
    });
    console.log("prev log", res);
    setRes(response.choices[0].message.content);
    console.log("after log", res);

    console.log("My API RESPONSE:", response.choices[0].message.content);
    resetTranscript();
    speak({ text: response.choices[0].message.content, voice: voices[0] });
  };

  return (
    <div>
      <Fpage />
      {res && res.choices && res.choices[0] && res.choices[0].message && (
        <p>Response: {res.choices[0].message.content}</p>
      )}
    </div>
  );
}

export default Combine;
