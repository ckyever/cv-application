import "../styles/Card.css";
import Field from "./Field.jsx";

function Card({ title, fields }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {fields.length > 0 &&
        fields.map((field) => <Field key={field.id} fieldData={field} />)}
    </div>
  );
}

export default Card;
