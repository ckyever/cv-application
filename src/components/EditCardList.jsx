import Card from "./Card.jsx";

import { SIDEBAR_MODE } from "../constants.js";
import Field from "../libs/Field.js";

const personalDetailsFields = [
  new Field("fullname", "Full Name", "text"),
  new Field("email", "Email", "email"),
  new Field("phone-number", "Phone Number", "text"),
  new Field("address", "Address", "text"),
];

function EditCardList({ editMode }) {
  switch (editMode) {
    case SIDEBAR_MODE.content:
      return (
        <div className="edit-card-list">
          <Card title="Personal Details" fields={personalDetailsFields} />
          {/* <Card title="Education" />
          <Card title="Experience" /> */}
        </div>
      );
    case SIDEBAR_MODE.customise:
      return (
        <div className="edit-card-list">
          {/* <Card title="Layout" />
          <Card title="Color" />
          <Card title="Fonts" /> */}
        </div>
      );

    default:
      return null;
  }
}

export default EditCardList;
