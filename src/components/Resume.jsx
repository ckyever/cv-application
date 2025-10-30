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
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
              <p>{education.location}</p>
              <p>
                {education.startDate} - {education.endDate}
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
              <h3>{experience.company}</h3>
              <p>{experience.title}</p>
              <p>{experience.location}</p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Resume;
