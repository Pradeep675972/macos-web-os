import React,{useEffect, useState} from 'react'
import Markdown from 'react-markdown'
import Macwindow from './Macwindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import'./note.scss'

const Notes = ({windowName, setwindowstate}) => {


    const [markdown, setmarkdown] = useState(null)
    useEffect((ele)=>{
    fetch('../../../public/note.txt')
    .then(res=>res.text())
    .then(text=>{setmarkdown(text)})
    },[])
  return (
  <Macwindow windowName={windowName}  setwindowstate={setwindowstate} >
    <div className="note-window">
        {markdown ? <SyntaxHighlighter language="typescript" style={atomOneDark}>{markdown}</SyntaxHighlighter>: <p>Loading...</p>}
    </div>
  </Macwindow>
  )
}

export default Notes
