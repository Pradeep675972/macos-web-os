import React from 'react'
import Macwindow from './Components/Windows/Macwindow'
import Terminal from 'react-console-emulator'

const Cli = ({windowName, setwindowstate}) => {
  const commands = {
  
    whoami: {
      description: 'Display current user information',
      usage: 'whoami',
      fn: () => `
┌─ User Information ─────────────────────────────┐
│ Username: masood                               │
│ Role: Full Stack Developer                     │
│ Location: Earth                                │
│ Status: Open for opportunities 🚀             │
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

Hi! I'm a passionate full-stack developer with expertise in:
• Building modern web applications
• Crafting beautiful user interfaces
• Writing clean and maintainable code
• Problem solving and system design

I love turning ideas into reality through code and
continuously learning new technologies.
      `
    },
    projects: {
      description: 'View all projects',
      usage: 'projects',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║                   My Projects                         ║
╚════════════════════════════════════════════════════════╝

1. 📊 Scheds - Course Schedule Generator
   Stack: ASP.NET Core, C#, SQL Server
   Repo: github.com/yourname/scheds

2. 💰 FinTrack - Personal Finance Dashboard
   Stack: React, TypeScript, Node.js
   Repo: github.com/yourname/fintrack

3. 🔐 SecureAuth - Backend Identity Service
   Stack: Python, Django, PostgreSQL
   Repo: github.com/yourname/secureauth

4. 💬 ChatStream - Real-time Messaging App
   Stack: Vue.js, Firebase, Socket.io
   Repo: github.com/yourname/chatstream

5. ⚙️  TerminalX - CLI Productivity Tool
   Stack: Rust, Tokio
   Repo: github.com/yourname/terminalx

Use 'projects -v' for verbose details
      `
    },
    skills: {
      description: 'Display technical skills',
      usage: 'skills',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║              Technical Skills                         ║
╚════════════════════════════════════════════════════════╝

Frontend:
  • React.js (95%)
  • Next.js (90%)
  • TypeScript (85%)
  • Tailwind CSS (90%)
  • Vue.js (70%)

Backend:
  • Node.js (90%)
  • Python (85%)
  • Django (80%)
  • ASP.NET Core (85%)
  • Rust (70%)

Databases & Tools:
  • PostgreSQL (85%)
  • MongoDB (80%)
  • Docker (80%)
  • Redis (75%)
  • AWS (80%)
  • Git (95%)
      `
    },
    contact: {
      description: 'Get contact information',
      usage: 'contact',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║              Contact Information                      ║
╚════════════════════════════════════════════════════════╝

📧 Email: masood@example.com
💼 LinkedIn: linkedin.com/in/masood
🐙 GitHub: github.com/masood
🐦 Twitter: @masood_dev
🌐 Website: masood.dev

Let's connect and build something amazing together! 🚀
      `
    },
    social: {
      description: 'Display social media links',
      usage: 'social',
      fn: () => `
╔════════════════════════════════════════════════════════╗
║              Social Media                             ║
╚════════════════════════════════════════════════════════╝

👥 GitHub:    github.com/masood
📘 LinkedIn:  linkedin.com/in/masood
🐦 Twitter:   twitter.com/masood_dev
📷 Instagram: instagram.com/masood_dev
💼 Portfolio: masood.dev
      `
    },
    ls: {
      description: 'List portfolio contents',
      usage: 'ls',
      fn: () => `
📁 ~/portfolio/
├── 📁 projects/
├── 📁 skills/
├── 📁 experience/
├── 📄 about.md
└── 📄 resume.pdf

Use 'cd <folder>' to navigate
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
║        Welcome to Masood's Portfolio CLI              ║
║                                                        ║
║  Type 'help' to see all available commands            ║
║  Type 'about' to learn about me                       ║
║  Type 'projects' to view my work                      ║
║                                                        ║
║  Enjoy exploring! 🚀                                   ║
╚════════════════════════════════════════════════════════╝
  `

  return (
    <Macwindow windowName={windowName}  setwindowstate={setwindowstate}>
        <div className="cli">
            <Terminal
              commands={commands}
              welcomeMessage={welcomeMessage}
              promptLabel={'masood@portfolio:~$'}
              promptLabelStyle={{ color: '#00ff00' }}
            />
        </div>
    </Macwindow>
  )
}

export default Cli
