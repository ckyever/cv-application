import "../styles/EditCardList.css";
import Card from "./Card.jsx";

import { SIDEBAR_MODE, EDIT_ELEMENT_KEY } from "../constants.js";
import Field from "../libs/Field.js";

import personalDetailsIcon from "../assets/account.svg";
import educationIcon from "../assets/school.svg";
import experienceIcon from "../assets/briefcase.svg";

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
          <Card
            title="Personal Details"
            titleIcon={personalDetailsIcon}
            fields={personalDetailsFields}
          />
          <Card
            title="Education"
            titleIcon={educationIcon}
            editElementKey={EDIT_ELEMENT_KEY.education}
            editElements={resumeData.educationList}
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
          <Card
            title="Experience"
            titleIcon={experienceIcon}
            editElementKey={EDIT_ELEMENT_KEY.experience}
            editElements={resumeData.experienceList}
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        </div>
      );
    case SIDEBAR_MODE.customise:
      return (
        <div className="edit-card-list">
          <Card title="Layout">
            <div className="layout-options">
              <button>
                <div className="layout-icon"></div>Top
              </button>
              <button>
                <div className="layout-icon left"></div>Left
              </button>
              <button>
                <div className="layout-icon right"></div>Right
              </button>
            </div>
          </Card>
        </div>
      );

    default:
      return null;
  }
}

export default EditCardList;
