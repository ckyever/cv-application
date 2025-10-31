let elementId = 0;

function getNextElementId() {
  elementId = elementId + 1;
  return elementId;
}

export const exampleResume = {
  fullname: "Ckyever Gaviola",
  email: "ckyever@gmail.com",
  phoneNumber: "0451676767",
  address: "Melbourne, Australia",
  educationList: [
    {
      id: getNextElementId(),
      reference: "Suzanne Cory High School",
      School: "Suzanne Cory High School",
      Degree: "VCE - Year 12",
      Location: "Werribee, Australia",
      "Start Date": "01/01/2011",
      "End Date": "01/12/2018",
    },
    {
      id: getNextElementId(),
      reference: "The University of Melbourne",
      School: "The University of Melbourne",
      Degree: "Bachelor of Science - Major in Computing and Software Systems",
      Location: "Melbourne, Australia",
      "Start Date": "01/01/2016",
      "End Date": "01/12/2019",
    },
  ],
  experienceList: [
    {
      id: getNextElementId(),
      reference: "Canva",
      Company: "Canva",
      Title: "Junior Software Engineer",
      Location: "Melbourne, Australia",
      "Start Date": "01/01/2020",
      "End Date": "01/04/2025",
    },
    {
      id: getNextElementId(),
      reference: "Google",
      Company: "Google",
      Title: "Senior Software Engineer",
      Location: "Melbourne, Australia",
      "Start Date": "01/04/2025",
      "End Date": "Present",
    },
  ],
};

export function createEmptyEducationTemplate() {
  return {
    id: getNextElementId(),
    reference: "New Education",
    School: "New Education",
    Degree: "",
    Location: "",
    "Start Date": "",
    "End Date": "",
  };
}

export function createEmptyExperienceTemplate() {
  return {
    id: getNextElementId(),
    reference: "New Experience",
    Company: "New Experience",
    Title: "",
    Location: "",
    "Start Date": "",
    "End Date": "",
  };
}
