import { useState } from "react";
import "../styles/Field.css";

function Field({ fieldData }) {
  const [value, setValue] = useState(fieldData.initialValue);

  return (
    <div className="field">
      <label htmlFor={fieldData.id}>{fieldData.label}</label>
      {fieldData.label === "Description" ? (
        <textarea
          id={fieldData.id}
          type={fieldData.fieldType}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            fieldData.handleOnChange == null
              ? undefined
              : fieldData.handleOnChange(event.target.value);
          }}
        />
      ) : (
        <input
          id={fieldData.id}
          type={fieldData.fieldType}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            fieldData.handleOnChange == null
              ? undefined
              : fieldData.handleOnChange(event.target.value);
          }}
        />
      )}
    </div>
  );
}

export default Field;
