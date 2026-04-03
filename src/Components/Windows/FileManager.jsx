import React, { useState } from 'react'
import Macwindow from './Macwindow'
import './filemanager.scss'

const FileManager = ({ windowName, setwindowstate }) => {
  const [fileSystem, setFileSystem] = useState({
    root: {
      name: 'root',
      type: 'folder',
      children: {
        'Documents': {
          name: 'Documents',
          type: 'folder',
          children: {
            'resume.pdf': { name: 'resume.pdf', type: 'file', size: '2.5 MB' },
            'portfolio.txt': { name: 'portfolio.txt', type: 'file', size: '1.2 MB' }
          }
        },
        'Projects': {
          name: 'Projects',
          type: 'folder',
          children: {
            'scheds': {
              name: 'scheds',
              type: 'folder',
              children: {}
            },
            'fintrack': {
              name: 'fintrack',
              type: 'folder',
              children: {}
            }
          }
        },
        'Assets': {
          name: 'Assets',
          type: 'folder',
          children: {
            'icon.png': { name: 'icon.png', type: 'file', size: '256 KB' },
            'logo.png': { name: 'logo.png', type: 'file', size: '512 KB' }
          }
        }
      }
    }
  })

  const [currentPath, setCurrentPath] = useState(['root'])
  const [newItemName, setNewItemName] = useState('')
  const [itemType, setItemType] = useState('folder')
  const [renamingItem, setRenamingItem] = useState(null)
  const [renameValue, setRenameValue] = useState('')

  // Navigate to a folder
  const navigateTo = (folderName) => {
    setCurrentPath([...currentPath, folderName])
  }

  // Go back to parent folder
  const goBack = () => {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1))
    }
  }

  // Get current folder object
  const getCurrentFolder = () => {
    let current = fileSystem.root
    for (let i = 1; i < currentPath.length; i++) {
      current = current.children[currentPath[i]]
    }
    return current
  }

  // Create new folder or file
  const createItem = () => {
    if (!newItemName.trim()) return

    const newPath = [...currentPath]
    let current = fileSystem.root

    for (let i = 1; i < newPath.length; i++) {
      current = current.children[newPath[i]]
    }

    const newItem = itemType === 'folder'
      ? { name: newItemName, type: 'folder', children: {} }
      : { name: newItemName, type: 'file', size: '0 KB' }

    current.children[newItemName] = newItem

    setFileSystem({ ...fileSystem })
    setNewItemName('')
  }

  // Delete folder or file
  const deleteItem = (itemName) => {
    const newPath = [...currentPath]
    let current = fileSystem.root

    for (let i = 1; i < newPath.length; i++) {
      current = current.children[newPath[i]]
    }

    delete current.children[itemName]
    setFileSystem({ ...fileSystem })
  }

  // Rename folder or file
  const renameItem = (oldName) => {
    if (!renameValue.trim() || renameValue === oldName) {
      setRenamingItem(null)
      return
    }

    const newPath = [...currentPath]
    let current = fileSystem.root

    for (let i = 1; i < newPath.length; i++) {
      current = current.children[newPath[i]]
    }

    const item = current.children[oldName]
    current.children[renameValue] = { ...item, name: renameValue }
    delete current.children[oldName]

    setFileSystem({ ...fileSystem })
    setRenamingItem(null)
    setRenameValue('')
  }

  const currentFolder = getCurrentFolder()
  const items = Object.values(currentFolder.children)

  return (
    <Macwindow windowName={windowName} setwindowstate={setwindowstate}>
      <div className="file-manager">
        <div className="fm-toolbar">
          <button onClick={goBack} className="btn-nav" disabled={currentPath.length === 1}>
            ← Back
          </button>
          <div className="path-display">
            {currentPath.join(' / ')}
          </div>
        </div>

        <div className="fm-actions">
          <input
            type="text"
            placeholder="New name..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="input-new-item"
          />
          <select value={itemType} onChange={(e) => setItemType(e.target.value)} className="select-type">
            <option value="folder">📁 Folder</option>
            <option value="file">📄 File</option>
          </select>
          <button onClick={createItem} className="btn-create">
            Create
          </button>
        </div>

        <div className="fm-items">
          {items.length === 0 ? (
            <div className="empty-folder">Empty folder</div>
          ) : (
            items.map((item) => (
              <div key={item.name} className={`fm-item ${item.type}`}>
                <div className="item-info">
                  <span className="item-icon">
                    {item.type === 'folder' ? '📁' : '📄'}
                  </span>
                  {renamingItem === item.name ? (
                    <input
                      autoFocus
                      type="text"
                      value={renameValue}
                      onChange={(e) => setRenameValue(e.target.value)}
                      onBlur={() => renameItem(item.name)}
                      onKeyPress={(e) => e.key === 'Enter' && renameItem(item.name)}
                      className="input-rename"
                    />
                  ) : (
                    <span
                      className="item-name"
                      onDoubleClick={() => {
                        setRenamingItem(item.name)
                        setRenameValue(item.name)
                      }}
                    >
                      {item.name}
                    </span>
                  )}
                  {item.type === 'file' && <span className="item-size">{item.size}</span>}
                </div>

                <div className="item-actions">
                  {item.type === 'folder' && (
                    <button
                      onClick={() => navigateTo(item.name)}
                      className="btn-open"
                      title="Open folder"
                    >
                      Open
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setRenamingItem(item.name)
                      setRenameValue(item.name)
                    }}
                    className="btn-rename"
                    title="Rename"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteItem(item.name)}
                    className="btn-delete"
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Macwindow>
  )
}

export default FileManager
