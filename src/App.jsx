import React, { useState } from "react";
import "./app.scss";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import Macwindow from "./Components/Windows/Macwindow";
import Github from "./Components/Windows/Github";
import Notes from "./Components/Windows/Notes";
import Resume from "./Components/Windows/Resume";
import Spotify from "./Spotify";
import Cli from "./Cli";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const App = () => {
  const [windowstate, setwindowstate] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
  });

    return (
      <main>
        <Navbar />
        <Dock  windowstate={windowstate} setwindowstate={setwindowstate}/>

        {windowstate.github && <Github windowName="Github"   setwindowstate={setwindowstate} />}
        {windowstate.notes && <Notes windowName="Notes"    setwindowstate={setwindowstate}/>}
        {windowstate.resume && <Resume windowName="Resume"  setwindowstate={setwindowstate}/>}
        {windowstate.spotify && <Spotify windowName="Spotify"  setwindowstate={setwindowstate}/>}
        {windowstate.cli && <Cli windowName="Cli"  setwindowstate={setwindowstate}/>}
        
      </main>
    );
  };

export default App;
