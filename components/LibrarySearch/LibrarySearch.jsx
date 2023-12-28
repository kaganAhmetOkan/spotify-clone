"use client";
import style from "./LibrarySearch.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";
import { useState } from "react";

export default function LibrarySearch({ smallIconSize, minimized, setMinimized }) {
  const [showSearch, setShowSearch] = useState(false);
  
  function toggleShowSearch() {
    if (showSearch && minimized) {
      setMinimized(false);
    } else {
      setShowSearch(!showSearch);
      setMinimized(false);
    };
  };

  return (
    <search className={style.main} data-show-search={showSearch && !minimized}>
      <button onClick={toggleShowSearch}>
        <Image src="/icons/search.png" alt="library search" width={smallIconSize} height={smallIconSize} />
      </button>
      <input
        type="text"
        placeholder="Search in your library"
        disabled={!showSearch || minimized}
      ></input>
    </search>
  );
};

LibrarySearch.propTypes = {
  smallIconSize: PropTypes.number.isRequired,
  minimized: PropTypes.bool.isRequired,
  setMinimized: PropTypes.func.isRequired,
};