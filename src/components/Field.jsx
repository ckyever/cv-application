import "../styles/Field.css";

function Field({ fieldData }) {
  return (
    <div className="field">
      <label htmlFor={fieldData.id}>{fieldData.label}</label>
      <input
        id={fieldData.id}
        className="field"
        type={fieldData.fieldType}
        onChange={
          fieldData.handleOnChange == null
            ? undefined
            : (event) => fieldData.handleOnChange(event.target.value)
        }
      />
    </div>
  );
}

export default Field;
