import { useState } from "react";
import "../styles/Card.css";

import EditSelector from "./EditSelector.jsx";
import Field from "./Field.jsx";

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
    </div>
  );
}

export default Card;
