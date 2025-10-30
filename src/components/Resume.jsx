function Resume({ resumeData }) {
  return (
    <div className="resume">
      <section className="header">
        <h1>{resumeData.fullname}</h1>
        <p>{resumeData.email}</p>
        <p>{resumeData.phoneNumber}</p>
        <p>{resumeData.address}</p>
      </section>
      <section className="education-list">
        <h2>Education</h2>
        {resumeData.educationList.map((education) => {
          return (
            <div className="education" key={education.id}>
              <h3>{education["School"]}</h3>
              <p>{education["Degree"]}</p>
              <p>{education["Location"]}</p>
              <p>
                {education["Start Date"]} - {education["End Date"]}
              </p>
            </div>
          );
        })}
      </section>
      <section className="experience-list">
        <h2>Experience</h2>
        {resumeData.experienceList.map((experience) => {
          return (
            <div className="experience" key={experience.id}>
              <h3>{experience["Company"]}</h3>
              <p>{experience["Title"]}</p>
              <p>{experience["Location"]}</p>
              <p>
                {experience["Start Date"]} - {experience["End Date"]}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Resume;
