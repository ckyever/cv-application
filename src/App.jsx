import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar.jsx";
import Resume from "./components/Resume.jsx";

const exampleResume = {
  header: {
    fullname: "Ckyever Gaviola",
    email: "ckyever@gmail.com",
    phoneNumber: "0451676767",
    address: "Melbourne, Australia",
  },
};

function App() {
  const [resumeData, setResumeData] = useState(exampleResume);

  return (
    <div className="app">
      <Sidebar setResumeData={setResumeData} />
      <Resume resumeData={resumeData} />
    </div>
  );
}

export default App;
