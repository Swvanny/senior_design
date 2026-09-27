// ─────────────────────────────────────────────────────────────
// ALL SITE TEXT LIVES IN THIS FILE.
// Anything wrapped in [[double brackets]] shows up on the site as a
// yellow "to do" highlight. Replace every one before you submit.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: "Drew",
  lastName: "[[Last name]]",
  program: "Cybersecurity Engineering",
  school: "Iowa State University",
  graduation: "Spring 2027",
  email: "[[netid]]@iastate.edu",
  phone: "[[(555) 555-5555]]",
  location: "Iowa · relocating to Minneapolis–St. Paul",
  linkedin: "[[linkedin.com/in/your-handle]]",
  linkedinUrl: "",   // e.g. "https://www.linkedin.com/in/your-handle/"
  github: "[[github.com/your-handle]]",
  githubUrl: "",     // e.g. "https://github.com/your-handle"
};

export const home = {
  intro:
    "I'm Drew, a senior in Cybersecurity Engineering at Iowa State University, graduating in spring 2027. This site collects the projects, experience, and writing from my time at ISU. Start with my senior design project, or look through the work I've done in digital forensics, infrastructure, and cyber-defense competition.",

  objectiveTitle: "Where I'm headed",
  objective: [
    "I got into cybersecurity engineering because I like knowing how systems work at the lowest level: which registry key recorded an action, which packet carried the data out. After I graduate, I want to start as a security engineer on a team where I can work on both sides of that problem, building defenses and investigating what gets past them. I'm focusing my search on the Minneapolis–St. Paul west metro, where many large companies run their own security programs.",
    "Over my first few years I want to grow from someone who can follow a playbook into someone who can write one. My next step is the CySA+ certification and deeper experience with detection and incident response. I also want to keep up offensive practice, because defending a network is easier when you understand how it gets attacked. Long term, I want to be the engineer a team trusts to explain a risk plainly and fix it properly.",
  ],
};

export const seniorDesign = {
  title: "[[Senior design project name]]",
  meta: "CPRE 4910 / 4920 · [[Team sdmay27-XX]] · [[Client or advisor]]",
  description:
    "[[What problem does the project solve, who is it for, and what did your team build? Aim for 4–6 sentences a non-engineer could follow.]]",
  role:
    "[[Your specific responsibilities on the team: which components you owned, decisions you made, and how you worked with teammates and the client.]]",
  skills:
    "[[The technical skills you gained (tools, languages, security concepts) and the non-technical ones (planning, documentation, client communication).]]",
  bigPicture:
    "[[Who benefits from this work beyond your team, and how does it fit into a larger goal for the client, the university, or the security field?]]",
  resources: ["[[Tool or technology]]", "[[Tool or technology]]", "[[Tool or technology]]"],
  // Put these PDFs in public/documents/ (or use full https:// links).
  documents: [
    { label: "Design document", href: "documents/senior-design-document.pdf" },
    { label: "Final presentation", href: "documents/senior-design-presentation.pdf" },
    { label: "Team website", href: "[[https://sdmay27-XX.sd.ece.iastate.edu]]" },
  ],
};

