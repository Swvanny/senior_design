// ─────────────────────────────────────────────────────────────
// ALL SITE TEXT LIVES IN THIS FILE.
// Anything wrapped in [[double brackets]] shows up on the site as a
// yellow "to do" highlight. Replace every one before you submit.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: "Drew",
  lastName: "Swanson",
  program: "Cybersecurity Engineering",
  school: "Iowa State University",
  graduation: "Spring 2027",
  email: "dswanny@iastate.edu",
  phone: "563-340-3708",
  location: "Iowa",
  linkedin: "www.linkedin.com/in/drew-swanson-isu",
  linkedinUrl: "https://www.linkedin.com/in/drew-swanson-isu",
};

export const home = {
  intro:
    "I'm Drew, a senior in Cybersecurity Engineering at Iowa State University, graduating in spring 2027. This site collects the projects, experience, and writing from my time at ISU. Start with my senior design project, or look through the other work I've done in digital forensics, embedded systems, and software.",

  objectiveTitle: "Where I'm headed",
  objective: [
    "I got into cybersecurity engineering because I like knowing how systems work at the lowest level: which registry key recorded an action, which packet carried the data out. After I graduate, I want to start as a security engineer on a team where I can work on both sides of that problem, building defenses and investigating what gets past them.",
    "Over my first few years I want to grow from someone who can follow a playbook into someone who can write one. My next step is the CySA+ certification and deeper experience with detection and incident response. I also want to keep up offensive practice, because defending a network is easier when you understand how it gets attacked. Long term, I want to be the engineer a team trusts to explain a risk plainly and fix it properly.",
  ],
};

export const seniorDesign = {
  title: "AI Arcade",
  meta: "CPRE 4910 / 4920 · Team sdmay27-06 · Josh Clausman (client), Dr. Julie Rursch (advisor)",
  description:
    "Retro video games hold enduring appeal, but modifying them requires technical knowledge that most fans don't have and shouldn't need to acquire. AI Arcade removes that barrier by using AI agents to interpret natural-language requests (“make the frog in Frogger a chicken”) and translate them into modifications of existing game files, allowing users to reshape the games they grew up with without writing a single line of code.",
  role:
    "My role on the team was essentially the glue between the software and hardware teams, providing assistance wherever needed, and learning a lot about both on the way.",
  skills:
    "I learned how to integrate AI into everyday software, and how to apply a safety harness to ensure malicious use of the AI was not possible.",
  bigPicture:
    "Anyone who has a love of retro arcade games and has always wanted to make their own will love this system. It is made for those people of all ages who enjoy playing and making video games.",
  // Put these PDFs in public/documents/ (or use full https:// links).
};

export const projects = [
  {
    id: "forensics",
    kind: "Course project · CYBE 4360",
    title: "Insider Threat Forensic Investigation",
    description:
      "A simulated insider-threat case for my digital forensics course. I was given a Windows 11 virtual machine belonging to a suspected employee and had to find out what data left the machine, how it left, and what the user did to hide it.",
    role:
      "I carried out the investigation from start to finish. I examined raw files in HxD, pulled user activity out of the Windows registry, analyzed a packet capture in Wireshark, decoded a message hidden with LSB steganography, and recovered the PowerShell artifacts used to exfiltrate files. I documented everything in a formal forensic report.",
    skills:
      "I learned to read evidence at the byte level instead of trusting file extensions, which Windows artifacts record user activity and how to connect them, and how covert channels like steganography hide data in plain sight. Writing the report taught me to present a chain of evidence so a non-technical reader can follow it.",
    resources: ["Windows 11 VM", "HxD", "Windows Registry", "Wireshark", "LSB steganography", "PowerShell"],
  },
  {
    id: "roomba",
    kind: "Course Project",
    title: "Roomba Mission",
    description:
      "A course-long exploration of embedded systems. Used a Roomba vacuum robot to complete tasks and missions, using the connection between software and hardware. This culminated in a final mission, which was to navigate a field strewn with obstacles and achieve a mission objective.",
    role:
      "As part of a team, I collaborated on coding, maintenance, and testing in weekly labs and projects.",
    skills:
      "I gained knowledge of what it is like to work with real-life embedded systems and how to properly work in a team for an extended period of time to accomplish a difficult goal.",
    resources: ["C", "JavaScript", "PuTTY", "WiFi"],
  },
  {
    id: "sheepshead",
    kind: "Personal project",
    title: "Sheepshead in the Browser",
    description:
      "A browser version of Sheepshead, the trick-taking card game popular across Wisconsin and the Upper Midwest, played against four computer opponents. It is a single-page app with no frameworks, so every rule lives in plain JavaScript.",
    role:
      "I designed the game and defined how every rule should behave: a house-rule trump order that promotes the 7 of Diamonds to second-highest trump, call-card partner selection and the moment the partner is revealed, Schneider and Schwarz scoring multipliers, and the bots' play.",
    skills:
      "The main lesson was testing. Card-game rules have edge cases a person rarely hits by hand, so I built a headless Node.js simulation that plays thousands of hands and checks the results. That approach carries over directly to validating security logic.",
    resources: ["HTML", "CSS", "Vanilla JavaScript", "Node.js simulation testing"],
  },
];

// Set `show: false` if you have no internship, co-op, or technical job.
export const experience = {
  show: true,
  title: "Technology Assistant Intern",
  company: "TwinState Technical Services",
  dates: "July 2025-January 2026",
  duties:
    "Imaged and provisioned laptops and desktops for seamless end-user setup. Organized, tracked, and maintained inventory of serviced equipment to support efficient deployment cycles. Deployed and configured devices at customer sites, resolving setup issues and ensuring a smooth handoff.",
  technical:
    "SentinelOne, ImmyBot, Windows 11",
  soft:
    "Communication, Collaboration, Teamwork, Dynamic Decision Making, Planning",
};

export const resume = {
  file: "Drew Swanson - Resume.pdf",
  highlights: [
    { label: "Certifications", items: ["CompTIA Security+ (SY0-701)"] },
    { label: "Activities", items: ["HACC Cyber-Defense competition", "ISEAGE penetration testing labs"] },
  ],
};

export const reflections = [
  {
    id: "gen-ed",
    title: "General Education Reflection",
    file: "General_Education_Reflection.pdf",
    blurb: "How my general education courses shaped the way I think and work as an engineer.",
  },
  {
    id: "cumulative",
    title: "Cumulative Reflection",
    file: "Cumulative_Reflection.pdf",
    blurb: "A look back across my four years in Cybersecurity Engineering at Iowa State.",
  },
  {
    id: "ethics",
    title: "Ethics Paper",
    file: "Ethical Dilemma Paper.pdf",
    blurb: "Written for CYBE 2340: Legal, Professional and Ethical Issues in Cyber Systems",
  },
];
