import Card from "./Card.jsx";

import { SIDEBAR_MODE } from "../constants.js";
import Field from "../libs/Field.js";
import { resume } from "react-dom/server";

function updateFullname(resumeData, setResumeData, value) {
  const newResumeData = { ...resumeData };
  newResumeData.fullname = value;
  setResumeData(newResumeData);
}

function updateEmail(resumeData, setResumeData, value) {
  const newResumeData = { ...resumeData };
  newResumeData.email = value;
  setResumeData(newResumeData);
}

function updatePhoneNumber(resumeData, setResumeData, value) {
  const newResumeData = { ...resumeData };
  newResumeData.phoneNumber = value;
  setResumeData(newResumeData);
}

function updateAddress(resumeData, setResumeData, value) {
  const newResumeData = { ...resumeData };
  newResumeData.address = value;
  setResumeData(newResumeData);
}

function EditCardList({ editMode, resumeData, setResumeData }) {
  const personalDetailsFields = [
    new Field("fullname", "Full Name", "text", resumeData.fullname, (value) =>
      updateFullname(resumeData, setResumeData, value)
    ),
    new Field("email", "Email", "email", resumeData.email, (value) =>
      updateEmail(resumeData, setResumeData, value)
    ),
    new Field(
      "phone-number",
      "Phone Number",
      "text",
      resumeData.phoneNumber,
      (value) => updatePhoneNumber(resumeData, setResumeData, value)
    ),
    new Field("address", "Address", "text", resumeData.address, (value) =>
      updateAddress(resumeData, setResumeData, value)
    ),
  ];

  switch (editMode) {
    case SIDEBAR_MODE.content:
      return (
        <div className="edit-card-list">
          <Card title="Personal Details" fields={personalDetailsFields} />
          <Card
            title="Education"
            editElementKey="educationList"
            editElements={
              resumeData.educationList.length > 0 && resumeData.educationList
            }
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
          <Card
            title="Experience"
            editElementKey="experienceList"
            editElements={
              resumeData.experienceList.length > 0 && resumeData.experienceList
            }
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
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
