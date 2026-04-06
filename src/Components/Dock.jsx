import React from 'react'
import './doc.scss'

const Dock = ({ windowstate, setwindowstate }) => {
  return (
    <div>
      <footer className='doc'>

        {/* GitHub */}
        <div
          onClick={() => {
            setwindowstate((state) => ({ ...state, github: true }))
          }}
          className="icon git"
          title="GitHub"
        >
          <img src="/doc-icons/github.svg" alt="GitHub" />
        </div>

        {/* Notes */}
        <div
          onClick={() => {
            setwindowstate((state) => ({ ...state, notes: true }))
          }}
          className="icon note"
          title="Notes"
        >
          <img src="/doc-icons/note.svg" alt="Notes" />
        </div>

        {/* Resume */}
        <div
          onClick={() => {
            setwindowstate((state) => ({ ...state, resume: true }))
          }}
          className="icon pdf"
          title="Resume"
        >
          <img src="/doc-icons/pdf.svg" alt="Resume" />
        </div>

        {/* Calendar */}
        <div
          onClick={() => {
            window.open("https://calendar.google.com/", "_blank", "noopener,noreferrer")
          }}
          className="icon calendar"
          title="Calendar"
        >
          <img src="/doc-icons/calender.svg" alt="Calendar" />
        </div>

        {/* Spotify */}
        <div
          onClick={() => {
            setwindowstate((state) => ({ ...state, spotify: true }))
          }}
          className="icon spotify"
          title="Spotify"
        >
          <img src="/doc-icons/spotify.svg" alt="Spotify" />
        </div>

        {/* Mail (FIXED ✅) */}
        <div
          onClick={() => {
            window.open(
              "mailto:pradeeprathore877@gmail.com?subject=Hello Pradeep&body=I saw your portfolio",
              "_blank"
            )
          }}
          className="icon mail"
          title="Mail"
        >
          <img src="/doc-icons/mail.svg" alt="Mail" />
        </div>

        {/* LinkedIn (FIXED ✅) */}
        <div
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/pradeep-rathore-95440137b/",
              "_blank",
              "noopener,noreferrer"
            )
          }}
          className="icon link"
          title="LinkedIn"
        >
          <img src="/doc-icons/link.svg" alt="LinkedIn" />
        </div>

        {/* CLI */}
        <div
          onClick={() => {
            setwindowstate((state) => ({ ...state, cli: true }))
          }}
          className="icon cli"
          title="Terminal"
        >
          <img src="/doc-icons/cli.svg" alt="CLI" />
        </div>

      </footer>
    </div>
  )
}

export default Dock