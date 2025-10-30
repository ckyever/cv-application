/*****

resume = {
  fullname,
  email,
  phoneNumber,
  address,
  education: [
    {
      id,
      school,
      degree,
      startDate,
      endDate,
      location
    }
  ],
  work: [
    {
      id,
      company,
      title,
      startDate,
      endDate,
      location
    }
  ],
  layoutOption,
  accentColor,
  font
}

function editFullname(value)
  update with value
  call setResume on a new copy of the resume data

function editEducation(educationId, {data})
  update all data from object using the ID
  call setResume with new copy

*****/

class DataController {
  constructor(resume, setResume) {
    this.resume = resume;
    this.setResume = setResume;
  }

  showData() {
    console.log(this.resume);
  }

  updateFullname(value) {
    this.showData();
    this.resume.fullname = value;
    this.setResume({ ...this.resume });
  }
}

export default new DataController();
