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
      school: "Suzanne Cory High School",
      degree: "VCE - Year 12",
      location: "Werribee, Australia",
      startDate: "01/01/2011",
      endDate: "01/12/2018",
    },
    {
      id: 1,
      school: "The University of Melbourne",
      degree: "Bachelor of Science - Major in Computing and Software Systems",
      location: "Melbourne, Australia",
      startDate: "01/01/2016",
      endDate: "01/12/2019",
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
