import type {
  NavLink,
  Project,
  SkillGroup,
  Certification,
  VolunteerRole,
  EducationEntry,
  GalleryItem,
} from "../types";


export const PROFILE = {
  name: "Sarvagya Dwivedi",
  location: "Varanasi, India",
  email: "sarvagyadwivedi0308@gmail.com",
  github: "https://github.com/sdShaggy",
  linkedin: "https://www.linkedin.com/in/sarvagya-dwivedi-4b1934295",
  resumeHref: "https://drive.google.com/file/d/1lBzn5PNYUUtq-qaYnNUWSoVZQyeBIbRX/view?usp=sharing", 
  tagline:
    "Computer Science undergraduate building end-to-end ML and multimodal AI systems, from forecasting pipelines to GenAI & RAG.",
};

export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "community", label: "Community" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];



export const COURSEWORK: string[] = [
  "Data Structures",
  "Algorithms",
  "Database Management Systems",
  "Data Mining",
  "Natural Language Processing",
  "Software Engineering",
  "Artificial Intelligence & ML",
];

export const PROJECTS: Project[] = [
  {
    title: "Load Prediction AI Model for Delhi",
    desc: "Stacked ensemble (XGBoost, LightGBM, Ridge) for next-day peak electricity load forecasting, fed by an automated scraping pipeline for weather, load, and holiday data.",
    bullets: [
      "12.3% MAPE on next-day peak load",
      "Selenium + BeautifulSoup + Meteostat data pipeline",
      "Deployed via Flask with scheduled execution",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "Flask", "Selenium"],
    stat: { label: "MAPE", value: "12.3%" },
    href: "https://github.com/sdShaggy/Load-Prediction-AI-model",
  },
  {
    title: "Smart Product Pricing - Amazon ML Challenge 2025",
    desc: "Multimodal price prediction model fusing transformer text embeddings (all-mpnet-base-v2) with CLIP image embeddings into a unified feature space.",
    bullets: [
      "3584-dimensional fused text + image feature vector",
      "5-fold cross-validated SMAPE evaluation",
      "Ranked 151st nationwide",
    ],
    stack: ["PyTorch", "Transformers", "CLIP", "Multimodal Learning"],
    stat: { label: "SMAPE", value: "45.02" },
    href: "https://github.com/sdShaggy/ML-based-E-Commerce-Market-price-Prediction",
  },
  {
    title: "Execra Evaluation Framework",
    desc: "Open-source evaluation framework for real-time AI guidance systems, contributed as part of GSSoC '26, benchmarking against no-guidance, random, and single-LLM baselines.",
    bullets: [
      "ECE, F1, latency & false-positive rate metrics",
      "Reproducible benchmarking vs. 3 baseline systems",
      "Automated workflows via Makefiles",
    ],
    stack: ["Python", "Evaluation Metrics", "Benchmarking"],
    stat: { label: "OSS", value: "GSSoC '26" },
    href: "https://github.com/sahoo-tech/Execra/pull/182",
  },
  {
    title: "Create Your Website AI",
    desc: "An AI system that generates full websites from natural-language prompts, pairing an LLM-based code generation pipeline with a real-time preview frontend.",
    bullets: [
      "FastAPI backend for real-time generation",
      "LLM-driven code generation + rendering pipeline",
      "Automates frontend engineering workflows",
    ],
    stack: ["FastAPI", "LLM APIs", "Frontend Automation"],
    stat: { label: "Type", value: "LLM Wrapper" },
    href: "https://github.com/sdShaggy/Create-Your-Website-AI",
  },
  {
    title: "CroPred",
    desc: "AI-powered crop yield prediction system built with Team D-Generation X for Smart India Hackathon 2025.",
    bullets: [
      "Built under SIH 2025 timeline constraints",
      "Team-based model development & validation",
    ],
    stack: ["Python", "Machine Learning","Frontend Dashboard"],
    stat: { label: "Event", value: "SIH 2025" },
    href: "https://github.com/sdShaggy/CroPred",
  },
  {
  title: "SIA - Smart Institutional Approval",
  desc: "AI-Assisted Institutional Approval Dashboard trained and tested on mock dataset. Evaluate and visualize AI Readiness, Compliance, and Institutional Quality. Upload your dataset to get scores, explanations, and actionable insights for AICTE",
  bullets: [
    "AI based analysis and performance indicators based on historical data for academic institutions approval processes at UGC and AICTE."
  ],
  stack: ["Streamlit", "Flask", "XGBoost"],
  stat: {
    label: "Type",
    value: "Data Analysis"
  },
  href: "https://github.com/sdShaggy/SIA-Smart-Institutional-Approval"
}
];

