import { useState } from "react";

import "../styles/Sidebar.css";

import { SIDEBAR_MODE } from "../constants.js";

import EditSwitcher from "./EditSwitcher.jsx";
import EditCardList from "./EditCardList.jsx";

function Sidebar({ resumeData, setResumeData }) {
  const [sidebarMode, setSidebarMode] = useState(SIDEBAR_MODE.content);

  return (
    <>
      <div className="sidebar">
        <EditSwitcher handleSwitch={setSidebarMode} />
        <EditCardList
          editMode={sidebarMode}
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      </div>
    </>
  );
}

export default Sidebar;
