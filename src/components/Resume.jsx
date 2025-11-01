import { LAYOUT_OPTION } from "../constants.js";

import "../styles/Resume.css";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/cellphone.svg";
import locationIcon from "../assets/map-marker.svg";

function Resume({ resumeData }) {
  let resumeClassName = "resume";
  switch (resumeData.layout) {
    case LAYOUT_OPTION.top:
      resumeClassName += " top";
      break;
    case LAYOUT_OPTION.left:
      resumeClassName += " left";
      break;
    case LAYOUT_OPTION.right:
      resumeClassName += " right";
      break;
  }

  return (
    <div className={resumeClassName}>
      <section className="header">
        <h1>{resumeData.fullname}</h1>
        <div className="personal-details">
          <p>
            <img className="icon" src={emailIcon} />
            {resumeData.email}
          </p>
          <p>
            <img className="icon" src={phoneIcon} />
            {resumeData.phoneNumber}
          </p>
          <p>
            <img className="icon" src={locationIcon} />
            {resumeData.address}
          </p>
        </div>
      </section>
      <div className="body">
        <section className="education-list">
          <h2>Education</h2>
          {resumeData.educationList.map((education) => {
            return (
              <div className="education" key={education.id}>
                <div className="details">
                  <h3>{education["School"]}</h3>
                  <p>{education["Degree"]}</p>
                </div>
                <div className="duration-location">
                  <p>{education["Location"]}</p>
                  <p>
                    {education["Start Date"]} - {education["End Date"]}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
        <section className="experience-list">
          <h2>Experience</h2>
          {resumeData.experienceList.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <div className="details">
                  <h3>{experience["Company"]}</h3>
                  <p className="title">{experience["Title"]}</p>
                </div>
                <div className="duration-location">
                  <p>{experience["Location"]}</p>
                  <p>
                    {experience["Start Date"]} - {experience["End Date"]}
                  </p>
                </div>
                <p className="description">{experience["Description"]}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Resume;
