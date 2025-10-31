import { useState } from "react";
import "../styles/EditSelector.css";

import FieldData from "../libs/Field.js";
import Field from "./Field.jsx";

function EditSelector({ listKey, element, resumeData, setResumeData }) {
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
            const handleOnChange = (value) => {
              const newResumeData = { ...resumeData };
              const index = newResumeData[listKey].findIndex(
                (item) => item.id === element.id
              );
              newResumeData[listKey][index][key] = value;
              setResumeData(newResumeData);
            };
            const fieldData = new FieldData(
              id,
              key,
              "text",
              element[key],
              handleOnChange
            );
            return <Field key={id} fieldData={fieldData} />;
          }
        })}
      </form>
    </div>
  );
}

export default EditSelector;
