import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const Macwindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setwindowstate,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 300, y: 100 });
  const [size, setSize] = useState({ width: width, height: height });

  const handleMinimize = () => {
    setwindowstate((state) => ({
      ...state,
      [windowName.toLowerCase()]: false,
    }));
  };

  const handleMaximize = () => {
    if (!isMaximized) {
      setIsMaximized(true);
      setSize({ width: "100vw", height: "100vh" });
      setPosition({ x: 0, y: 0 });
    } else {
      setIsMaximized(false);
      setSize({ width: width, height: height });
      setPosition({ x: 300, y: 100 });
    }
  };

  return (
    <div>
      <Rnd
        position={position}
        size={size}
        onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
        onResizeStop={(e, direction, ref, delta, position) => {
          setSize({
            width: ref.style.width,
            height: ref.style.height,
          });
          setPosition(position);
        }}
        disableDragging={isMaximized}
        enableResizing={!isMaximized}
      >
        <div className="window">
          <div className="nav">
            <div className="dots">
              <div
                onClick={() =>
                  setwindowstate((state) => ({
                    ...state,
                    [windowName.toLowerCase()]: false,
                  }))
                }
                className="dot red"
                title="Close"
              ></div>

              <div
                onClick={handleMinimize}
                className="dot yellow"
                title="Minimize"
              ></div>

              <div
                onClick={handleMaximize}
                className="dot green"
                title={isMaximized ? "Exit Fullscreen" : "Fullscreen"}
              ></div>
            </div>

            {/* ✅ FIXED TITLE HERE */}
            <div className="title">
              <p>
                {windowName === "Cli"
                  ? "pradeep@mac ~ zsh"
                  : `Pradeep@mac ~ ${windowName}`}
              </p>
            </div>
          </div>

          <div className="main-content">{children}</div>
        </div>
      </Rnd>
    </div>
  );
};

export default Macwindow;