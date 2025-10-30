function Resume({ resumeData }) {
  return (
    <div className="resume">
      <section className="header">
        <h1>{resumeData.header.fullname}</h1>
        <p>{resumeData.header.email}</p>
        <p>{resumeData.header.phoneNumber}</p>
        <p>{resumeData.header.address}</p>
      </section>
    </div>
  );
}

export default Resume;
