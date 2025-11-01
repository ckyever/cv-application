import { useState } from "react";

import "../styles/EditSwitcher.css";
import contentIcon from "../assets/note-edit-outline.svg";
import customiseIcon from "../assets/palette-outline.svg";

import { SIDEBAR_MODE } from "../constants.js";

function EditSwitcher({ handleSwitch }) {
  const [selectedId, setSelectedId] = useState(SIDEBAR_MODE.content);
  return (
    <div className="edit-switcher card">
      <button
        id={SIDEBAR_MODE.content}
        className={selectedId === SIDEBAR_MODE.content ? "selected" : undefined}
        onClick={() => {
          handleSwitch(SIDEBAR_MODE.content);
          setSelectedId(SIDEBAR_MODE.content);
        }}
      >
        <img className="icon" src={contentIcon} alt="content icon" />
        Content
      </button>
      <button
        id={SIDEBAR_MODE.customise}
        className={
          selectedId === SIDEBAR_MODE.customise ? "selected" : undefined
        }
        onClick={() => {
          handleSwitch(SIDEBAR_MODE.customise);
          setSelectedId(SIDEBAR_MODE.customise);
        }}
      >
        <img className="icon" src={customiseIcon} alt="customise icon" />
        Customise
      </button>
    </div>
  );
}

export default EditSwitcher;
