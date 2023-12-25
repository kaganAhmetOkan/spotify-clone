"use client";
import style from "./Library.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";
import { useState } from "react";

export default function Library({ iconSize }) {
  const [minimized, setMinimized] = useState(false);
  const libraryIcon = minimized ? "/icons/library.png" : "/icons/library_filled.png";
  const buttonTitle = minimized ? "Expand Your Library" : "Collapse Your Library";

  function toggleMinimized() {
    setMinimized(!minimized);
  };
  
  return (
    <div className={style.main}>
      <button onClick={toggleMinimized} className={style.button} data-active={!minimized} title={buttonTitle}>
        <Image src={libraryIcon} alt="library" width={iconSize} height={iconSize} />
        <span>Library</span>
      </button>
    </div>
  );
};

Library.propTypes = {
  iconSize: PropTypes.number.isRequired,
};

// TODO: Make a seperate component for button