import "../styles/EditCardList.css";
import Card from "./Card.jsx";

import {
  SIDEBAR_MODE,
  EDIT_ELEMENT_KEY,
  LAYOUT_OPTION,
  FONT_OPTION,
} from "../constants.js";
import Field from "../libs/Field.js";

import personalDetailsIcon from "../assets/account.svg";
import educationIcon from "../assets/school.svg";
import experienceIcon from "../assets/briefcase.svg";
import layoutIcon from "../assets/floor-plan.svg";
import colourIcon from "../assets/palette.svg";
import fontIcon from "../assets/format-font.svg";

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

function updateLayout(resumeData, setResumeData, value) {
  const newResumeData = { ...resumeData };
  newResumeData.layout = value;
  setResumeData(newResumeData);
}

function updateFont(resumeData, setResumeData, value) {
  const newResumeData = { ...resumeData };
  newResumeData.font = value;
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
          <Card title="Colour" titleIcon={colourIcon}>
            <div className="customise-options">
              <div className="color-option">
                <input
                  id="accent-picker"
                  type="color"
                  defaultValue={getComputedStyle(
                    document.documentElement
                  ).getPropertyValue("--accent-color")}
                  onChange={(event) => {
                    document.documentElement.style.setProperty(
                      "--accent-color",
                      event.target.value
                    );
                  }}
                />
                <label htmlFor="accent-picker">Header</label>
              </div>
              <div className="color-option">
                <input
                  id="subheading-picker"
                  type="color"
                  defaultValue={getComputedStyle(
                    document.documentElement
                  ).getPropertyValue("--subheading-color")}
                  onChange={(event) => {
                    document.documentElement.style.setProperty(
                      "--subheading-color",
                      event.target.value
                    );
                  }}
                />
                <label htmlFor="subheading-picker">Subheaders</label>
              </div>
            </div>
          </Card>
          <Card title="Layout" titleIcon={layoutIcon}>
            <div className="customise-options">
              <button
                onClick={() =>
                  updateLayout(resumeData, setResumeData, LAYOUT_OPTION.top)
                }
                className={
                  resumeData.layout === LAYOUT_OPTION.top
                    ? "selected"
                    : undefined
                }
              >
                <div className="layout-icon"></div>Top
              </button>
              <button
                onClick={() =>
                  updateLayout(resumeData, setResumeData, LAYOUT_OPTION.left)
                }
                className={
                  resumeData.layout === LAYOUT_OPTION.left
                    ? "selected"
                    : undefined
                }
              >
                <div className="layout-icon left"></div>Left
              </button>
              <button
                onClick={() =>
                  updateLayout(resumeData, setResumeData, LAYOUT_OPTION.right)
                }
                className={
                  resumeData.layout === LAYOUT_OPTION.right
                    ? "selected"
                    : undefined
                }
              >
                <div className="layout-icon right"></div>Right
              </button>
            </div>
          </Card>
          <Card title="Font" titleIcon={fontIcon}>
            <div className="customise-options">
              <button
                style={{ fontFamily: "serif" }}
                onClick={() => {
                  updateFont(resumeData, setResumeData, FONT_OPTION.serif);
                  document.documentElement.style.setProperty(
                    "--resume-font",
                    FONT_OPTION.serif
                  );
                }}
                className={
                  resumeData.font === FONT_OPTION.serif ? "selected" : undefined
                }
              >
                <div className="font-icon">Aa</div>Serif
              </button>
              <button
                style={{ fontFamily: "sans-serif" }}
                onClick={() => {
                  updateFont(resumeData, setResumeData, FONT_OPTION.sans);
                  document.documentElement.style.setProperty(
                    "--resume-font",
                    FONT_OPTION.sans
                  );
                }}
                className={
                  resumeData.font === FONT_OPTION.sans ? "selected" : undefined
                }
              >
                <div className="font-icon">Aa</div>Sans
              </button>
              <button
                style={{ fontFamily: "monospace", fontSize: "1rem" }}
                onClick={() => {
                  updateFont(resumeData, setResumeData, FONT_OPTION.mono);
                  document.documentElement.style.setProperty(
                    "--resume-font",
                    FONT_OPTION.mono
                  );
                }}
                className={
                  resumeData.font === FONT_OPTION.mono ? "selected" : undefined
                }
              >
                <div className="font-icon">Aa</div>Mono
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
