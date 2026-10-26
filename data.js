// ===== EDIT THIS FILE to update your portfolio. Leave a value "" to show it as "not added yet". =====

export const PROFILE = {
  name: "Maathesvaaran S",
  role: "Aspiring Software Developer",
  intro:
    "I'm a Computer Science Engineering student who enjoys learning programming, solving problems, and building practical applications. I'm currently strengthening my Java and SQL skills while working on projects that help me grow as a developer.",
  location: "Kancheepuram, Tamil Nadu, India",
  // Put your resume at public/resume.pdf, then set this to "resume.pdf"
  resumeFile: "",
};

export const CONTACT = {
  email: "", // e.g. "yourname@gmail.com"
  github: "", // e.g. "https://github.com/your-username"
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-id"
  // Create a free form at https://formspree.io and paste its URL, e.g. "https://formspree.io/f/xxxxxxx"
  formEndpoint: "",
};

// state: "using" = I use it in projects, "basic" = basic level, "learning" = still learning
export const SKILLS = [
  { group: "Programming", items: [["Java", "using"], ["C", "using"], ["Python", "basic"]] },
  { group: "Database", items: [["SQL", "using"], ["MySQL", "using"]] },
  { group: "Core Computer Science", items: [["Object-Oriented Programming", "using"], ["Data Structures & Algorithms", "learning"]] },
  { group: "Web Development", items: [["HTML", "using"], ["CSS", "using"], ["JavaScript", "learning"]] },
  { group: "Tools and Platforms", items: [["Git", "using"], ["GitHub", "using"], ["VS Code", "using"], ["Eclipse", "using"]] },
];

export const PROJECTS = [
  {
    name: "Digital Hostel Outpass System",
    kind: "Academic team project",
    description:
      "A web application that moves the hostel outpass process online. Students register, submit leave requests and follow their status, while wardens and authorised staff review and approve them.",
    features: [
      "Student registration and login",
      "Digital outpass request submission",
      "Warden approval workflow",
      "Request status tracking",
      "Role-based access for hostel staff",
    ],
    tags: ["Web application", "Team project"],
    note: "Describes the intended scope of the project, not a deployed system.",
    repo: "", // paste GitHub repository URL
    demo: "", // paste live demo URL (button appears only when set)
  },
  {
    name: "AI Food Nutrition Tracker",
    kind: "Learning project, prototype",
    description:
      "A prototype that uses AI-based food detection to help identify food items and keep track of nutritional intake.",
    features: [
      "Food detection with a configured Roboflow model",
      "Food quantity input in grams",
      "Nutritional information display",
      "Macronutrient tracking",
      "Meal history saved in browser local storage",
    ],
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Roboflow"],
    note: "",
    repo: "",
    demo: "",
  },
];

export const EDUCATION = {
  degree: "B.E. Computer Science and Engineering",
  college: "Adhi College of Engineering and Technology",
  graduation: "Expected graduation: 2027",
  cgpa: "7.45",
};
