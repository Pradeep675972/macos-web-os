import React from 'react'
import Macwindow from './Components/Windows/Macwindow'
import "./spotify.scss"
const Spotify = ({windowName, setwindowstate}) => {
  return (
    <Macwindow windowName={windowName}  setwindowstate={setwindowstate} width='30vw' height='60vh'>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </Macwindow>
  )
}

export default Spotify
