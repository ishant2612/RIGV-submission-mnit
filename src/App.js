import React from "react";
import Fpage from "./Firstpage/Fpage";
import Lpage from "./Landingpage/Lpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Combine from "./Combine";
import Hearing from "./Hearing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lpage />} />
        <Route path="fpage" element={<Combine />} />
        <Route path="cpage" element={<Hearing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
