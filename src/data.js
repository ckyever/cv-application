import { LAYOUT_OPTION, FONT_OPTION } from "./constants.js";

let elementId = 0;

function getNextElementId() {
  elementId = elementId + 1;
  return elementId;
}

export const exampleResume = {
  fullname: "LeBron James",
  email: "kingjames@gmail.com",
  phoneNumber: "0451232323",
  address: "Los Angeles, California",
  educationList: [
    {
      id: getNextElementId(),
      School: "St. Mary High School",
      Degree: "High School Diploma",
      Location: "Akron, Ohio",
      "Start Date": "01/01/1999",
      "End Date": "26/06/2003",
    },
    {
      id: getNextElementId(),
      School: "EarlyDraft Bootcamps",
      Degree: "Diploma of Computer Science",
      Location: "MSG, New York City",
      "Start Date": "27/06/2003",
      "End Date": "29/10/2003",
    },
  ],
  experienceList: [
    {
      id: getNextElementId(),
      Company: "Cavalier Consulting",
      Title: "Software Engineer",
      Description:
        "Created and maintained FastBreak, a high-performance distributed caching system written in Rust and adopted by startups for real-time analytics. Built and managed a contributor community of over 200 developers worldwide, implemented CI/CD pipelines, and established documentation standards to improve code quality and stability. Presented FastBreak at RustConf 2009, helping advance the early adoption of Rust in production environments.",
      Location: "Cleveland, Ohio",
      "Start Date": "01/01/2003",
      "End Date": "01/04/2010",
    },
    {
      id: getNextElementId(),
      Company: "Google",
      Title: "Principal Engineer",
      Description:
        "Lead development of distributed data systems in Rust and Go, improving reliability and latency across large-scale infrastructure. Manage and mentor a cross-functional team focused on cloud performance and ML platform scalability while driving the migration of key analytics pipelines from Java to Rust, reducing memory usage by 23%. Recognized with four Google Engineering MVP awards for consistent innovation, leadership, and delivery.",
      Location: "Los Angeles, California",
      "Start Date": "01/04/2018",
      "End Date": "Present",
    },
  ],
  layout: LAYOUT_OPTION.top,
  font: FONT_OPTION.serif,
};

export function createEducationTemplate() {
  return {
    id: getNextElementId(),
    School: "New School",
    Degree: "Bachelor of Computer Science",
    Location: "Melbourne, Australia",
    "Start Date": "01/01/2020",
    "End Date": "Present",
  };
}

export function createExperienceTemplate() {
  return {
    id: getNextElementId(),
    Company: "New Company",
    Title: "Software Engineer",
    Description:
      "Developed high-performance backend systems using Rust, focusing on reliability, concurrency, and memory safety. Collaborated with teams to optimize services, improve code quality, and deliver efficient production-ready solutions.",
    Location: "Melbourne, Australia",
    "Start Date": "01/01/2020",
    "End Date": "Present",
  };
}