export const SKILLS: SkillGroup[] = [
  { group: "Languages", items: ["Python", "C", "SQL", "JavaScript", "TypeScript", "Java", "Kotlin"] },
  {
    group: "AI / ML",
    items: ["Machine Learning", "Deep Learning", "GenAI", "RAG", "Multimodal Learning", "Model Evaluation", "LLMs","Prompt Engineering"],
  },
  {
    group: "Libraries",
    items: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost", "Pandas", "NumPy", "Matplotlib", "LangChain", "FAISS"],
  },
  { group: "Frameworks", items: ["Flask", "FastAPI", "React", "Tailwind CSS"] },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Linux", "Selenium", "BeautifulSoup", "Node.js", "Docker", "Hugging Face"],
  },
  {
    group: "AI Productivity Tools",
    items: ["Claude", "ChatGPT", "Gemini"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Oracle Agentic AI Certified Foundations Associate",
      issuer: "Oracle",
      credentialId: "OC7932032",
      date: "August 2026",
      href:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=CDF056B320897A8821A409FB059CBE5088BD3F01B24EFD3A0EFF98D8B8A0E605",
      logos: ["images/certi/oracle.jpg"], 
    },
  { title: "ML Summer School 2026",
      issuer: "Cohere Labs",
      credentialId: "fba58022-0716-44ba-ab67-99679f3da96c",
      date: "August 2026",
      href:"https://drive.google.com/file/d/1CPI58jYeUy4FurUl643A7k9tjAscSp5Q/view?usp=drivesdk",
      logos: ["images/certi/cohere_labs_logo.jpg"], 
    },
  { title: "OCI 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      credentialId: "OC7932032",
      date: "Jan 2026",
      href:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=131B887470B01391859F86C6A497AEE391C47109B693B47D24F92973D51FAE49",
      logos: ["images/certi/oracle.jpg"], 
    },
  { title: "Summer Training, AI & Robotics", 
    issuer: "CIR, IIIT Allahabad", 
    credentialId: " AIR2025STP039",
    date: "Aug 2025",
    href:"https://drive.google.com/file/d/1Oe2JA0xRR3rzH9TYIukls4sBEUtyWvib/view?usp=drivesdk",
    logos: ["images/certi/iiita.png"], 
  },
  { title: "Data Science Job Simulation", 
    issuer: "BCG · Forage", 
    credentialId: "2Pj48YC6gqX5brmHc",
    date: "May 2026",
    href:"https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_69a58e9886615e42aba27129_1780168843446_completion_certificate.pdf",
    logos: ["images/certi/images.png","images/certi/forage.jpg"], 
  },
  { title: "Software Engineering Job Simulation", 
    issuer: "JPMorgan Chase & Co. · Forage", 
    credentialId: "8Bf935xnSfArfkfnN",
    date: "Jun 2026",
    href:"https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_69a58e9886615e42aba27129_1780928913791_completion_certificate.pdf",
    logos: ["images/certi/images.jpg","images/certi/forage.jpg"],
    },
    { title: "Fundamentals of Docker and Kubernetes", 
    issuer: "Scaler", 
    credentialId: "AiP__npj19",
    date: "Jul 2026",
    href:"https://moonshot.scaler.com/s/sl/AiP__npj19",
    logos: ["images/certi/scaler.jpeg"],
    },
  { title: "Android App Development using Kotlin", 
    issuer: "Celesta, IIT Patna", 
    credentialId: "TB-CELESTA24-IITP-AAD-058",
    date: "Oct 2024",
    href:"https://drive.google.com/file/d/1qaSo39TVwHr6XG7ZNbvZx1HFc5FCmwlI/view?usp=drivesdk",
    logos: ["images/certi/celesta.jpg"],
    },
    { title: "Digital Productivity with AI", 
    issuer: "UNICEF", 
    credentialId: "2946863_37_bu5jz",
    date: "Jul 2026",
    href:"https://skills.myp2e.org/storage/certificates/Certificate_2946863_37_bu5jz.pdf?sv=2019-07-07&sr=b&sig=CDrqgvUL%2Fu%2FP%2FeUs6s2023hKYpSFqwerttkWhVWyhdY%3D&se=2026-07-25T15%3A12%3A25Z&sp=r",
    logos: ["images/certi/unicef.jpg"],
    },
];

