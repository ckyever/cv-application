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
      School: "Suzanne Cory High School",
      Degree: "VCE - Year 12",
      Location: "Werribee, Australia",
      "Start Date": "01/01/2011",
      "End Date": "01/12/2018",
    },
    {
      id: getNextElementId(),
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
      Company: "Canva",
      Title: "Junior Software Engineer",
      Description:
        "Collaborated with designers and senior engineers to develop intuitive, high-performance web features using React, TypeScript, and modern UI frameworks. Implemented reusable components, improved accessibility, and optimized rendering performance for millions of users. Worked closely with backend teams to integrate APIs, participated in agile sprints, and contributed to maintaining a clean, scalable codebase through code reviews and automated testing.",
      Location: "Melbourne, Australia",
      "Start Date": "01/01/2020",
      "End Date": "01/04/2025",
    },
    {
      id: getNextElementId(),
      Company: "Google",
      Title: "Senior Software Engineer",
      Description:
        "Designed and led development of large-scale distributed systems using Python, Go, and Kubernetes to support high-traffic Google services. Architected resilient backend solutions, improved system reliability, and optimized data pipelines for speed and scalability. Mentored junior engineers, reviewed code for best practices, and collaborated cross-functionally to align technical design with business goals. Championed performance monitoring and automation to enhance deployment efficiency and service uptime.",
      Location: "Melbourne, Australia",
      "Start Date": "01/04/2025",
      "End Date": "Present",
    },
  ],
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