export const projects = [
  {
    id: "forensics",
    kind: "Course project · [[Course number, e.g. CYBE 4xxx]]",
    title: "Insider Threat Forensic Investigation",
    description:
      "A simulated insider-threat case for my digital forensics course. I was given a Windows 11 virtual machine belonging to a suspected employee and had to find out what data left the machine, how it left, and what the user did to hide it.",
    role:
      "I carried out the investigation from start to finish [[confirm: individually or as part of a team]]. I examined raw files in HxD, pulled user activity out of the Windows registry, analyzed a packet capture in Wireshark, decoded a message hidden with LSB steganography, and recovered the PowerShell artifacts used to exfiltrate files. I documented everything in a formal forensic report.",
    skills:
      "I learned to read evidence at the byte level instead of trusting file extensions, which Windows artifacts record user activity and how to connect them, and how covert channels like steganography hide data in plain sight. Writing the report taught me to present a chain of evidence so a non-technical reader can follow it.",
    resources: ["Windows 11 VM", "HxD", "Windows Registry", "Wireshark", "LSB steganography", "PowerShell"],
  },
  {
    id: "homelab",
    kind: "Personal project",
    title: "PowerEdge Virtualization Homelab",
    description:
      "A home server I brought back to life from a used Dell PowerEdge T320 to run my own virtual lab. It gives me a place to build networks, test security tools, and break things without touching anyone else's systems.",
    role:
      "I did all of the work myself. I diagnosed and replaced a dead CMOS battery, configured iDRAC for remote out-of-band management, set up storage on the PERC H710 RAID controller, and installed Proxmox VE 9.1 from a USB drive I flashed with Rufus in DD image mode. [[Add what you run on it now, e.g. pfSense, Security Onion, a Kali VM, an Active Directory lab.]]",
    skills:
      "I gained hands-on experience with enterprise server hardware, out-of-band management, RAID configuration, bare-metal hypervisor installation, and virtual networking. It also taught me patience with hardware troubleshooting, where the fix is sometimes a coin-cell battery.",
    resources: ["Dell PowerEdge T320", "iDRAC", "PERC H710 RAID", "Broadcom BCM5720 NICs", "Proxmox VE 9.1", "Rufus"],
  },
  {
    id: "iseage",
    kind: "Labs & competition · ISEAGE",
    title: "Red and Blue Team Work at ISEAGE",
    description:
      "Offensive and defensive practice in ISEAGE, Iowa State's isolated cyber-defense testbed. I completed penetration testing labs in the ISEAGE environment and competed on a blue team in the HACC Cyber-Defense competition, where teams keep business services running while defending them from live attackers.",
    role:
      "[[Your role on the HACC team, e.g. which systems you owned: Windows, Linux, firewall, web server.]] In the penetration testing labs I [[summarize the targets you attacked and the techniques you used]].",
    skills:
      "I practiced hardening systems under time pressure, spotting attacker activity in logs and live sessions, and looking at the same network from the attacker's side. The competition also required splitting up work and communicating clearly with teammates while systems were under attack.",
    resources: ["ISEAGE testbed", "[[Nmap]]", "[[Metasploit]]", "[[Firewall / SIEM used]]"],
  },
  {
    id: "sheepshead",
    kind: "Personal project",
    title: "Sheepshead in the Browser",
    description:
      "A browser version of Sheepshead, the trick-taking card game popular across Wisconsin and the Upper Midwest, played against four computer opponents. It is a single-page app with no frameworks, so every rule lives in hand-written JavaScript.",
    role:
      "I designed the game and defined how every rule should behave: a house-rule trump order that promotes the 7 of Diamonds to second-highest trump, call-card partner selection and the moment the partner is revealed, Schneider and Schwarz scoring multipliers, and the bots' play. [[Describe how you built it, including any use of AI coding tools.]]",
    skills:
      "The main lesson was testing. Card-game rules have edge cases a person rarely hits by hand, so I built a headless Node.js simulation that plays thousands of hands and checks the results. That approach carries over directly to validating security logic.",
    resources: ["HTML", "CSS", "Vanilla JavaScript", "Node.js simulation testing"],
  },
];

// Set `show: false` if you have no internship, co-op, or technical job.
export const experience = {
  show: true,
  title: "[[Job title]]",
  company: "[[Company]]",
  team: "[[Team or department]]",
  dates: "[[Summer 2026]]",
  duties:
    "[[The main duties and projects you worked on. Include numbers where you can: systems, users, tickets, time saved.]]",
  technical:
    "[[Tools, platforms, and security concepts you learned on the job.]]",
  soft:
    "[[Communication, teamwork, and professional skills you developed.]]",
  evaluations:
    "[[A short summary or quote from your supervisor's evaluation. Link the full evaluation below if you're allowed to share it.]]",
  presentations:
    "[[Any presentations you gave, such as an intern showcase or a team demo.]]",
  documents: [
    { label: "Evaluation", href: "documents/internship-evaluation.pdf" },
    { label: "Presentation slides", href: "documents/internship-presentation.pdf" },
  ],
};

export const resume = {
  file: "resume.pdf",
  highlights: [
    { label: "Certifications", items: ["CompTIA Security+ (SY0-701)"] },
    { label: "Activities", items: ["HACC Cyber-Defense competition", "ISEAGE penetration testing labs", "[[Clubs, e.g. ISU Information Assurance Student Group]]"] },
    { label: "Awards", items: ["[[Dean's List, scholarships, competition placings]]"] },
    { label: "Research & papers", items: ["[[Any published or research papers, or delete this group]]"] },
  ],
};

export const reflections = [
  {
    id: "gen-ed",
    title: "General Education Reflection",
    file: "general-education-reflection.pdf",
    blurb: "How my general education courses shaped the way I think and work as an engineer.",
  },
  {
    id: "cumulative",
    title: "Cumulative Reflection",
    file: "cumulative-reflection.pdf",
    blurb: "A look back across my four years in Cybersecurity Engineering at Iowa State.",
  },
  {
    id: "ethics",
    title: "Ethics Paper",
    file: "ethics-paper.pdf",
    blurb: "Written for CPRE/EE 394:[[paper topic in one line]].",
  },
];
