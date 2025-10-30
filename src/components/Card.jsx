import "../styles/Card.css";
import Field from "./Field.jsx";
import EditSelector from "./EditSelector.jsx";

function Card({ title, fields, editElements }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {fields &&
        fields.length > 0 &&
        fields.map((field) => <Field key={field.id} fieldData={field} />)}
      {editElements &&
        editElements.length > 0 &&
        editElements.map((element) => (
          <EditSelector key={element.id} element={element} />
        ))}
    </div>
  );
}

export default Card;