export const VOLUNTEERING: VolunteerRole[] = [
  { role: "Chairperson, BIT Patna ACM Student Chapter", 
    date: "Feb 2026 - Present", 
    logo: "images/VolActOrg/acm_bitp_1.1.png", 
    description:
      "As the Chairperson of the BIT Patna ACM Student Chapter, I led the revival of our college's ACM chapter after a hiatus of more than five years. I built the founding executive team, established the chapter's operational structure, and organized technical events and learning initiatives for students through both online and offline initiatives under the banner of the Association for Computing Machinery.",
  },
  { role: "Manager, Club Tennis BIT Patna", 
    date: "Aug 2025 - Present", 
    logo: "images/VolActOrg/ctbp_1.jpg",
    description:
      "Alongside representing BIT Patna as a collegiate tennis player, I served as the Club Manager, overseeing administrative documentation, membership records, and day-to-day club operations. I also managed the club's social media presence, designed promotional material using Figma and Canva, and coordinated player logistics for intercollegiate tournaments.",
  },
  { role: "Open Source Contributor, GSSoC '26", 
    date: "May 2026 - Present",
    logo: "images/VolActOrg/images.jpg",
    description:
      "Designed and developed the evaluation infrastructure for Execra, enabling systematic assessment of AI-assisted code generation systems. Built reproducible experimentation pipelines, implemented statistical evaluation metrics including ECE, F1 Score, and Expected Latency, and developed deterministic baseline models for fair, repeatable benchmarking across multiple guidance strategies."
  },
  { role: "Volunteer, Prakrida '24 & Prakrida '26 Annual Sports Fest", 
    date: "2024 & 2026",
    logo: "images/VolActOrg/images (1).jpg",
    description:
      "Supported the organization of BIT Patna's annual sports festival by assisting with participant registration, event coordination, scheduling, and on-ground logistics for tennis competitions, ensuring smooth tournament operations throughout the event.",
  },
  
  { role: "Volunteer, NPTIS 2025 Annual Conference, BIT Mesra Patna Campus", 
    date: "Feb 2025", 
    logo: "images/education/bitm_logo_whitebg.jpg",
    description:
      "Served as a volunteer during NPTIS 2025, managing registration and help desk operations while assisting delegates, speakers, and participants. I also coordinated technical sessions to ensure the smooth execution of the conference.",
  },
];

export const ACTIVITIES = [
  { role: "Winner, Lawn Tennis Men's Team Event, Prakrida '26", date: "2026" },
  { role: "Represented BIT Patna in Infinito '26, IIT Patna and Prakrida '26", date: "2026"}

];

export const Organizations = [
  { role: "Student Member, Association for Computing Machinery",date: "Nov 2025 - Present", logo: "images/VolActOrg/acm.png"}

];

export const EXPERIENCE = {
  company: "Veridian Carbon",
  role: "Engineering Intern · Remote",
  date: "May 2026 — Jul 2026",
  logo: "images/experience/android-chrome-512x512.png",
  bullets: [
    "Developing and enhancing production web applications and platform features using React, TypeScript, Tailwind CSS, and Node.js.",
    "Collaborating directly with engineering leadership to design, implement, and ship platform enhancements in an early-stage startup environment.",
  ],
  stack: ["React", "TypeScript", "Tailwind CSS", "Node.js","Git", "GitHub", 'Software Engineering'],
};

export const EDUCATION: EducationEntry[] = [
  {
    school: "Birla Institute of Technology, Mesra",
    degree: "B.Tech in Computer Science & Engineering",
    date: "Sept 2023 - Present",
    gpa: "8.29 / 10",
    image: "images/education/bitm_logo_whitebg.jpg", 
  },
  {
    school: "Delhi Public School, Varanasi",
    degree: "Secondary and Senior Secondary (PCM)  - CBSE",
    date: "2018 - 2022",
     activities: [
    "Participated in Football and Cricket tournaments",
    "Aero-modelling club",
  ],
    image: "images/education/dpsv_logo.png", 
  },
  {
    school: "Sunbeam Academy, Samneghat",
    degree: "Primary and Middle School - CBSE",
    date: "2008 - 2018",
     activities: [
    "Quiz Club",
    "Computer Club",
    "STEM Club (ATL lab)",
    "Student Council member",
    "Participated in Football and Athletics"
  ],
    image: "images/education/SA_logo.jpg", 
  }
  
];

export const GALLERY: GalleryItem[] = [
  { image: "images/gallery/winners.jpeg", caption: "Prakrida '26, Lawn Tennis Winners", size: "wide" },
  { image: "images/gallery/Ruunerups.jpeg", caption: "IB '25 Lawn Tennis Runner-Ups", size: "wide" },
  { image: "images/gallery/ib_finals.jpeg", caption: "IB '25 Finals", size: "wide" },
  { image: "images/gallery/NPTIS.jpeg", caption: "Volunteer @ NPTIS '25", size: "wide" },
  { image: "images/gallery/paperpres.jpeg", caption: "Idea Presentation @ NPTIS '25", size: "tall" },
  { image: "images/gallery/ACM_inaug_final.jpeg", caption: "BIT Patna ACM Chapter Inaugration '26", size: "wide" },
  { image: "images/gallery/valsen.jpeg", caption: "CTBP Valedictory Batch 2K25", size: "wide" },
  { image: "images/gallery/bgmi.jpeg", caption: "BGMIxTechnika'25 - Team event", size: "wide" },
  { image: "images/gallery/sih'24.jpeg", caption: "SIH '24 Team LoadLogixAI", size: "wide" },
  { image: "images/gallery/pk24val.jpeg", caption: "CTBP @ Prakrida '24", size: "wide" },
  { image: "images/gallery/AM'24contingent.jpeg", caption: "Athletic Meet '24 CSE Parade Contingent", size: "wide" },
  { image: "images/gallery/sih'24p.jpeg", caption: "SIH '24 Presentation", size: "wide" },
];