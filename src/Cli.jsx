import React from 'react'
import Macwindow from './Components/Windows/Macwindow'
import Terminal from 'react-console-emulator'

const Cli = ({ windowName, setwindowstate }) => {

  const commands = {

    whoami: {
      description: 'Display current user information',
      usage: 'whoami',
      fn: () => `
┌─ User Information ─────────────────────────────┐
│ Name: Pradeep Rathore                         │
│ Role: Full Stack Developer                    │
│ Education: B.Tech CSE (AI & ML)               │
│ Location: India                               │
│ Status: Open for Internship 🚀                │
└────────────────────────────────────────────────┘
      `
    },

    about: {
      description: 'Learn about me',
      usage: 'about',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║                    About Me                           ║
╚════════════════════════════════════════════════════════╝

I am a self-motivated Computer Science student pursuing B.Tech in
Artificial Intelligence & Machine Learning.

• Strong in Java, JavaScript & Full Stack Development
• Experience in React.js, Node.js, MongoDB
• Passionate about building scalable web applications
• Problem solver with good teamwork & communication skills

I love creating real-world applications and continuously learning
new technologies 🚀
      `
    },

    projects: {
      description: 'View all projects',
      usage: 'projects',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║                   My Projects                         ║
╚════════════════════════════════════════════════════════╝

1. 🏥 Doctor Appointment Booking System
   Stack: React, Node.js, Express, MongoDB, JWT, Redux
   • Secure login system for doctors & patients
   • Dynamic doctor profiles & scheduling
   • Admin panel with user & appointment management

2. 💻 macOS Inspired UI Clone
   Stack: React, JavaScript, HTML, CSS
   • macOS-style desktop interface
   • Dock, window animations, responsive design
   • Smooth UI interactions & reusable components

(Add your GitHub links here)
      `
    },

    skills: {
      description: 'Display technical skills',
      usage: 'skills',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║              Technical Skills                         ║
╚════════════════════════════════════════════════════════╝

Programming:
  • Core Java
  • JavaScript
  • SQL

Frontend:
  • React.js
  • HTML, CSS
  • Tailwind CSS

Backend:
  • Node.js
  • Express.js

Database:
  • MongoDB
  • MySQL, PostgreSQL, SQL Server

Tools:
  • Git & GitHub

Soft Skills:
  • Teamwork
  • Communication
  • Problem Solving
      `
    },

    contact: {
      description: 'Get contact information',
      usage: 'contact',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║              Contact Information                      ║
╚════════════════════════════════════════════════════════╝

📧 Email: pradeeprathore877@gmail.com
📱 Phone: 9752264618
💼 LinkedIn: https://www.linkedin.com/in/pradeep-rathore-95440137b/
🐙 GitHub: https://github.com/Pradeep675972

Let's connect and build something amazing 🚀
      `
    },

    social: {
      description: 'Display social media links',
      usage: 'social',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║              Social Media                             ║
╚════════════════════════════════════════════════════════╝

👥 GitHub:    https://github.com/Pradeep675972
📘 LinkedIn:  https://www.linkedin.com/in/pradeep-rathore-95440137b/
      `
    },

    education: {
      description: 'View education details',
      usage: 'education',
      fn: () => `
🎓 B.Tech CSE (AI & ML)
Lakshmi Narain College of Technology, Bhopal
CGPA: 7.87 (2022–2026)

🏫 12th - Govt. Excellence School
Percentage: 71.4% (2021–2022)

🏫 10th - Govt. Excellence School
Percentage: 85.3% (2019–2020)
      `
    },

    certs: {
      description: 'View certifications',
      usage: 'certs',
      fn: () => `
📜 Certifications

• Java Programming Fundamentals – Infosys Springboard
• Introduction to Cybersecurity – Cisco Networking Academy
      `
    },

    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    }
  }

  const welcomeMessage = `
╔════════════════════════════════════════════════════════╗
║   Welcome to Pradeep Rathore's Portfolio CLI          ║
║                                                        ║
║  Type 'help' to explore commands                      ║
║  Type 'about' to know me                              ║
║  Type 'projects' to view work                         ║
║                                                        ║
║  Full Stack Developer 🚀                              ║
╚════════════════════════════════════════════════════════╝
  `

  return (
    <Macwindow windowName={windowName} setwindowstate={setwindowstate}>
      <div className="cli">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={'pradeep@portfolio:~$'}
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </Macwindow>
  )
}

export default Cli