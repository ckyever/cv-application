import { useState } from "react";
import "../styles/Card.css";

import { EDIT_ELEMENT_KEY } from "../constants.js";
import { createEducationTemplate, createExperienceTemplate } from "../data.js";
import EditSelector from "./EditSelector.jsx";
import Field from "./Field.jsx";

function addNewElement(editElementKey, resumeData, setResumeData) {
  let newResumeData;
  let newElement;
  switch (editElementKey) {
    case EDIT_ELEMENT_KEY.education:
      newResumeData = { ...resumeData };
      newElement = createEducationTemplate();
      newResumeData.educationList.push(newElement);
      setResumeData(newResumeData);
      break;
    case EDIT_ELEMENT_KEY.experience:
      newResumeData = { ...resumeData };
      newElement = createExperienceTemplate();
      newResumeData.experienceList.push(newElement);
      setResumeData(newResumeData);
      break;
  }
  return newElement == null ? null : newElement.id;
}

function Card({
  title,
  titleIcon,
  fields,
  editElementKey,
  editElements,
  resumeData,
  setResumeData,
}) {
  const [expandedId, setExpandedId] = useState(null);
  return (
    <div className="card">
      <div className="title">
        {titleIcon && (
          <img className="icon" src={titleIcon} alt={title + " icon"} />
        )}
        <h2>{title}</h2>
      </div>
      {fields &&
        fields.length > 0 &&
        fields.map((field) => <Field key={field.id} fieldData={field} />)}
      {editElements &&
        editElements.length > 0 &&
        editElements.map((element) => (
          <EditSelector
            key={element.id}
            listKey={editElementKey}
            element={element}
            isExpanded={element.id === expandedId}
            setExpandedId={setExpandedId}
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        ))}
      {editElements && (
        <button
          onClick={() => {
            setExpandedId(
              addNewElement(editElementKey, resumeData, setResumeData)
            );
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default Card;
