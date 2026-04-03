import React from 'react'
import Macwindow from './Macwindow'
import "./resume.scss"
const Resume = ({windowName, setwindowstate}) => {
  return (
 <Macwindow windowName={windowName}  setwindowstate={setwindowstate}>
    <div className="resume-window">
        <embed src="./resume.pdf" frameborder="0"></embed>
    </div>
 </Macwindow>
  )
}

export default Resume
