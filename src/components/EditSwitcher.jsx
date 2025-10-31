import "../styles/EditSwitcher.css";

import { SIDEBAR_MODE } from "../constants.js";

function EditSwitcher({ handleSwitch }) {
  return (
    <div className="edit-switcher card">
      <button
        onClick={() => {
          handleSwitch(SIDEBAR_MODE.content);
        }}
      >
        Content
      </button>
      <button
        onClick={() => {
          handleSwitch(SIDEBAR_MODE.customise);
        }}
      >
        Customise
      </button>
    </div>
  );
}

export default EditSwitcher;
