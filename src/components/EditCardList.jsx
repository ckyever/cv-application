import Card from "./Card.jsx";

import { SIDEBAR_MODE } from "../constants.js";

function EditCardList({ editMode }) {
  switch (editMode) {
    case SIDEBAR_MODE.content:
      return (
        <div className="edit-card-list">
          <Card title="Personal Details" />
          <Card title="Education" />
          <Card title="Experience" />
        </div>
      );
    case SIDEBAR_MODE.customise:
      return (
        <div className="edit-card-list">
          <Card title="Layout" />
          <Card title="Color" />
          <Card title="Fonts" />
        </div>
      );

    default:
      return null;
  }
}

export default EditCardList;
