import React from 'react'
import './desktopfolders.scss'

const DesktopFolders = ({ windowstate, setwindowstate }) => {
  const folders = [
    { id: 1, name: 'Documents', icon: '📄' },
    { id: 2, name: 'Projects', icon: '💻' },
    { id: 3, name: 'Assets', icon: '🎨' },
    { id: 4, name: 'Downloads', icon: '⬇️' }
  ]

  const handleFolderDoubleClick = () => {
    setwindowstate((state) => ({ ...state, finder: true }))
  }

  return (
    <div className="desktop-folders">
      {folders.map((folder) => (
        <div
          key={folder.id}
          className="desktop-folder"
          onDoubleClick={handleFolderDoubleClick}
        >
          <div className="folder-icon">{folder.icon}</div>
          <div className="folder-name">{folder.name}</div>
        </div>
      ))}
    </div>
  )
}

export default DesktopFolders
