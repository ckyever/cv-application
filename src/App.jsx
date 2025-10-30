import { useState } from "react";
import "./App.css";

import { exampleResume } from "./data.js";
import Resume from "./components/Resume.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [resumeData, setResumeData] = useState(exampleResume);

  return (
    <div className="app">
      <Sidebar resumeData={resumeData} setResumeData={setResumeData} />
      <Resume resumeData={resumeData} />
    </div>
  );
}

export default App;
