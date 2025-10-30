import "../styles/Card.css";
import Field from "./Field.jsx";
import EditSelector from "./EditSelector.jsx";

function Card({ title, fields, elements }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {fields &&
        fields.length > 0 &&
        fields.map((field) => <Field key={field.id} fieldData={field} />)}
      {elements &&
        elements.length > 0 &&
        elements.map((element) => (
          <EditSelector key={element.id} reference={element.reference} />
        ))}
    </div>
  );
}

export default Card;
