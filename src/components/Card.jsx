import { useState } from "react";
import "../styles/Card.css";

import { EDIT_ELEMENT_KEY } from "../constants.js";
import {
  createEmptyEducationTemplate,
  createEmptyExperienceTemplate,
} from "../data.js";
import EditSelector from "./EditSelector.jsx";
import Field from "./Field.jsx";

// Click add
// Add new empty object to resumeData
function addNewElement(editElementKey, resumeData, setResumeData) {
  let newResumeData;
  switch (editElementKey) {
    case EDIT_ELEMENT_KEY.education:
      newResumeData = { ...resumeData };
      const newEducation = createEmptyEducationTemplate();
      newResumeData.educationList.push(newEducation);
      setResumeData(newResumeData);
      return newEducation.id;
    case EDIT_ELEMENT_KEY.experience:
      newResumeData = { ...resumeData };
      const newExperience = createEmptyExperienceTemplate();
      newResumeData.experienceList.push(newExperience);
      setResumeData(newResumeData);
      return newExperience.id;
  }
}

function Card({
  title,
  fields,
  editElementKey,
  editElements,
  resumeData,
  setResumeData,
}) {
  const [expandedId, setExpandedId] = useState(null);
  return (
    <div className="card">
      <h2>{title}</h2>
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
