import React from 'react'
import './doc.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ( {windowstate, setwindowstate} ) => {
  return (
    <div>
        <footer className='doc'>
            <div
            onClick={(ele)=>{
            setwindowstate((state)=>({...state,github:true }))
            }}
            className="icon git"><img src="/doc-icons/github.svg" alt="" /></div>

            <div
            onClick={(ele)=>{
            setwindowstate((state)=>({...state,notes:true }))
            }}
            className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
            <div
            onClick={(ele)=>{
            setwindowstate((state)=>({...state,resume:true }))
            }}
            className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div
            onClick={(ele)=>{
            window.open("https://calendar.google.com/calendar/","_blank")
            }
            }
            className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
            <div
            onClick={(ele)=>{
            setwindowstate((state)=>({...state,spotify:true }))
            }}
            className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
            
            <div
            onClick={(ele)=>{
            window.open("mailto:masood.al.razzaq@gmail.com" ,"_blank")
            }}
            className="icon mail"><img src="/doc-icons/mail.svg" alt="" /></div>

            <div 
            onClick={(ele)=>{
            window.open("https://www.linkedin.com/in/masood-al-razzaq-4a0b46296/")
            }}

            className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>

            <div
           onClick={(ele)=>{
            setwindowstate((state)=>({...state,cli:true }))
            }}
            className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>


        </footer>
    </div>
  )
}

export default Dock
