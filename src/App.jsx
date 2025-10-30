import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar.jsx";
import Resume from "./components/Resume.jsx";

const exampleResume = {
  fullname: "Ckyever Gaviola",
  email: "ckyever@gmail.com",
  phoneNumber: "0451676767",
  address: "Melbourne, Australia",
  educationList: [
    {
      id: 0,
      reference: "Suzanne Cory High School",
      school: "Suzanne Cory High School",
      degree: "VCE - Year 12",
      location: "Werribee, Australia",
      startDate: "01/01/2011",
      endDate: "01/12/2018",
    },
    {
      id: 1,
      reference: "The University of Melbourne",
      school: "The University of Melbourne",
      degree: "Bachelor of Science - Major in Computing and Software Systems",
      location: "Melbourne, Australia",
      startDate: "01/01/2016",
      endDate: "01/12/2019",
    },
  ],
  experienceList: [
    {
      id: 2,
      reference: "Canva",
      company: "Canva",
      title: "Junior Software Engineer",
      location: "Melbourne, Australia",
      startDate: "01/01/2020",
      endDate: "01/04/2025",
    },
    {
      id: 3,
      reference: "Google",
      company: "Google",
      title: "Senior Software Engineer",
      location: "Melbourne, Australia",
      startDate: "01/04/2025",
      endDate: "Present",
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
