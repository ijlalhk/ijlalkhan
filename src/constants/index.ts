// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  barChart,
  uoo,
  fiverr,
  biome,
  project1,
  project2,
  project3,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  seo,
  dashboard,
  administration,
  machine,
  programming,
  leadership,
  cloudDatabase,
  databasestorage,
  consistency,
  cloud,
  comsats,
} from "../assets";

import { FaPython, FaDocker, FaGitlab, FaLinux, FaGit, FaAws, FaJira } from 'react-icons/fa';
import { MdWeb, MdStorage, MdSecurity, MdCloud } from 'react-icons/md';
import { FaJava } from "react-icons/fa";
import { BsKanban } from "react-icons/bs";
import { RiRobot3Fill } from "react-icons/ri";
import { SiCsharp, SiPowerbi, SiTableau, SiMicrosoftexcel, SiFlask, SiHtml5, SiCss3, SiJavascript, SiJinja, SiMysql, SiMongodb, SiPytorch, SiSelenium, SiPytest, SiScrumalliance, SiMicrosoftazure } from 'react-icons/si';
// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "education",
    title: "Education",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Data Analysis",
    icon: seo,
  },
  {
    title: "Data Visualization",
    icon: barChart,
  },
  {
    title: "Business Intelligence",
    icon: dashboard,
  },
  {
    title: "Test Automation",
    icon: administration,
  },
  {
    title: "AI/ML Experience",
    icon: machine,
  },
  {
    title: "Software Development",
    icon: programming,
  },
  {
    title: "Project Leadership",
    icon: leadership,
  },
  {
    title: "Data Modeling/Schema Design",
    icon: cloudDatabase,
  },
  {
    title: "Database Management",
    icon: databasestorage,
  },
  {
    title: "Agile Development",
    icon: consistency,
  },
  {
    title: "DeCloud Computing Platforms",
    icon: cloud,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    category: "Programming Language",
    items: [
      { name: "Python", icon: FaPython },
      { name: "C#", icon: SiCsharp },
      { name: "Java", icon: FaJava }
    ]
  },
  {
    category: "Analytics Tools",
    items: [
      { name: "Power BI", icon: SiPowerbi },
      { name: "Tableau", icon: SiTableau },
      { name: "Excel", icon: SiMicrosoftexcel }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "Flask", icon: SiFlask },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Jinja", icon: SiJinja }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb }
    ]
  },
  {
    category: "AI/ML Tools",
    items: [
      { name: "PySpark", icon: SiPytorch }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: FaDocker },
      { name: "Gitlab CI/CD", icon: FaGitlab },
      { name: "Linux", icon: FaLinux }
    ]
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", icon: FaGit }
    ]
  },
  {
    category: "Quality Assurance / Test Automation",
    items: [
      { name: "Selenium", icon: SiSelenium },
      { name: "Kinesis CI", icon: MdSecurity },
      { name: "UiPath", icon: RiRobot3Fill },
      { name: "Pytest", icon: SiPytest }
    ]
  },
  {
    category: "Agile Tools",
    items: [
      { name: "Scrum", icon: SiScrumalliance },
      { name: "Kanban", icon: BsKanban }
    ]
  },
  {
    category: "Cloud Platforms",
    items: [
      { name: "Azure", icon: SiMicrosoftazure },
      { name: "AWS", icon: FaAws },
      { name: "CSC", icon: MdCloud }
    ]
  }
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Research Assistant - Software Developer (Python)",
    company_name: "University of Oulu",
    icon: uoo,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "UBICOMP Oulu is a research center at the University of Oulu that develops cutting-edge technologies to integrate computing seamlessly into everyday life.",
      "As a Research Assistant at UBICOMP Oulu, my primary responsibilities centered around conducting research on the emerging technologies of Large Language Models (LLMs) and GPT models and exploring their applications in education.",
      "Successfully created a 100% secure private GPT project using open-source LLMs, showcasing expertise in privacy and security.",
      "Designed an educational course on Leveraging Existing LLM Tools and Prompt Engineering, highlighting a commitment to knowledge sharing and education.",
    ],
  },
  {
    title: "Business Intelligence Engineer",
    company_name: "Biome Analytics, Inc.",
    icon: biome,
    iconBg: "#383E56",
    date: "Sept 2018 - Aug 2022",
    points: [
      "I was recruited at Biome Analytics with a mission to blend my software development expertise with analytical skills to reshape data for Business Intelligence (BI) applications.",
      "Fully automated Tableau dashboards using Selenium and Kinesis CI.",
      "Enhanced front-end test management by creating a web application",
      "Crafted interactive and visually compelling dashboards that provided actionable insights to stakeholders.",
    ],
  },
  {
    title: "Freelance Programmer",
    company_name: "Fiverr · Freelance",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Nov 2016 - Aug 2018",
    points: [
      "As a freelancer on Fiverr, I successfully undertook a variety of tasks, including the creation of Python scripts and Tableau dashboards.",
      "Full rating on 30 successful orders",
      "100% success rate on all my projects",
    ],
  },
] as const;

// Education
export const EDUCATION = [
  {
    title: "Master of Computer Science & Engineering",
    institution_name: "University of Oulu, Finland",
    icon: uoo,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Current",
    points: [
      "Focused on software engineering and development.",
      "Deepened understanding of computer programming and algorithms.",
      " Explored artificial intelligence and machine learning.",
    ],
  },
  {
    title: "Bachelor of Computer Science",
    institution_name: "COMSATS University, Islamabad",
    icon: comsats,
    iconBg: "#E6DEDD",
    date: "May 2014 - Aug 2018",
    points: [
      "Developed proficiency in programming fundamentals and languages (Java,Python).",
      "Mastered data structures and algorithms.",
      "Gained knowledge in operating systems and system programming.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Private GPT",
    description:
      "Private GPT is a cutting-edge natural language processing (NLP) project leveraging OpenAI's GPT-4 architecture. This is a project of private GPT",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://gitlab.com/ijlal-khan/privategpt",
    live_site_link: "https://gitlab.com/ijlal-khan/privategpt",
  },
  {
    name: "Helsinki City Bike App",
    description:
      "The Helsinki City Bike App is a web application that provides features to view stations, journeys, and add new stations and journeys",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "yml",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://gitlab.com/ijlal-khan/mybikeapp",
    live_site_link: "https://gitlab.com/ijlal-khan/mybikeapp",
  },
  {
    name: "Rock-Paper-Scissors",
    description:
      "This is a Rock Paper Scissors game in Python using socket programming. The server is hosted on an Ubuntu VM with a Docker image for deployment.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "ubuntu",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://gitlab.com/ijlal-khan/distributedsystems",
    live_site_link: "https://gitlab.com/ijlal-khan/distributedsystems",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ijlal-khan",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/",
  },
] as const;
