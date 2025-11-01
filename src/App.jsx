import { useState } from "react";
import "./App.css";
import resetIcon from "./assets/history.svg";

import { exampleResume } from "./data.js";
import Resume from "./components/Resume.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [resumeData, setResumeData] = useState(exampleResume);

  return (
    <div className="app">
      <Sidebar resumeData={resumeData} setResumeData={setResumeData} />
      <Resume resumeData={resumeData} />
      {/* Refreshing the page here instead of reloading default data because the current design does not allow us to reload the data into the input fields as well */}
      <button className="reset-button" onClick={() => window.location.reload()}>
        <img src={resetIcon} alt="reset icon" />
        Reset
      </button>
    </div>
  );
}

export default App;
