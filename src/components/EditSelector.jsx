import { useState } from "react";
import "../styles/EditSelector.css";

import FieldData from "../libs/Field.js";
import Field from "./Field.jsx";

function EditSelector({ element }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="edit-selector">
      <button
        className="edit-element"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p>Edit - {element.reference}</p>
      </button>
      <form className={"edit-form" + (isExpanded ? "show" : "")}>
        {Object.keys(element).map((key) => {
          if (key !== "reference" && key !== "id") {
            const id = `${element.id}-${key}`;
            const fieldData = new FieldData(id, key, "text");
            return <Field key={id} fieldData={fieldData} />;
          }
        })}
      </form>
    </div>
  );
}

export default EditSelector;
