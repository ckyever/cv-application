import "../styles/EditSelector.css";
import chevronDown from "../assets/chevron-down.svg";

import FieldData from "../libs/Field.js";
import Field from "./Field.jsx";

function handleDelete(listKey, elementId, resumeData, setResumeData) {
  const newResumeData = { ...resumeData };
  const index = newResumeData[listKey].findIndex(
    (element) => element.id === elementId
  );
  newResumeData[listKey].splice(index, 1);
  setResumeData(newResumeData);
}

function EditSelector({
  listKey,
  element,
  isExpanded,
  setExpandedId,
  resumeData,
  setResumeData,
}) {
  const reference =
    element.School != null
      ? element.School
      : element.Company != null
      ? element.Company
      : null;

  return (
    <div className="edit-selector">
      <div className="selector-buttons">
        <button
          className="edit-element"
          onClick={() =>
            isExpanded ? setExpandedId(null) : setExpandedId(element.id)
          }
        >
          <img
            className={isExpanded ? "icon collapse" : "icon expand"}
            src={chevronDown}
            alt="Chevron"
          />
          <p>{reference}</p>
        </button>
        <button
          className="delete-element"
          onClick={() => {
            handleDelete(listKey, element.id, resumeData, setResumeData);
          }}
        >
          Delete
        </button>
      </div>
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
