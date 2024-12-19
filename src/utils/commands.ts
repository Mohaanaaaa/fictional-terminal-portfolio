import { Terminal } from 'lucide-react';

const aboutMe = `
NAME: Mohana Y
ROLE: Frontend & Backend Dev

I'm a passionate developer with a love for creating elegant solutions to complex problems.
My journey in tech started with BASIC on my Education, and I've been hooked ever since.

Currently focusing on:
- Building scalable web applications
- Contributing to open-source projects
- Learning new technologies
`;

const skills = `
TECHNICAL SKILLS
==============
Programming Languages:
[██████████] JavaScript/TypeScript
[████████──] Python
[███████───] Java
[██████────] C++

Frameworks & Libraries:
[██████████] React
[████████──] Node.js
[████████──] Express
[███████───] HTML

Tools & Technologies:
[████████──] Git
[████████──] Docker
[████████──] AWS
[███████───] Linux
[███████───] Post man

SOFT SKILLS
==========
- Team Collaboration
- Problem Solving
- Technical Leadership
- Project Management
`;

const projects = `
PROJECTS
========

1. Terminal Portfolio
   Description: A web-based terminal portfolio emulating MS-DOS
   Tech Stack: React, TypeScript, CSS
   Link: https://github.com//terminal-portfolio

2. E-commerce Platform
   Description: Full-stack e-commerce solution with real-time inventory
   Tech Stack: Next.js, Node.js, MongoDB
   Link: https://github.com//ecommerce-platform

3. Weather Dashboard
   Description: Real-time weather tracking with historical data
   Tech Stack: React, Express, OpenWeather API
   Link: https://github.com//weather-dashboard
`;

const contact = `
CONTACT INFORMATION
==================
Email: mohanay52@gmail.com
GitHub: github.com/Mohaanaaaa
LinkedIn: linkedin.com/in/mohana-y-2a121914b


Feel free to reach out! I'm always open to interesting conversations and opportunities.
`;

const help = `
Available commands:
==================
about     - Display information about me
skills    - List my technical skills
projects  - View my portfolio projects
contact   - Get my contact information
clear     - Clear the terminal
help      - Show this help message
fortune   - Display a random programming quote
`;

const fortunes = [
  `"First, solve the problem. Then, write the code." - John Johnson`,
  `"Code is like humor. When you have to explain it, it's bad." - Cory House`,
  `"The best error message is the one that never shows up." - Thomas Fuchs`,
  `"The most damaging phrase in the language is... it's always been done this way" - Grace Hopper`,
  `"Talk is cheap. Show me the code." - Linus Torvalds`
];

export const commands: Record<string, () => string> = {
  about: () => aboutMe,
  skills: () => skills,
  projects: () => projects,
  contact: () => contact,
  help: () => help,
  fortune: () => fortunes[Math.floor(Math.random() * fortunes.length)],
};