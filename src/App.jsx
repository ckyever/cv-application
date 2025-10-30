import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar.jsx";
import Resume from "./components/Resume.jsx";

// CKYTODO: Move this into it's own data file
const exampleResume = {
  fullname: "Ckyever Gaviola",
  email: "ckyever@gmail.com",
  phoneNumber: "0451676767",
  address: "Melbourne, Australia",
  educationList: [
    {
      id: 0,
      reference: "Suzanne Cory High School",
      School: "Suzanne Cory High School",
      Degree: "VCE - Year 12",
      Location: "Werribee, Australia",
      "Start Date": "01/01/2011",
      "End Date": "01/12/2018",
    },
    {
      id: 1,
      reference: "The University of Melbourne",
      School: "The University of Melbourne",
      Degree: "Bachelor of Science - Major in Computing and Software Systems",
      Location: "Melbourne, Australia",
      "Start Date": "01/01/2016",
      "End Date": "01/12/2019",
    },
  ],
  experienceList: [
    {
      id: 2,
      reference: "Canva",
      Company: "Canva",
      Title: "Junior Software Engineer",
      Location: "Melbourne, Australia",
      "Start Date": "01/01/2020",
      "End Date": "01/04/2025",
    },
    {
      id: 3,
      reference: "Google",
      Company: "Google",
      Title: "Senior Software Engineer",
      Location: "Melbourne, Australia",
      "Start Date": "01/04/2025",
      "End Date": "Present",
    },
  ],
};

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
